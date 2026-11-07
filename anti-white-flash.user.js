// ==UserScript==
// @name         通用防白闪
// @name:en      Anti White Flash
// @namespace    dark-mode-plus-plus.anti-white-flash
// @version      1.0.14
// @description  网页首屏真正可见前，按 Dark Reader 的 document-start fallback 给 html、body 和 body 子节点垫 #181a1b，并给 html 加上 color-scheme: dark。系统浅色或检测到 Dark Reader 时跳过。首屏就绪后立刻撤掉并触发一次重绘。兼容 Violentmonkey，目标浏览器 Helium (Chromium)。
// @description:en Follows Dark Reader's document-start fallback: pads html, body, and body descendants with #181a1b and sets html color-scheme: dark until the real first screen is visible. Skips on a light system theme or when Dark Reader is active. Removes the pad as soon as the first screen is ready and kicks a repaint. Violentmonkey / Helium (Chromium).
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

    // Keep this boot path deliberately tiny and before every helper declaration.
    // Violentmonkey still cannot run before the browser creates a new document,
    // but as soon as it is allowed to execute, give that document a dark canvas.
    // The normal lifecycle below removes these temporary root styles when a page
    // is confirmed light or when Dark Reader takes over.
    var earlyRoot = document.documentElement;
    var earlyStyle = null;
    var earlyHeadMover = null;
    var earlyRootVisuals = false;
    var earlyDarkReader = false;
    try {
        earlyDarkReader = !!(earlyRoot && (
            earlyRoot.getAttribute('data-darkreader-mode') ||
            earlyRoot.getAttribute('data-darkreader-scheme') ||
            (earlyRoot.classList && (
                earlyRoot.classList.contains('darkreader') ||
                earlyRoot.classList.contains('darkreader--loaded')
            )) ||
            document.querySelector('.darkreader--fallback, .darkreader, style.darkreader')
        ));
    } catch (error) {
        earlyDarkReader = false;
    }
    if (
        window.top === window.self &&
        !earlyDarkReader &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        earlyRoot
    ) {
        // Copy Dark Reader's inject/fallback.ts: a document-start stylesheet,
        // not inline html/body styles and not a full-viewport overlay node.
        try {
            earlyStyle = document.createElement('style');
            earlyStyle.id = 'dmpp-awf-style';
            earlyStyle.media = 'screen';
            earlyStyle.textContent = [
                'html, body, body :not(iframe) {',
                '    background-color: #181a1b !important;',
                '    border-color: #776e62 !important;',
                '    color: #e8e6e3 !important;',
                '}',
                'html, body {',
                '    opacity: 1 !important;',
                '    transition: none !important;',
                '}',
                'html {',
                '    background-color: #181a1b !important;',
                '    color-scheme: dark !important;',
                '}',
                'iframe {',
                '    color-scheme: dark !important;',
                '}'
            ].join('\n');
            if (document.head) {
                document.head.appendChild(earlyStyle);
            } else {
                earlyRoot.appendChild(earlyStyle);
                earlyHeadMover = new MutationObserver(function () {
                    if (!document.head || !earlyStyle || !earlyStyle.isConnected) {
                        if (earlyHeadMover) earlyHeadMover.disconnect();
                        earlyHeadMover = null;
                        return;
                    }
                    earlyHeadMover.disconnect();
                    earlyHeadMover = null;
                    document.head.appendChild(earlyStyle);
                });
                earlyHeadMover.observe(earlyRoot, { childList: true });
            }
            earlyRootVisuals = true;
        } catch (error) {
            earlyStyle = null;
        }
        // Nudge Arc to composite this dark canvas. Without a layer change,
        // some webviews stay on the browser's white backing until a later paint.
        try {
            earlyRoot.style.setProperty('transform', 'translateZ(0)');
            void earlyRoot.offsetHeight;
            earlyRoot.style.removeProperty('transform');
        } catch (error) {}
    }

    if (window.top !== window.self) return;

    var OVERLAY_ID = 'dmpp-awf-overlay';
    var STYLE_ID = 'dmpp-awf-style';
    var FADE_MS = 160;
    var SETTLE_MS = 120;
    var THEME_GRACE_MS = 400;
    var LIGHT_PAGE_GRACE_MS = 700;
    var POLL_MS = 50;
    var OVERLAY_MAX_MS = 3200;
    var HARD_MAX_MS = 5000;
    var DARK_SURFACE_CACHE_MS = 80;
    var LIGHT_FALLBACK = '#ffffff';
    var DARK_FALLBACK = '#181a1b';
    var DARK_FALLBACK_TEXT = '#e8e6e3';
    var DARK_FALLBACK_BORDER = '#776e62';

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
    var styleEl = earlyStyle;
    var htmlObserver = null;
    var bodyObserver = null;
    var docObserver = null;
    var pollTimer = null;
    var finishTimer = null;
    var overlayMaxTimer = null;
    var hardMaxTimer = null;
    var fadeTimer = null;
    var styleTimer = null;
    var kickTimers = [];
    var kickGen = 0;
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
    var pageLoadedAt = 0;
    var viewportSampleAt = 0;
    var viewportSample = null;

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

    function isOwnGuardColor(color) {
        // Dark Reader's fallback canvas is #181a1b (24,26,27). While our matching
        // stylesheet is active, that color is our pad, not the site's paint.
        return !!(color && (styleEl || earlyRootVisuals) &&
            color.r === 24 && color.g === 26 && color.b === 27);
    }

    var guardDisableDepth = 0;
    function withGuardDisabled(fn) {
        // Same trick as Dark Reader detector.ts: disable our sheets, sample the
        // page's real colors, then turn them back on in the same turn.
        if (styleEl && guardDisableDepth === 0) {
            try { styleEl.disabled = true; } catch (error) {}
        }
        guardDisableDepth += 1;
        try {
            return fn();
        } finally {
            guardDisableDepth -= 1;
            if (styleEl && guardDisableDepth === 0) {
                try { styleEl.disabled = false; } catch (error) {}
            }
        }
    }

    function hasDarkPagePaint() {
        if (themeFromElement(document.documentElement) === 'dark') return true;
        if (themeFromElement(document.body) === 'dark') return true;
        return withGuardDisabled(function () {
            try {
                if (window.getComputedStyle(document.documentElement).colorScheme === 'dark') return true;
            } catch (error) {}
            var painted = getOpaqueBackground(document.body);
            if (painted && isDarkColor(painted) && !isOwnGuardColor(painted)) return true;
            // Some SPAs keep body/html white forever and paint their real shell one
            // level down. Do not mistake that white document canvas for the screen.
            return !!getVisibleDarkSurface();
        });
    }

    function getOpaqueBackground(el) {
        if (!el || !window.getComputedStyle) return null;
        try {
            return parseComputedColor(window.getComputedStyle(el).backgroundColor);
        } catch (error) {
            return null;
        }
    }

    function isGuardNode(el) {
        return !!(el && (el.id === OVERLAY_ID || el.id === STYLE_ID));
    }

    function opaqueBackdropAt(x, y) {
        var stack, i, el, depth, color;
        try {
            // Hit-testing must see through our own overlay. elementFromPoint
            // can still return a pointer-events:none cover in some engines, and
            // walking only that node's parents never reaches the page shell.
            if (typeof document.elementsFromPoint === 'function') {
                stack = document.elementsFromPoint(x, y);
            } else {
                el = document.elementFromPoint(x, y);
                stack = el ? [el] : [];
            }
        } catch (error) {
            return null;
        }
        if (!stack || !stack.length) return null;
        for (i = 0; i < stack.length; i++) {
            el = stack[i];
            if (isGuardNode(el)) continue;
            for (depth = 0; el && depth < 32; depth++, el = el.parentElement) {
                if (isGuardNode(el)) continue;
                // html/body backgrounds are supplied by this script until it is
                // safe to reveal. They cannot prove that the first screen is dark.
                if ((el === document.documentElement || el === document.body) &&
                    (styleEl || earlyRootVisuals)) continue;
                color = getOpaqueBackground(el);
                if (color && isOwnGuardColor(color)) continue;
                if (color) return color;
            }
        }
        return null;
    }

    function emptyViewportSample() {
        return { dark: 0, light: 0, total: 0, darkColor: null, lightColor: null };
    }

    // A dark first screen can be an inner application shell rather than body/html.
    // Sample visible pixels, then use the first opaque backdrop beneath each point.
    // This is viewport-based so an off-screen dark node cannot make a white first
    // screen look safe to reveal. html/body are skipped while this script is dyeing
    // them, otherwise every sample would just see the guard canvas.
    function getViewportSample() {
        var now = Date.now();
        if (now - viewportSampleAt < DARK_SURFACE_CACHE_MS && viewportSample) return viewportSample;
        viewportSampleAt = now;
        viewportSample = emptyViewportSample();

        if (!document.body || !window.innerWidth || !window.innerHeight) return viewportSample;
        return withGuardDisabled(function () {
            var xs = [0.16, 0.5, 0.84];
            var ys = [0.16, 0.5, 0.84];
            for (var yi = 0; yi < ys.length; yi++) {
                for (var xi = 0; xi < xs.length; xi++) {
                    var painted = opaqueBackdropAt(
                        Math.max(1, Math.floor(window.innerWidth * xs[xi])),
                        Math.max(1, Math.floor(window.innerHeight * ys[yi]))
                    );
                    if (!painted) continue;
                    viewportSample.total++;
                    if (isDarkColor(painted)) {
                        viewportSample.dark++;
                        if (!viewportSample.darkColor) viewportSample.darkColor = painted;
                    } else if (isNearWhiteColor(painted)) {
                        viewportSample.light++;
                        if (!viewportSample.lightColor) viewportSample.lightColor = painted;
                    }
                }
            }
            return viewportSample;
        });
    }

    function getVisibleDarkSurface() {
        var sample = getViewportSample();
        // Need a mostly-dark viewport, not a white screen with a dark sidebar.
        // Transparent samples are ignored, so a dark SPA with a few holes still
        // counts; two or more light hits still keep the overlay down.
        if (sample.dark >= 5 && (sample.total - sample.dark) <= 2 && sample.dark / sample.total >= 0.75) {
            return { color: sample.darkColor, darkPoints: sample.dark, totalPoints: sample.total };
        }
        return null;
    }

    function isConfirmedLightPage(painted) {
        var html = document.documentElement;
        var body = document.body;
        if (themeFromElement(html) === 'dark' || themeFromElement(body) === 'dark') return false;
        if (getStoredTheme() === 'dark') return false;
        if (!hasSubstantialContent() || !areStylesheetsReady()) return false;
        if (getVisibleDarkSurface()) return false;
        var sample = getViewportSample();
        if (sample.dark >= 3) return false;
        // Strong inner white content: a real light page, not an empty SPA shell.
        // Do not wait for window load; that would leave a light page dyed dark.
        if (sample.light >= 5 && (sample.total - sample.light) <= 2 && sample.light / sample.total >= 0.75) {
            return document.readyState !== 'loading';
        }
        if (!painted || isOwnGuardColor(painted) || !isNearWhiteColor(painted)) return false;
        if (document.readyState !== 'complete') return false;
        var loadedFor = pageLoadedAt ? Date.now() - pageLoadedAt : 0;
        return loadedFor >= LIGHT_PAGE_GRACE_MS;
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
            if (getVisibleDarkSurface()) return 'dark';
            var painted = getOpaqueBackground(body) || getOpaqueBackground(html);
            if (painted && !isOwnGuardColor(painted)) {
                if (isDarkColor(painted)) return 'dark';
                if (!(isNearWhiteColor(painted) && systemScheme() === 'dark')) return 'light';
            }
            // A complete, visibly white document with no dark shell is a real
            // light page (for example, a marketing page), not a dark SPA shell.
            if (isConfirmedLightPage(painted)) return 'light';
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
        var surface = scheme === 'dark' ? getVisibleDarkSurface() : null;
        var painted = surface && surface.color ? surface.color :
            (getOpaqueBackground(document.body) || getOpaqueBackground(document.documentElement));
        if (painted && isOwnGuardColor(painted)) painted = null;
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
        var pending = false;
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (!isLinkApplicable(link)) continue;
            try {
                if (link.sheet) continue;
            } catch (error) {
                continue;
            }
            pending = true;
            break;
        }
        if (pending) {
            // A hanging stylesheet (blocked, CORS, never-firing load) must not
            // keep a logged-in app under the overlay forever.
            if (document.readyState === 'complete' && pageLoadedAt && Date.now() - pageLoadedAt >= 1200) {
                if (!stylesReadyAt) stylesReadyAt = Date.now();
                return true;
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
        if (painted && isOwnGuardColor(painted)) painted = null;
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
        // Keep the html/body canvas up until the site's own dark first screen
        // exists. The guard itself is not a covering overlay, so leaving it a
        // little longer cannot freeze a logged-in app the way a full-viewport
        // node could.
        if (resolveScheme() === 'dark' && !hasDarkPagePaint()) return false;
        return true;
    }

    function buildCss(scheme, color) {
        if (scheme !== 'dark') {
            return [
                'html, body {',
                '  color-scheme: light;',
                '  background-color: ' + LIGHT_FALLBACK + ' !important;',
                '}'
            ].join('\n');
        }
        // Mirror Dark Reader inject/fallback.ts plus the user-agent html canvas.
        // Keep descendants covered until the site's own dark first screen exists,
        // then drop this stylesheet entirely.
        return [
            'html, body, body :not(iframe) {',
            '  background-color: ' + DARK_FALLBACK + ' !important;',
            '  border-color: ' + DARK_FALLBACK_BORDER + ' !important;',
            '  color: ' + DARK_FALLBACK_TEXT + ' !important;',
            '}',
            'html, body {',
            '  opacity: 1 !important;',
            '  transition: none !important;',
            '}',
            'html {',
            '  background-color: ' + DARK_FALLBACK + ' !important;',
            '  color-scheme: dark !important;',
            '}',
            'iframe {',
            '  color-scheme: dark !important;',
            '}'
        ].join('\n');
    }

    function placeStyle(parent) {
        // Dark Reader appends fallback/user-agent sheets to head (or html if
        // head is missing). Later site CSS without !important still loses.
        parent.appendChild(styleEl);
    }

    function ensureStyle() {
        var parent = document.head || document.documentElement;
        if (!parent) return;
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = STYLE_ID;
            styleEl.media = 'screen';
        } else if (!styleEl.media) {
            styleEl.media = 'screen';
        }
        if (styleEl.parentNode !== parent) {
            if (styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
            placeStyle(parent);
        }
    }

    function ensureOverlay() {
        // Do not create a full-viewport overlay node. Removing that layer can
        // leave Arc/Chromium webviews unpainted. White flash is covered by a
        // temporary html/body canvas color, then kicked into a real paint on finish.
        if (overlay) removeOverlayNode();
    }

    function applyVisuals(scheme, color) {
        // A genuine light page must be able to restore its own document canvas;
        // otherwise the tiny boot path would turn a light marketing page dark.
        if (scheme === 'light') clearEarlyRootVisuals();
        ensureStyle();
        ensureOverlay();
        if (styleEl) styleEl.textContent = buildCss(scheme, color);
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
                attributeFilter: THEME_ATTRS.concat([
                    'data-darkreader-mode',
                    'data-darkreader-scheme'
                ]),
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
        applyEarlyBodyVisuals();
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

    function restoreRootStyle(root, name, previous) {
        if (!root) return;
        if (previous) root.style.setProperty(name, previous);
        else root.style.removeProperty(name);
    }

    // Arc can leave a tab unpainted after the guard canvas is removed until
    // DevTools docks and resizes the webview. Mimic that resize without
    // leaving color-scheme or a dyed html background behind. Avoid
    // display:none: it can blank the same webview we are trying to wake.
    function kickCompositor() {
        var gen = ++kickGen;
        try {
            var root = document.documentElement;
            var body = document.body;
            if (!root) return;
            var x = window.scrollX || 0;
            var y = window.scrollY || 0;
            var prevFilter = root.style.getPropertyValue('filter');
            var prevTransform = root.style.getPropertyValue('transform');
            var prevMinHeight = root.style.getPropertyValue('min-height');
            var prevOverflow = root.style.getPropertyValue('overflow');
            var prevZoom = root.style.getPropertyValue('zoom');
            var prevWillChange = root.style.getPropertyValue('will-change');

            root.style.setProperty('filter', 'opacity(0.999)');
            root.style.setProperty('transform', 'translateZ(0)');
            root.style.setProperty('min-height', ((window.innerHeight || 0) + 1) + 'px');
            root.style.setProperty('overflow', 'auto');
            root.style.setProperty('zoom', '1.001');
            root.style.setProperty('will-change', 'transform, opacity');
            void root.offsetWidth;
            void root.offsetHeight;
            if (body) {
                void body.offsetHeight;
                void body.getBoundingClientRect();
            }
            try { window.scrollTo(x, y + 1); } catch (error) {}
            try { window.scrollTo(x, y); } catch (error) {}
            try {
                var probe = document.createElement('canvas');
                probe.width = 1;
                probe.height = 1;
                probe.setAttribute('aria-hidden', 'true');
                probe.style.cssText = 'position:fixed;left:0;top:0;width:1px;height:1px;opacity:0.01;pointer-events:none;';
                root.appendChild(probe);
                var ctx = probe.getContext && probe.getContext('2d');
                if (ctx) {
                    ctx.fillStyle = '#181a1b';
                    ctx.fillRect(0, 0, 1, 1);
                }
                void probe.getBoundingClientRect();
                if (probe.parentNode) probe.parentNode.removeChild(probe);
            } catch (error) {}

            restoreRootStyle(root, 'filter', prevFilter);
            restoreRootStyle(root, 'transform', prevTransform);
            restoreRootStyle(root, 'min-height', prevMinHeight);
            restoreRootStyle(root, 'overflow', prevOverflow);
            restoreRootStyle(root, 'zoom', prevZoom);
            restoreRootStyle(root, 'will-change', prevWillChange);
            void root.offsetHeight;
            try { window.dispatchEvent(new Event('resize')); } catch (error) {}
        } catch (error) {}

        if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(function () {
                if (gen !== kickGen) return;
                try {
                    var root = document.documentElement;
                    if (root) void root.offsetHeight;
                    try { window.dispatchEvent(new Event('resize')); } catch (error) {}
                } catch (error) {}
            });
        }
    }

    function clearCompositorKicks() {
        for (var i = 0; i < kickTimers.length; i++) clearTimeout(kickTimers[i]);
        kickTimers = [];
    }

    function scheduleCompositorKicks() {
        clearCompositorKicks();
        kickCompositor();
        var delays = [16, 32, 80, 200, 480, 1000, 1800, 2800];
        for (var i = 0; i < delays.length; i++) {
            kickTimers.push(setTimeout(kickCompositor, delays[i]));
        }
    }

    function removeOverlayNode() {
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        overlay = null;
    }

    function removeStyleNode() {
        if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
        styleEl = null;
        try {
            var leftover = document.getElementById(STYLE_ID);
            if (leftover && leftover.parentNode) leftover.parentNode.removeChild(leftover);
        } catch (error) {}
        clearEarlyRootVisuals();
    }

    function applyEarlyBodyVisuals() {
        // Dark Reader pads body through the fallback stylesheet, not inline styles.
    }

    function clearEarlyRootVisuals() {
        if (!earlyRootVisuals) return;
        if (earlyRoot) {
            earlyRoot.style.removeProperty('background-color');
            earlyRoot.style.removeProperty('color-scheme');
        }
        if (document.body) {
            document.body.style.removeProperty('background-color');
            document.body.style.removeProperty('color-scheme');
        }
        earlyRootVisuals = false;
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

    function dropGuardCanvas() {
        clearTimeout(fadeTimer);
        clearTimeout(styleTimer);
        fadeTimer = null;
        styleTimer = null;
        isOverlayHidden = true;
        removeOverlayNode();
        removeStyleNode();
        scheduleCompositorKicks();
    }

    function finish(instant, force) {
        if (isDone) {
            if (instant) dropGuardCanvas();
            return;
        }
        // Unforced finishes still require a ready first screen so a dark cover
        // is not dropped onto a still-white SPA canvas. Forced timeouts may
        // lift after that wait; they must never leave the canvas up forever.
        if (!instant && !force && !isFirstScreenReady()) return;
        isDone = true;
        cleanupWatchers();
        dropGuardCanvas();
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
        if (isDarkReaderActive()) {
            yieldToDarkReader();
            return;
        }
        if (document.body) ensurePaintWatch();
        snapshotStyleLinks();
        syncVisuals();
        if (isFirstScreenReady()) scheduleFinish();
    }

    function onDomReady() {
        snapshotStyleLinks();
        ensurePaintWatch();
        if (document.readyState === 'complete' && !pageLoadedAt) pageLoadedAt = Date.now();
        tick();
    }

    function onLoad() {
        pageLoadedAt = Date.now();
        tick();
    }

    function onPageShow(event) {
        if (event && event.persisted) finish(true);
        else kickCompositor();
    }

    function onVisibilityChange() {
        if (document.visibilityState !== 'visible') return;
        kickCompositor();
    }

    function isDarkReaderActive() {
        var html = document.documentElement;
        if (!html) return false;
        if (html.getAttribute('data-darkreader-mode') || html.getAttribute('data-darkreader-scheme')) return true;
        if (html.classList && (
            html.classList.contains('darkreader') ||
            html.classList.contains('darkreader--loaded')
        )) return true;
        var root = document.head || html;
        if (!root || !root.querySelector) return false;
        return !!(
            root.querySelector('meta[name="darkreader"]') ||
            root.querySelector(
                'style.darkreader, .darkreader--fallback, .darkreader--user-agent, ' +
                '.darkreader--invert, .darkreader--inline, .darkreader--override, ' +
                '.darkreader--variables, .darkreader--root-vars'
            )
        );
    }

    function yieldToDarkReader() {
        finish(true);
    }

    function bootstrapDarkVisuals() {
        if (!document.documentElement) return;
        // This is deliberately synchronous at document-start. The style gives
        // the document canvas a dark backing color before the overlay can paint.
        lastScheme = 'dark';
        lastColor = null;
        applyVisuals('dark', null);
    }

    function start() {
        if (systemScheme() !== 'dark') return;
        if (isDarkReaderActive()) {
            removeStyleNode();
            scheduleCompositorKicks();
            return;
        }
        bootstrapDarkVisuals();
        scheduleCompositorKicks();
        // Arm the hard deadline before any later setup that might throw.
        hardMaxTimer = setTimeout(function () {
            if (isDone) return;
            finish(true);
        }, HARD_MAX_MS);
        bindMedia(colorSchemeMedia, tick);
        bindMedia(reducedMotionMedia, tick);
        waitForHtml();
        pollTimer = setInterval(tick, POLL_MS);
        overlayMaxTimer = setTimeout(function () {
            if (isDone) return;
            tick();
            if (isFirstScreenReady()) {
                scheduleFinish();
                return;
            }
            // The first screen is already populated. Do not wait forever for a
            // perfect dark-paint sample (logged-in SPA shells often never pass).
            if (hasSubstantialContent()) finish(true);
        }, OVERLAY_MAX_MS);
        document.addEventListener('DOMContentLoaded', onDomReady);
        window.addEventListener('load', onLoad);
        window.addEventListener('pageshow', onPageShow);
        document.addEventListener('visibilitychange', onVisibilityChange);
        if (document.readyState !== 'loading') onDomReady();
        tick();
    }

    start();
})();
