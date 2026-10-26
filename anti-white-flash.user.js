// ==UserScript==
// @name         通用防白闪
// @name:en      Anti White Flash
// @namespace    dark-mode-plus-plus.anti-white-flash
// @version      1.0.3
// @description  网页首屏真正可见前，用跟随系统/页面深浅色的全屏遮罩挡住白闪。系统浅色时不遮罩。兼容 Violentmonkey，目标浏览器 Helium (Chromium)。
// @description:en Theme-aware overlay that covers the first paint until the real first screen is visible. Skips on a light system theme. Violentmonkey / Helium (Chromium).
// @author       Dark Mode++
// @match        *://*/*
// @run-at       document-start
// @grant        none
// @noframes
// @license      MIT
// @homepageURL  https://github.com/0-V-linuxdo/Dark-Mode-Plus-Plus
// @downloadURL  https://raw.githubusercontent.com/0-V-linuxdo/Dark-Mode-Plus-Plus/main/anti-white-flash.user.js
// @updateURL    https://raw.githubusercontent.com/0-V-linuxdo/Dark-Mode-Plus-Plus/main/anti-white-flash.user.js
// ==/UserScript==

(function () {
    'use strict';

    if (window.top !== window.self) return;

    var OVERLAY_ID = 'dmpp-awf-overlay';
    var STYLE_ID = 'dmpp-awf-style';
    var FADE_MS = 160;
    var SETTLE_MS = 120;
    var THEME_GRACE_MS = 400;
    var POLL_MS = 50;
    var OVERLAY_MAX_MS = 3200;
    var HARD_MAX_MS = 5000;
    var LIGHT_FALLBACK = '#ffffff';
    var DARK_FALLBACK = '#121212';

    var THEME_ATTRS = [
        'class', 'style', 'dark', 'light', 'data-theme', 'data-mode',
        'data-color-mode', 'data-color-scheme', 'data-bs-theme', 'data-ui-theme', 'theme'
    ];
    var PREFERRED_STORAGE_KEYS = [
        'theme', 'color-scheme', 'colorScheme', 'color-mode', 'colorMode',
        'appearance', 'vueuse-color-scheme', 'chakra-ui-color-mode',
        'mantine-color-scheme-value', 'nuxt-color-mode'
    ];
    var DARK_CLASS_TOKENS = tokenSet([
        'dark', 'dark-mode', 'darkmode', 'theme-dark', 'dark-theme', 'night',
        'night-mode', 'nightmode', 'mode-dark', 'color-scheme-dark', 'bp4-dark', 'bp5-dark'
    ]);
    var LIGHT_CLASS_TOKENS = tokenSet([
        'light', 'light-mode', 'lightmode', 'theme-light', 'light-theme', 'day',
        'day-mode', 'mode-light', 'color-scheme-light'
    ]);
    var DARK_VALUES = tokenSet([
        'dark', 'darker', 'darkest', 'night', 'black', 'dim', 'dimmed', 'midnight',
        'theme-dark', 'dark-mode', 'darkmode', 'night-mode'
    ]);
    var LIGHT_VALUES = tokenSet([
        'light', 'lighter', 'lightest', 'day', 'white', 'theme-light', 'light-mode',
        'lightmode', 'day-mode'
    ]);
    var SYSTEM_VALUES = tokenSet(['system', 'auto', 'default', 'device', 'match']);

    var colorSchemeMedia = typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : null;
    var reducedMotionMedia = typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    var overlay = null;
    var styleEl = null;
    var htmlObserver = null;
    var bodyObserver = null;
    var docObserver = null;
    var pollTimer = null;
    var finishTimer = null;
    var overlayMaxTimer = null;
    var hardMaxTimer = null;
    var fadeTimer = null;
    var styleTimer = null;
    var observedBody = null;
    var initialStyleLinks = null;
    var boundLinks = typeof WeakSet === 'function' ? new WeakSet() : [];
    var isDone = false;
    var isOverlayHidden = false;
    var hasPainted = false;
    var paintStarted = false;
    var lastSignalAt = 0;
    var lastScheme = null;
    var lastColor = null;
    var stylesReadyAt = 0;

    function tokenSet(list) {
        var out = Object.create(null);
        for (var i = 0; i < list.length; i++) out[list[i]] = 1;
        return out;
    }

    function systemScheme() {
        return colorSchemeMedia && colorSchemeMedia.matches ? 'dark' : 'light';
    }

    function reducedMotion() {
        return !!(reducedMotionMedia && reducedMotionMedia.matches);
    }

    function parseThemeValue(raw, keyHint) {
        if (raw == null) return null;
        var text = String(raw).trim();
        if (!text || text.length > 2000) return null;
        var lower = text.toLowerCase();
        if (SYSTEM_VALUES[lower]) return 'system';
        if (LIGHT_VALUES[lower]) return 'light';
        if (DARK_VALUES[lower]) return 'dark';
        if (lower === 'true' || lower === 'false') {
            var key = String(keyHint || '').toLowerCase();
            if (key && /dark/.test(key)) return lower === 'true' ? 'dark' : 'light';
            return null;
        }

        var first = text.charCodeAt(0);
        if (first === 123 || first === 91) {
            try {
                return parseThemeFromObject(JSON.parse(text), 0);
            } catch (error) {
                return null;
            }
        }
        return null;
    }

    function parseThemeFromObject(value, depth) {
        if (value == null || depth > 2) return null;
        if (typeof value === 'boolean') return value ? 'dark' : 'light';
        if (typeof value === 'string' || typeof value === 'number') return parseThemeValue(value);
        if (typeof value !== 'object') return null;

        var keys = [
            'theme', 'colorScheme', 'color-scheme', 'colorMode', 'color-mode',
            'appearance', 'mode', 'resolvedTheme', 'resolved-theme', 'dark',
            'isDark', 'is-dark', 'darkMode', 'dark-mode'
        ];
        for (var i = 0; i < keys.length; i++) {
            if (!Object.prototype.hasOwnProperty.call(value, keys[i])) continue;
            var parsed = parseThemeFromObject(value[keys[i]], depth + 1);
            if (parsed) return parsed;
        }
        if (value.state && depth === 0) return parseThemeFromObject(value.state, 1);
        return null;
    }

    function parseColorSchemeList(raw) {
        if (!raw) return null;
        var tokens = String(raw).toLowerCase().replace(/only/g, ' ').split(/[\s,]+/).filter(Boolean);
        var hasDark = tokens.indexOf('dark') !== -1;
        var hasLight = tokens.indexOf('light') !== -1;
        if (hasDark && !hasLight) return 'dark';
        if (hasLight && !hasDark) return 'light';
        return null;
    }

    function themeFromClassList(el) {
        if (!el || !el.classList || !el.classList.length) return null;
        var hasDark = false;
        var hasLight = false;
        for (var i = 0; i < el.classList.length; i++) {
            var token = String(el.classList[i] || '').toLowerCase();
            if (DARK_CLASS_TOKENS[token]) hasDark = true;
            if (LIGHT_CLASS_TOKENS[token]) hasLight = true;
        }
        if (hasDark && !hasLight) return 'dark';
        if (hasLight && !hasDark) return 'light';
        return null;
    }

    function themeFromElement(el) {
        if (!el) return null;
        var classTheme = themeFromClassList(el);
        if (classTheme) return classTheme;

        var attrNames = [
            'data-theme', 'data-mode', 'data-color-mode', 'data-color-scheme',
            'data-bs-theme', 'data-ui-theme', 'theme'
        ];
        for (var i = 0; i < attrNames.length; i++) {
            if (!el.hasAttribute || !el.hasAttribute(attrNames[i])) continue;
            var parsed = parseThemeValue(el.getAttribute(attrNames[i]), attrNames[i]);
            if (parsed && parsed !== 'system') return parsed;
        }

        if (el.hasAttribute && el.hasAttribute('dark') && !el.hasAttribute('light')) return 'dark';
        if (el.hasAttribute && el.hasAttribute('light') && !el.hasAttribute('dark')) return 'light';
        if (el.style && el.style.colorScheme) {
            var scheme = parseColorSchemeList(el.style.colorScheme);
            if (scheme) return scheme;
        }
        return null;
    }

    function themeFromMeta() {
        if (!document.querySelector) return null;
        var meta = document.querySelector('meta[name="color-scheme" i]');
        return meta ? parseColorSchemeList(meta.getAttribute('content')) : null;
    }

    function isThemeStorageKey(key) {
        var k = String(key || '').toLowerCase();
        if (!k || k.length > 80) return false;
        if (k === 'dark' || k === 'isdark' || k === 'is-dark' || k === 'nightmode') return true;
        return /(^|[-_.])(theme|appearance|color[-_]?scheme|color[-_]?mode|dark[-_]?mode)([-_.]|$)/.test(k);
    }

    function readStorageTheme(storage) {
        if (!storage) return null;
        try {
            var i;
            for (i = 0; i < PREFERRED_STORAGE_KEYS.length; i++) {
                var preferred = parseThemeValue(storage.getItem(PREFERRED_STORAGE_KEYS[i]), PREFERRED_STORAGE_KEYS[i]);
                if (preferred) return preferred;
            }
            for (i = 0; i < storage.length; i++) {
                var key = storage.key(i);
                if (!isThemeStorageKey(key)) continue;
                var parsed = parseThemeValue(storage.getItem(key), key);
                if (parsed) return parsed;
            }
        } catch (error) {
            return null;
        }
        return null;
    }

    function themeFromCookie() {
        try {
            var cookie = document.cookie;
            if (!cookie) return null;
            var parts = cookie.split(';');
            for (var i = 0; i < parts.length; i++) {
                var piece = parts[i].trim();
                var eq = piece.indexOf('=');
                if (eq < 1) continue;
                var key = piece.slice(0, eq);
                if (!isThemeStorageKey(key)) continue;
                var value = piece.slice(eq + 1);
                try { value = decodeURIComponent(value); } catch (error) {}
                var parsed = parseThemeValue(value, key);
                if (parsed) return parsed;
            }
        } catch (error) {
            return null;
        }
        return null;
    }

    function getStoredTheme() {
        var stored = readStorageTheme(window.localStorage) ||
            readStorageTheme(window.sessionStorage) ||
            themeFromCookie();
        if (!stored || stored === 'system') return null;
        return stored;
    }

    function parseComputedColor(input) {
        if (!input || input === 'transparent') return null;
        var text = String(input).trim();
        var m = text.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
        if (!m) {
            m = text.match(/^rgba?\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
        }
        if (!m) return null;
        var alpha = 1;
        if (m[4] != null) {
            alpha = String(m[4]).slice(-1) === '%' ? parseFloat(m[4]) / 100 : Number(m[4]);
        }
        if (!(alpha >= 0.6)) return null;
        return {
            r: Number(m[1]),
            g: Number(m[2]),
            b: Number(m[3]),
            css: text
        };
    }

    function isDarkColor(color) {
        var r = color.r / 255;
        var g = color.g / 255;
        var b = color.b / 255;
        var lin = function (channel) {
            return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
        };
        return (0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)) < 0.45;
    }

    function isNearWhiteColor(color) {
        return color.r >= 245 && color.g >= 245 && color.b >= 245;
    }

    function hasDarkPagePaint() {
        var painted = getOpaqueBackground(document.body) || getOpaqueBackground(document.documentElement);
        return !!(painted && isDarkColor(painted));
    }

    function getOpaqueBackground(el) {
        if (!el || !window.getComputedStyle) return null;
        try {
            return parseComputedColor(window.getComputedStyle(el).backgroundColor);
        } catch (error) {
            return null;
        }
    }

    function resolveScheme() {
        var html = document.documentElement;
        var body = document.body;
        var htmlTheme = themeFromElement(html);
        if (htmlTheme) return htmlTheme;

        var stored = readStorageTheme(window.localStorage) ||
            readStorageTheme(window.sessionStorage) ||
            themeFromCookie();
        if (stored) return stored === 'system' ? systemScheme() : stored;

        var bodyTheme = themeFromElement(body);
        if (bodyTheme) return bodyTheme;

        var metaTheme = themeFromMeta();
        if (metaTheme) return metaTheme;

        if (areStylesheetsReady() && hasSubstantialContent()) {
            var painted = getOpaqueBackground(body) || getOpaqueBackground(html);
            if (painted) {
                if (isDarkColor(painted)) return 'dark';
                // Default #fff SPA shells are not a light-theme signal under system dark.
                if (!(isNearWhiteColor(painted) && systemScheme() === 'dark')) return 'light';
            }
        }
        return systemScheme();
    }

    function isSafeCssColor(value) {
        return value === 'Canvas' ||
            /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value) ||
            /^rgba?\(/i.test(value);
    }

    function getOverlayColor(scheme) {
        if (!areStylesheetsReady() || !hasSubstantialContent()) return null;
        var painted = getOpaqueBackground(document.body) || getOpaqueBackground(document.documentElement);
        if (!painted || !isSafeCssColor(painted.css)) return null;
        var paintedScheme = isDarkColor(painted) ? 'dark' : 'light';
        return paintedScheme === scheme ? painted.css : null;
    }

    function noteSignal() {
        lastSignalAt = Date.now();
        if (finishTimer) {
            clearTimeout(finishTimer);
            finishTimer = null;
        }
    }

    function isLinkApplicable(link) {
        if (!link || link.disabled) return false;
        var rel = String(link.rel || '').toLowerCase();
        if (rel.indexOf('stylesheet') === -1) return false;
        var media = link.media;
        if (!media || media === 'all') return true;
        try {
            return window.matchMedia(media).matches;
        } catch (error) {
            return true;
        }
    }

    function rememberLink(link) {
        if (boundLinks && boundLinks.add) {
            if (boundLinks.has(link)) return false;
            boundLinks.add(link);
            return true;
        }
        if (boundLinks.indexOf(link) !== -1) return false;
        boundLinks.push(link);
        return true;
    }

    function markStylesheet(link) {
        if (!isLinkApplicable(link) || !rememberLink(link)) return;
        try {
            if (link.sheet) return;
        } catch (error) {
            return;
        }
        var done = function () { tick(); };
        link.addEventListener('load', done, { once: true });
        link.addEventListener('error', done, { once: true });
    }

    function snapshotStyleLinks() {
        if (initialStyleLinks || document.readyState === 'loading' || !document.querySelectorAll) return;
        initialStyleLinks = Array.prototype.slice.call(document.querySelectorAll('link[rel~="stylesheet"]'));
        for (var i = 0; i < initialStyleLinks.length; i++) markStylesheet(initialStyleLinks[i]);
    }

    function areStylesheetsReady() {
        if (document.readyState === 'loading') return false;
        snapshotStyleLinks();
        var links = initialStyleLinks || [];
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (!isLinkApplicable(link)) continue;
            try {
                if (link.sheet) continue;
            } catch (error) {
                continue;
            }
            return false;
        }
        if (!stylesReadyAt) stylesReadyAt = Date.now();
        return true;
    }

    function isShown(el) {
        if (!el || !window.getComputedStyle) return !!el;
        try {
            var cs = window.getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return false;
            if (cs.opacity !== '' && Number(cs.opacity) === 0) return false;
            return true;
        } catch (error) {
            return true;
        }
    }

    function compactText(el) {
        try {
            return String(el.textContent || '').replace(/\s+/g, '');
        } catch (error) {
            return '';
        }
    }

    function isIgnorableTag(tag) {
        return tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK' ||
            tag === 'META' || tag === 'NOSCRIPT' || tag === 'TEMPLATE';
    }

    // Empty SPA shells (div#root with no text) are not a first screen.
    function isSubstantialNode(el, depth) {
        if (!el || el.nodeType !== 1 || depth > 2) return false;
        if (el.id === OVERLAY_ID || el.id === STYLE_ID) return false;
        if (isIgnorableTag(el.tagName)) return false;
        if (!isShown(el)) return false;
        var rect;
        try {
            rect = el.getBoundingClientRect();
        } catch (error) {
            return false;
        }
        if (!(rect.width >= 48 && rect.height >= 24)) return false;
        if (compactText(el).length >= 16) return true;
        if (el.tagName === 'IMG' || el.tagName === 'VIDEO' || el.tagName === 'CANVAS' || el.tagName === 'SVG') {
            return rect.width >= 80 && rect.height >= 80;
        }
        var kids = el.children;
        for (var i = 0; i < kids.length; i++) {
            if (isSubstantialNode(kids[i], depth + 1)) return true;
        }
        return false;
    }

    function hasSubstantialContent() {
        var body = document.body;
        if (!body) return false;
        var kids = body.children;
        for (var i = 0; i < kids.length; i++) {
            if (isSubstantialNode(kids[i], 0)) return true;
        }
        return compactText(body).length >= 24;
    }

    function waitingForStoredTheme() {
        var stored = getStoredTheme();
        if (!stored) return false;
        var html = document.documentElement;
        var body = document.body;
        if (themeFromElement(html) || themeFromElement(body)) return false;
        var painted = getOpaqueBackground(body) || getOpaqueBackground(html);
        if (painted && hasSubstantialContent() && ((isDarkColor(painted) ? 'dark' : 'light') === stored)) return false;
        if (!stylesReadyAt) return true;
        return Date.now() - stylesReadyAt < THEME_GRACE_MS;
    }

    function ensurePaintWatch() {
        if (typeof requestAnimationFrame !== 'function') {
            hasPainted = true;
            return;
        }
        if (paintStarted) return;
        paintStarted = true;
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                hasPainted = true;
                tick();
            });
        });
    }

    function isFirstScreenReady() {
        var html = document.documentElement;
        var body = document.body;
        if (!html || !body) return false;
        if (document.readyState === 'loading') return false;
        if (!hasPainted) return false;
        if (!areStylesheetsReady()) return false;
        if (!isShown(html) || !isShown(body)) return false;
        if (waitingForStoredTheme()) return false;
        if (!hasSubstantialContent()) return false;
        // Dark overlay must not lift onto a default-white / unpainted body.
        if (resolveScheme() === 'dark' && !hasDarkPagePaint()) return false;
        return true;
    }

    function buildCss(scheme, color) {
        var schemeValue = scheme === 'dark' ? 'dark' : 'light';
        var fallback = schemeValue === 'dark' ? DARK_FALLBACK : LIGHT_FALLBACK;
        var bg = color && isSafeCssColor(color) ? color : null;
        var bgRules = bg
            ? '  background-color: ' + bg + ' !important;'
            : [
                '  background-color: ' + fallback + ' !important;',
                '  background-color: Canvas !important;'
            ].join('\n');
        return [
            '@layer dmpp-awf { html { color-scheme: ' + schemeValue + '; } }',
            '#' + OVERLAY_ID + ' {',
            '  position: fixed !important;',
            '  inset: 0 !important;',
            '  width: 100% !important;',
            '  height: 100% !important;',
            '  max-width: none !important;',
            '  max-height: none !important;',
            '  margin: 0 !important;',
            '  padding: 0 !important;',
            '  border: 0 !important;',
            '  display: block !important;',
            '  visibility: visible !important;',
            '  pointer-events: none !important;',
            '  z-index: 2147483647 !important;',
            '  color-scheme: ' + schemeValue + ' !important;',
            bgRules,
            '  contain: paint !important;',
            '  transform: translateZ(0);',
            '  transition: opacity ' + FADE_MS + 'ms ease-out;',
            '}'
        ].join('\n');
    }

    function placeStyle(parent) {
        if (parent === document.head) {
            var before = parent.firstChild;
            while (
                before &&
                before.nodeType === 1 &&
                (
                    before.tagName === 'META' ||
                    before.tagName === 'TITLE' ||
                    (before.tagName === 'LINK' && String(before.rel).toLowerCase() === 'icon')
                )
            ) {
                before = before.nextSibling;
            }
            parent.insertBefore(styleEl, before);
            return;
        }
        parent.insertBefore(styleEl, parent.firstChild);
    }

    function ensureStyle() {
        var parent = document.head || document.documentElement;
        if (!parent) return;
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = STYLE_ID;
        }
        if (styleEl.parentNode !== parent) placeStyle(parent);
    }

    function ensureOverlay() {
        var parent = document.documentElement;
        if (!parent || isOverlayHidden) return;
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = OVERLAY_ID;
            overlay.setAttribute('aria-hidden', 'true');
        }
        if (overlay.parentNode !== parent) parent.appendChild(overlay);
    }

    function applyVisuals(scheme, color) {
        ensureStyle();
        ensureOverlay();
        if (styleEl) styleEl.textContent = buildCss(scheme, color);
        if (!overlay) return;

        var schemeValue = scheme === 'dark' ? 'dark' : 'light';
        var fallback = schemeValue === 'dark' ? DARK_FALLBACK : LIGHT_FALLBACK;
        overlay.style.setProperty('pointer-events', 'none', 'important');
        overlay.style.setProperty('color-scheme', schemeValue, 'important');
        overlay.style.setProperty('background-color', fallback, 'important');
        overlay.style.setProperty('background-color', color && isSafeCssColor(color) ? color : 'Canvas', 'important');
        overlay.style.setProperty('opacity', isOverlayHidden ? '0' : '1', 'important');
    }

    function syncVisuals() {
        var scheme = resolveScheme();
        var color = getOverlayColor(scheme);
        if (scheme !== lastScheme || color !== lastColor) {
            if (lastScheme !== null) noteSignal();
            lastScheme = scheme;
            lastColor = color;
        }
        applyVisuals(scheme, color);
    }

    function observeRoot() {
        var html = document.documentElement;
        if (!html) return;
        if (!htmlObserver) {
            htmlObserver = new MutationObserver(function () {
                observeBody();
                tick();
            });
            htmlObserver.observe(html, {
                attributes: true,
                attributeFilter: THEME_ATTRS,
                childList: true
            });
        }
        observeBody();
    }

    function observeBody() {
        var body = document.body;
        if (!body || body === observedBody) return;
        if (bodyObserver) bodyObserver.disconnect();
        observedBody = body;
        bodyObserver = new MutationObserver(tick);
        bodyObserver.observe(body, {
            attributes: true,
            attributeFilter: THEME_ATTRS
        });
        ensurePaintWatch();
    }

    function waitForHtml() {
        if (document.documentElement) {
            observeRoot();
            tick();
            return;
        }
        if (docObserver) return;
        docObserver = new MutationObserver(function () {
            if (!document.documentElement) return;
            docObserver.disconnect();
            docObserver = null;
            observeRoot();
            tick();
        });
        docObserver.observe(document, { childList: true });
    }

    function bindMedia(media, fn) {
        if (!media) return;
        if (typeof media.addEventListener === 'function') media.addEventListener('change', fn);
        else if (typeof media.addListener === 'function') media.addListener(fn);
    }

    function unbindMedia(media, fn) {
        if (!media) return;
        if (typeof media.removeEventListener === 'function') media.removeEventListener('change', fn);
        else if (typeof media.removeListener === 'function') media.removeListener(fn);
    }

    function cleanupWatchers() {
        clearInterval(pollTimer);
        clearTimeout(finishTimer);
        clearTimeout(overlayMaxTimer);
        clearTimeout(hardMaxTimer);
        pollTimer = null;
        finishTimer = null;
        overlayMaxTimer = null;
        hardMaxTimer = null;
        document.removeEventListener('DOMContentLoaded', onDomReady);
        window.removeEventListener('load', onLoad);
        window.removeEventListener('pageshow', onPageShow);
        unbindMedia(colorSchemeMedia, tick);
        unbindMedia(reducedMotionMedia, tick);
        if (htmlObserver) htmlObserver.disconnect();
        if (bodyObserver) bodyObserver.disconnect();
        if (docObserver) docObserver.disconnect();
        htmlObserver = null;
        bodyObserver = null;
        docObserver = null;
    }

    function removeOverlayNode() {
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        overlay = null;
    }

    function removeStyleNode() {
        if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
        styleEl = null;
    }

    function hideOverlay() {
        if (isOverlayHidden) return;
        isOverlayHidden = true;
        if (!overlay || reducedMotion()) {
            removeOverlayNode();
            return;
        }
        overlay.style.setProperty('opacity', '0', 'important');
        fadeTimer = setTimeout(removeOverlayNode, FADE_MS + 80);
    }

    function finish(instant) {
        if (isDone) {
            if (instant) {
                clearTimeout(fadeTimer);
                clearTimeout(styleTimer);
                removeOverlayNode();
                removeStyleNode();
            }
            return;
        }
        isDone = true;
        cleanupWatchers();
        if (instant || reducedMotion()) {
            isOverlayHidden = true;
            clearTimeout(fadeTimer);
            clearTimeout(styleTimer);
            removeOverlayNode();
            removeStyleNode();
            return;
        }
        hideOverlay();
        styleTimer = setTimeout(removeStyleNode, FADE_MS + 90);
    }

    function scheduleFinish() {
        if (isDone || isOverlayHidden || finishTimer) return;
        var wait = lastSignalAt ? Math.max(0, SETTLE_MS - (Date.now() - lastSignalAt)) : 0;
        finishTimer = setTimeout(function () {
            finishTimer = null;
            if (isDone || isOverlayHidden) return;
            if (!isFirstScreenReady()) return;
            if (lastSignalAt && Date.now() - lastSignalAt < SETTLE_MS) {
                scheduleFinish();
                return;
            }
            finish(false);
        }, wait);
    }

    function tick() {
        if (isDone) return;
        if (document.body) ensurePaintWatch();
        snapshotStyleLinks();
        syncVisuals();
        if (isFirstScreenReady()) scheduleFinish();
    }

    function onDomReady() {
        snapshotStyleLinks();
        ensurePaintWatch();
        tick();
    }

    function onLoad() {
        tick();
    }

    function onPageShow(event) {
        if (event && event.persisted) finish(true);
    }

    function start() {
        if (systemScheme() !== 'dark') return;
        bindMedia(colorSchemeMedia, tick);
        bindMedia(reducedMotionMedia, tick);
        waitForHtml();
        pollTimer = setInterval(tick, POLL_MS);
        overlayMaxTimer = setTimeout(function () {
            if (isDone) return;
            if (!hasSubstantialContent()) return;
            finish(false);
        }, OVERLAY_MAX_MS);
        hardMaxTimer = setTimeout(function () { finish(true); }, HARD_MAX_MS);
        document.addEventListener('DOMContentLoaded', onDomReady);
        window.addEventListener('load', onLoad);
        window.addEventListener('pageshow', onPageShow);
        if (document.readyState !== 'loading') onDomReady();
        tick();
    }

    start();
})();
