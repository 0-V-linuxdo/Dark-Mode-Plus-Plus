// ==UserScript==
// @name         通用防白闪
// @name:en      Anti White Flash
// @namespace    dark-mode-plus-plus.anti-white-flash
// @version      1.0.35
// @description  网页首屏真正可见前，按 Dark Reader 的做法只给 html/body 画布垫一次 #181a1b，不盖整页罩、也不给子节点刷色。确认是深色站就停手，垫色留着当画布；确认浅色才撤垫。检测时不关掉垫色，超时也不揭开，避免登录态被反复探测罩住。系统浅色或检测到 Dark Reader 时跳过。兼容 Violentmonkey，目标浏览器 Helium (Chromium)。
// @description:en Follows Dark Reader's document-start canvas pad: colors html/body once with #181a1b, without a full-page overlay or descendant paint. Parks on a declared-dark site and keeps the canvas; drops only for a confirmed light page. Detection never disables the pad, and timeouts park instead of uncovering. Skips on a light system theme or when Dark Reader is active. Violentmonkey / Helium (Chromium).
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

    // A concatenated or double-installed copy must not inject a second pad.
    // The first copy owns the document for this page.
    try {
        if (window.__dmppAwfActive) return;
        window.__dmppAwfActive = true;
        window.__dmppAwfVersion = '1.0.35';
    } catch (error) {}

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
        // Copy Dark Reader's document-start canvas pad: a stylesheet on
        // html/body, not inline styles and not a full-viewport overlay node.
        try {
            earlyStyle = document.getElementById('dmpp-awf-style');
            if (!earlyStyle) {
                earlyStyle = document.createElement('style');
                earlyStyle.id = 'dmpp-awf-style';
            }
            earlyStyle.media = 'screen';
            // Pad the document canvas only. Dark Reader's fallback also
            // paints `body :not(iframe)`, but that sheet is replaced by the
            // real inversion immediately. Keeping descendant !important paint
            // here is a full-page cover: Discord's UI never shows through.
            // color-scheme must not be !important: Arc then freezes Discord
            // as a solid gray until DevTools docks. Body-only pad still lets
            // Telegram's html canvas leak white during a slow load.
            earlyStyle.textContent = [
                'html, body {',
                '    background-color: #181a1b !important;',
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
        try {
            void earlyRoot.offsetHeight;
        } catch (error) {}
    }

    if (window.top !== window.self) return;

    var OVERLAY_ID = 'dmpp-awf-overlay';
    var STYLE_ID = 'dmpp-awf-style';
    var FADE_MS = 160;
    var SETTLE_MS = 120;
    var THEME_GRACE_MS = 400;
    var LIGHT_PAGE_GRACE_MS = 700;
    var POLL_MS = 120;
    var OVERLAY_MAX_MS = 3200;
    var HARD_MAX_MS = 5000;
    var DARK_SURFACE_CACHE_MS = 240;
    var LIGHT_FALLBACK = '#ffffff';
    var DARK_FALLBACK = '#181a1b';

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
    var bodyWaitObserver = null;
    var docObserver = null;
    var pollTimer = null;
    var finishTimer = null;
    var overlayMaxTimer = null;
    var hardMaxTimer = null;
    var tickSoonTimer = null;
    var fadeTimer = null;
    var styleTimer = null;
    var kickTimers = [];
    var kickHoldTimer = null;
    var kickHeld = [];
    var observedBody = null;
    var initialStyleLinks = null;
    var boundLinks = typeof WeakSet === 'function' ? new WeakSet() : [];
    var isDone = false;
    var isParked = false;
    var parkObserver = null;
    var parkTimers = [];
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
    var shellSampleAt = 0;
    var shellSample = null;

    function tickSoon() {
        if (isDone || tickSoonTimer) return;
        tickSoonTimer = setTimeout(function () {
            tickSoonTimer = null;
            tick();
        }, 80);
    }

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

    function parseAlphaChannel(value) {
        if (value == null || value === '') return 1;
        return String(value).slice(-1) === '%' ? parseFloat(value) / 100 : Number(value);
    }

    function parseLightness01(value, unit) {
        var n = Number(value);
        if (unit === '%') return n / 100;
        return n > 1 ? n / 100 : n;
    }

    function colorFromRgb(r, g, b, css) {
        return { r: r, g: g, b: b, css: css };
    }

    function colorFromLightness(lightness, css) {
        var gray = Math.max(0, Math.min(255, Math.round(lightness * 255)));
        return { r: gray, g: gray, b: gray, css: css, lightness: lightness };
    }

    function parseComputedColor(input) {
        if (!input || input === 'transparent') return null;
        var text = String(input).trim();
        var m = text.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+%?))?\s*\)$/i);
        if (!m) {
            m = text.match(/^rgba?\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
        }
        if (m) {
            if (!(parseAlphaChannel(m[4]) >= 0.6)) return null;
            return colorFromRgb(Number(m[1]), Number(m[2]), Number(m[3]), text);
        }

        m = text.match(/^oklab\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
        if (!m) {
            m = text.match(/^oklch\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
        }
        if (m) {
            if (!(parseAlphaChannel(m[3]) >= 0.6)) return null;
            return colorFromLightness(parseLightness01(m[1], m[2]), text);
        }

        m = text.match(/^lab\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
        if (!m) {
            m = text.match(/^lch\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
        }
        if (m) {
            if (!(parseAlphaChannel(m[3]) >= 0.6)) return null;
            return colorFromLightness(Number(m[1]) / 100, text);
        }

        m = text.match(/^color\(\s*srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
        if (m) {
            if (!(parseAlphaChannel(m[4]) >= 0.6)) return null;
            return colorFromRgb(Number(m[1]) * 255, Number(m[2]) * 255, Number(m[3]) * 255, text);
        }

        return null;
    }

    function isDarkColor(color) {
        if (typeof color.lightness === 'number') return color.lightness < 0.45;
        var r = color.r / 255;
        var g = color.g / 255;
        var b = color.b / 255;
        var lin = function (channel) {
            return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
        };
        return (0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)) < 0.45;
    }

    function isNearWhiteColor(color) {
        if (typeof color.lightness === 'number') return color.lightness >= 0.96;
        return color.r >= 245 && color.g >= 245 && color.b >= 245;
    }

    function collectPadSheets() {
        var nodes = [];
        var found, i;
        if (styleEl) nodes.push(styleEl);
        try {
            found = document.querySelectorAll('#' + STYLE_ID);
            for (i = 0; i < found.length; i++) {
                if (nodes.indexOf(found[i]) === -1) nodes.push(found[i]);
            }
        } catch (error) {}
        return nodes;
    }

    function padSheetIsDyeing() {
        var nodes, i;
        if (guardDisableDepth > 0) return false;
        if (earlyRootVisuals) return true;
        nodes = collectPadSheets();
        for (i = 0; i < nodes.length; i++) {
            if (!nodes[i].disabled) return true;
        }
        return false;
    }

    function isOwnGuardColor(color) {
        // Dark Reader's fallback canvas is #181a1b (24,26,27). While our matching
        // stylesheet is actively dyeing the page, that color is our pad.
        return !!(color && padSheetIsDyeing() &&
            color.r === 24 && color.g === 26 && color.b === 27);
    }

    var guardDisableDepth = 0;
    function withGuardDisabled(fn) {
        // Same trick as Dark Reader detector.ts: disable our sheets, sample the
        // page's real colors, then turn them back on in the same turn.
        var nodes, i;
        if (guardDisableDepth === 0) {
            nodes = collectPadSheets();
            for (i = 0; i < nodes.length; i++) {
                try { nodes[i].disabled = true; } catch (error) {}
            }
            viewportSample = null;
            viewportSampleAt = 0;
            shellSample = null;
            shellSampleAt = 0;
            try {
                if (document.documentElement) document.documentElement.offsetHeight;
            } catch (error) {}
        }
        guardDisableDepth += 1;
        try {
            return fn();
        } finally {
            guardDisableDepth -= 1;
            if (guardDisableDepth === 0) {
                nodes = collectPadSheets();
                for (i = 0; i < nodes.length; i++) {
                    try { nodes[i].disabled = false; } catch (error) {}
                }
            }
        }
    }

    function hasDarkPagePaint() {
        // Class / color-scheme can appear while the canvas is still white
        // (Telegram adds theme-dark before its CSS paints; Chromium also
        // reports color-scheme: dark from prefers-color-scheme). Use this
        // only to stop probing, never to uncover a still-white page.
        // Never disable the pad here: polling that trick is a white flash on
        // slow dark SPAs such as Telegram. Skip elementsFromPoint: Arc
        // already freezes when that path runs every poll.
        var painted = getOpaqueBackground(document.body) ||
            getOpaqueBackground(document.documentElement);
        if (painted && isDarkColor(painted) && !isOwnGuardColor(painted)) {
            awfDebug.paint = 'root';
            return true;
        }
        if (getDarkPaintedShell()) {
            awfDebug.paint = 'shell';
            return true;
        }
        awfDebug.paint = '';
        return false;
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
                    padSheetIsDyeing()) continue;
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
    function viewportSize() {
        var root = document.documentElement;
        var body = document.body;
        var vw = window.innerWidth || (root && root.clientWidth) || (body && body.clientWidth) || 0;
        var vh = window.innerHeight || (root && root.clientHeight) || (body && body.clientHeight) || 0;
        return { vw: vw, vh: vh };
    }

    function getViewportSample() {
        var now = Date.now();
        var sample;
        var xs;
        var ys;
        var yi;
        var xi;
        var painted;
        var size = viewportSize();
        if (now - viewportSampleAt < DARK_SURFACE_CACHE_MS && viewportSample) return viewportSample;
        sample = emptyViewportSample();
        if (!document.body || !size.vw || !size.vh) {
            viewportSampleAt = now;
            viewportSample = sample;
            return sample;
        }
        // Keep the pad enabled. Disabling it to hit-test is a white flash on
        // a still-loading dark SPA. html/body are skipped while we dye them.
        xs = [0.16, 0.5, 0.84];
        ys = [0.16, 0.5, 0.84];
        for (yi = 0; yi < ys.length; yi++) {
            for (xi = 0; xi < xs.length; xi++) {
                painted = opaqueBackdropAt(
                    Math.max(1, Math.floor(size.vw * xs[xi])),
                    Math.max(1, Math.floor(size.vh * ys[yi]))
                );
                if (!painted) continue;
                sample.total++;
                if (isDarkColor(painted)) {
                    sample.dark++;
                    if (!sample.darkColor) sample.darkColor = painted;
                } else if (isNearWhiteColor(painted)) {
                    sample.light++;
                    if (!sample.lightColor) sample.lightColor = painted;
                }
            }
        }
        viewportSampleAt = Date.now();
        viewportSample = sample;
        return sample;
    }

    function getVisibleDarkSurface() {
        var sample = getViewportSample();
        if (!sample || !sample.total) return null;
        // Need a mostly-dark viewport, not a white screen with a dark sidebar.
        // Transparent samples are ignored, so a dark SPA with a few holes still
        // counts; two or more light hits still keep the overlay down.
        if (sample.dark >= 5 && (sample.total - sample.dark) <= 2 && sample.dark / sample.total >= 0.75) {
            return { color: sample.darkColor, darkPoints: sample.dark, totalPoints: sample.total };
        }
        return null;
    }

    function nodeOnscreenArea(el) {
        var rect;
        var size;
        var vw;
        var vh;
        var width;
        var height;
        try {
            size = viewportSize();
            vw = size.vw;
            vh = size.vh;
            if (!vw || !vh) return 0;
            rect = el.getBoundingClientRect();
            width = Math.min(rect.right, vw) - Math.max(rect.left, 0);
            height = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
            if (width > 0 && height > 0) return width * height;
            // Frozen Arc webviews can report empty rects for an on-screen shell.
            width = el.offsetWidth || el.clientWidth || 0;
            height = el.offsetHeight || el.clientHeight || 0;
            if (width <= 0 || height <= 0) return 0;
            return Math.min(width, vw) * Math.min(height, vh);
        } catch (error) {
            return 0;
        }
    }

    function isLargeShellNode(el, area, vw, vh, viewport) {
        var rect;
        var width;
        var height;
        if (!el || !vw || !vh || !viewport || area <= 0) return false;
        if (area >= viewport * 0.16) return true;
        width = el.offsetWidth || el.clientWidth || 0;
        height = el.offsetHeight || el.clientHeight || 0;
        try {
            rect = el.getBoundingClientRect();
            if (rect.width > 0) width = Math.max(width, rect.width);
            if (rect.height > 0) height = Math.max(height, rect.height);
        } catch (error) {}
        if (height >= vh * 0.5 && width >= 64 && area >= viewport * 0.05) return true;
        if (width >= vw * 0.5 && height >= 64 && area >= viewport * 0.05) return true;
        return false;
    }

    // Arc can freeze the compositor so elementsFromPoint sees nothing even
    // after Discord's Friends list exists. Walk large on-screen nodes and
    // read their computed backgrounds instead; that works without turning
    // the pad off.
    function getDarkPaintedShell() {
        var now = Date.now();
        var body;
        var vw;
        var vh;
        var viewport;
        var darkArea;
        var lightArea;
        var darkColor;
        var visited;
        var maxVisit;
        var roots;
        var i;
        function consider(el, depth) {
            var area;
            var color;
            var kids;
            var j;
            if (!el || el.nodeType !== 1 || visited >= maxVisit || depth > 4) return;
            if (isGuardNode(el) || isIgnorableTag(el.tagName)) return;
            if (!isShown(el)) return;
            area = nodeOnscreenArea(el);
            if (area < 64 * 24) return;
            visited += 1;
            if (isLargeShellNode(el, area, vw, vh, viewport)) {
                color = getOpaqueBackground(el);
                if (color && !isOwnGuardColor(color)) {
                    if (isDarkColor(color)) {
                        darkArea += area;
                        if (!darkColor) darkColor = color;
                    } else if (isNearWhiteColor(color)) {
                        lightArea += area;
                    }
                }
            }
            kids = el.children;
            if (!kids) return;
            for (j = 0; j < kids.length; j++) consider(kids[j], depth + 1);
        }
        if (now - shellSampleAt < DARK_SURFACE_CACHE_MS && shellSample !== null) return shellSample;
        body = document.body;
        vw = viewportSize().vw;
        vh = viewportSize().vh;
        viewport = vw * vh;
        if (!body || !viewport) {
            shellSampleAt = now;
            shellSample = null;
            return null;
        }
        darkArea = 0;
        lightArea = 0;
        darkColor = null;
        visited = 0;
        maxVisit = 24;
        roots = body.children;
        for (i = 0; i < roots.length; i++) consider(roots[i], 0);
        if (!darkColor || (lightArea >= viewport * 0.18 && lightArea > darkArea) || darkArea < viewport * 0.16) {
            shellSampleAt = Date.now();
            shellSample = null;
            return null;
        }
        shellSampleAt = Date.now();
        shellSample = { color: darkColor, area: darkArea };
        return shellSample;
    }

    function isLightCanvasColor(color) {
        // LinkedIn and other login walls use off-white canvases such as
        // #f3f2ef, which fail the near-white check of r/g/b >= 245.
        if (!color || isOwnGuardColor(color) || isDarkColor(color)) return false;
        if (isNearWhiteColor(color)) return true;
        if (typeof color.lightness === 'number') return color.lightness >= 0.82;
        return color.r >= 220 && color.g >= 220 && color.b >= 220;
    }

    function rootTextIsDark() {
        var el = document.body || document.documentElement;
        var color;
        if (!el || !window.getComputedStyle) return false;
        try {
            color = parseComputedColor(window.getComputedStyle(el).color);
        } catch (error) {
            return false;
        }
        return !!(color && isDarkColor(color));
    }

    function countNearWhiteHeaderHits() {
        var size = viewportSize();
        var xs = [0.16, 0.5, 0.84];
        var y;
        var i;
        var painted;
        var light = 0;
        if (!size.vw || !size.vh) return 0;
        y = Math.max(1, Math.floor(size.vh * 0.06));
        for (i = 0; i < xs.length; i++) {
            painted = opaqueBackdropAt(Math.max(1, Math.floor(size.vw * xs[i])), y);
            if (painted && (isNearWhiteColor(painted) || isLightCanvasColor(painted))) light++;
        }
        return light;
    }

    function isConfirmedLightPage() {
        var html = document.documentElement;
        var body = document.body;
        var sample;
        var loadedFor;
        var headerLight;
        if (themeFromElement(html) === 'dark' || themeFromElement(body) === 'dark') return false;
        if (getStoredTheme() === 'dark') return false;
        if (!hasSubstantialContent() || !areStylesheetsReady()) return false;
        if (getDarkPaintedShell() || getVisibleDarkSurface()) return false;
        sample = getViewportSample();
        if (sample.dark >= 3) return false;
        // Strong inner white content: a real light page, not an empty SPA shell.
        // Do not wait for window load; that would leave a light page dyed dark.
        if (sample.light >= 5 && (sample.total - sample.light) <= 2 && sample.light / sample.total >= 0.75) {
            return document.readyState !== 'loading';
        }
        // Light login walls often paint a white header and leave html/body
        // transparent. The 16/50/84 grid then misses the header and only
        // sees our pad through the rest of the page. Dark text plus a light
        // header, with no dark shell, is still a light first screen.
        headerLight = countNearWhiteHeaderHits();
        if (
            document.readyState !== 'loading' &&
            sample.dark === 0 &&
            headerLight >= 2 &&
            rootTextIsDark()
        ) {
            return true;
        }
        // Only lift the pad after the light page has actually loaded. Doing
        // this on every poll is a flicker; once is enough to see a white body.
        if (document.readyState !== 'complete') return false;
        loadedFor = pageLoadedAt ? Date.now() - pageLoadedAt : 0;
        if (loadedFor < LIGHT_PAGE_GRACE_MS) return false;
        return withGuardDisabled(function () {
            var painted = getOpaqueBackground(body) || getOpaqueBackground(html);
            if (painted && isOwnGuardColor(painted)) painted = null;
            if (painted && isDarkColor(painted)) return false;
            if (painted && isLightCanvasColor(painted)) return true;
            return !painted && sample.dark === 0 && (headerLight >= 1 || rootTextIsDark());
        });
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
            if (isConfirmedLightPage()) return 'light';
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

    function isDeclaredDark() {
        return themeFromElement(document.documentElement) === 'dark' ||
            themeFromElement(document.body) === 'dark' ||
            getStoredTheme() === 'dark' ||
            themeFromMeta() === 'dark';
    }

    function firstScreenBlocker() {
        var html = document.documentElement;
        var body = document.body;
        if (!html || !body) return 'no-root';
        if (!isShown(html) || !isShown(body)) return 'hidden';
        // Dark Reader pads once and then gets out of the way. Waiting for a
        // perfect dark first-screen sample after the overlay countdown was
        // removed is what froze Discord/Telegram on the pad.
        if (isDeclaredDark()) return 'park';
        if (isConfirmedLightPage()) {
            if (document.readyState === 'loading') return 'loading';
            if (!hasPainted) return 'paint';
            if (!areStylesheetsReady()) return 'styles';
            return '';
        }
        if (!hasSubstantialContent()) return 'content';
        if (hasDarkPagePaint()) return 'park';
        if (document.readyState === 'loading') return 'loading';
        if (waitingForStoredTheme()) return 'theme';
        return 'wait';
    }

    function isFirstScreenReady() {
        return !firstScreenBlocker();
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
        return [
            'html, body {',
            '  background-color: ' + DARK_FALLBACK + ' !important;',
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
        var existing;
        if (!parent) return;
        if (!styleEl || !styleEl.isConnected) {
            try { existing = document.getElementById(STYLE_ID); } catch (error) {}
            if (existing) styleEl = existing;
        }
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
        var css;
        // Keep the Dark Reader canvas until finish() removes it. Restyling to
        // white !important is another overlay and a freeze on logged-in SPAs.
        if (scheme === 'light') return;
        ensureStyle();
        ensureOverlay();
        css = buildCss(scheme, color);
        // Rewriting this sheet every poll restyles Discord/Telegram so Arc
        // freezes on the pad, which looks like the old full-page cover.
        if (styleEl && styleEl.textContent !== css) styleEl.textContent = css;
    }

    function syncVisuals() {
        var scheme = resolveScheme();
        if (scheme !== lastScheme) {
            if (lastScheme !== null) noteSignal();
            lastScheme = scheme;
        }
        applyVisuals(scheme, null);
    }

    function observeRoot() {
        var html = document.documentElement;
        if (!html) return;
        if (!htmlObserver) {
            htmlObserver = new MutationObserver(function () {
                tickSoon();
            });
            htmlObserver.observe(html, {
                attributes: true,
                attributeFilter: THEME_ATTRS.concat([
                    'data-darkreader-mode',
                    'data-darkreader-scheme'
                ])
            });
        }
        if (!document.body && !bodyWaitObserver) {
            bodyWaitObserver = new MutationObserver(function () {
                if (!document.body) return;
                bodyWaitObserver.disconnect();
                bodyWaitObserver = null;
                observeBody();
                tick();
            });
            bodyWaitObserver.observe(html, { childList: true });
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
        clearTimeout(tickSoonTimer);
        pollTimer = null;
        finishTimer = null;
        overlayMaxTimer = null;
        hardMaxTimer = null;
        tickSoonTimer = null;
        document.removeEventListener('DOMContentLoaded', onDomReady);
        window.removeEventListener('load', onLoad);
        window.removeEventListener('pageshow', onPageShow);
        unbindMedia(colorSchemeMedia, tick);
        unbindMedia(reducedMotionMedia, tick);
        if (htmlObserver) htmlObserver.disconnect();
        if (bodyObserver) bodyObserver.disconnect();
        if (bodyWaitObserver) bodyWaitObserver.disconnect();
        if (docObserver) docObserver.disconnect();
        htmlObserver = null;
        bodyObserver = null;
        bodyWaitObserver = null;
        docObserver = null;
    }

    function restoreRootStyle(root, name, previous) {
        if (!root) return;
        if (previous) root.style.setProperty(name, previous);
        else root.style.removeProperty(name);
    }

    function largestBodyChild() {
        var body = document.body;
        var best;
        var bestArea;
        var kids;
        var i;
        var el;
        var area;
        if (!body) return null;
        best = body;
        bestArea = 0;
        kids = body.children;
        for (i = 0; i < kids.length; i++) {
            el = kids[i];
            if (isGuardNode(el) || isIgnorableTag(el.tagName)) continue;
            area = (el.offsetWidth || 0) * (el.offsetHeight || 0);
            if (area > bestArea) {
                bestArea = area;
                best = el;
            }
        }
        return best;
    }

    function releaseHeldNudge() {
        var i;
        var item;
        if (kickHoldTimer) {
            clearTimeout(kickHoldTimer);
            kickHoldTimer = null;
        }
        for (i = 0; i < kickHeld.length; i++) {
            item = kickHeld[i];
            restoreRootStyle(item.el, item.name, item.previous);
        }
        kickHeld = [];
    }

    function holdNudge(el, name, value) {
        if (!el || !el.style) return;
        kickHeld.push({
            el: el,
            name: name,
            previous: el.style.getPropertyValue(name)
        });
        try { el.style.setProperty(name, value); } catch (error) {}
    }

    // Do not poke the page after the pad drops. Padding the app shell,
    // scrolling, or dispatching resize during Discord boot can stall the
    // renderer so Arc never attaches the document. html filter/zoom/
    // will-change also promotes a stale gray layer. Leave the canvas alone.
    function kickCompositor() {
        releaseHeldNudge();
    }

    function clearCompositorKicks() {
        var i;
        for (i = 0; i < kickTimers.length; i++) clearTimeout(kickTimers[i]);
        kickTimers = [];
        releaseHeldNudge();
    }

    function scheduleCompositorKicks() {
        clearCompositorKicks();
    }

    function removeOverlayNode() {
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        overlay = null;
    }

    function removeStyleNode() {
        var leftovers, i;
        if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
        styleEl = null;
        try {
            leftovers = document.querySelectorAll('#' + STYLE_ID);
            for (i = 0; i < leftovers.length; i++) {
                if (leftovers[i].parentNode) leftovers[i].parentNode.removeChild(leftovers[i]);
            }
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

    function clearParkTimers() {
        var i;
        for (i = 0; i < parkTimers.length; i++) clearTimeout(parkTimers[i]);
        parkTimers = [];
    }

    function parkedExitCheck() {
        if (!isParked) return;
        try {
            if (isDarkReaderActive() || isConfirmedLightPage() || resolveScheme() === 'light') {
                finish(true);
            }
        } catch (error) {
            awfDebug.err = awfDebug.err || String(error && (error.stack || error.message) || error);
        }
    }

    function bindParkedExits() {
        function onParkedLoad() {
            if (!pageLoadedAt) pageLoadedAt = Date.now();
            parkedExitCheck();
            parkTimers.push(setTimeout(parkedExitCheck, LIGHT_PAGE_GRACE_MS));
        }
        document.addEventListener('DOMContentLoaded', parkedExitCheck);
        window.addEventListener('load', onParkedLoad);
        if (document.readyState === 'complete') onParkedLoad();
        else if (document.readyState !== 'loading') parkedExitCheck();
        try {
            if (parkObserver || !document.documentElement) return;
            // Do not watch class/style: Discord mutates those constantly.
            parkObserver = new MutationObserver(parkedExitCheck);
            parkObserver.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'data-darkreader-mode',
                    'data-darkreader-scheme'
                ]
            });
        } catch (error) {}
    }

    function parkGuardCanvas() {
        if (isDone) return;
        try { applyVisuals('dark', null); } catch (error) {}
        isDone = true;
        isParked = true;
        awfDebug.block = 'park';
        cleanupWatchers();
        bindParkedExits();
    }

    function dropGuardCanvas() {
        clearTimeout(fadeTimer);
        clearTimeout(styleTimer);
        fadeTimer = null;
        styleTimer = null;
        isOverlayHidden = true;
        isParked = false;
        if (parkObserver) {
            parkObserver.disconnect();
            parkObserver = null;
        }
        clearParkTimers();
        removeOverlayNode();
        removeStyleNode();
        scheduleCompositorKicks();
    }

    function canUncoverStillWhitePad() {
        // Timeouts may only restore a confirmed light page. Dark/unknown
        // canvases keep the Dark Reader pad; parking stops the probe loop
        // that looked like the old full-page cover.
        if (isConfirmedLightPage()) return true;
        if (resolveScheme() === 'light') return true;
        return false;
    }

    function finish(instant, force) {
        if (isDone) {
            if (instant) dropGuardCanvas();
            return;
        }
        // Forced timeouts may skip a perfect first-screen sample, but they
        // still cannot uncover a still-white dark SPA. Instant finishes
        // (Dark Reader, bfcache) drop immediately.
        if (force && !canUncoverStillWhitePad()) return;
        if (!instant && !force && !isFirstScreenReady()) return;
        isDone = true;
        isParked = false;
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

    var awfDebug = { version: '1.0.35', ticks: 0, block: '', err: '', paint: '' };
    try { window.__dmppAwfDebug = awfDebug; } catch (error) {}

    function tick() {
        awfDebug.ticks += 1;
        try {
            if (isDone) return;
            if (isDarkReaderActive()) {
                yieldToDarkReader();
                return;
            }
            observeBody();
            if (document.body) ensurePaintWatch();
            snapshotStyleLinks();
            awfDebug.block = firstScreenBlocker() || 'ready';
            if (awfDebug.block === 'ready') {
                finish(true);
                return;
            }
            if (awfDebug.block === 'park') {
                parkGuardCanvas();
                return;
            }
            syncVisuals();
        } catch (error) {
            awfDebug.err = String(error && (error.stack || error.message) || error);
        }
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
        // Do not kick the compositor while the pad is still up. filter/zoom
        // on html during Discord boot freezes the webview as a solid gray.
        // Deadlines may restore a confirmed light page. Otherwise they park:
        // keep the canvas color and stop probing, the way Dark Reader leaves
        // its fallback until the real theme exists. Never uncover a still-
        // white dark SPA the way a full-viewport overlay used to time out.
        function tryDeadline() {
            if (isParked) {
                parkedExitCheck();
                return;
            }
            if (isDone) return;
            try { tick(); } catch (error) {}
            if (isDone || isParked) return;
            try {
                if (canUncoverStillWhitePad()) finish(true, true);
                else parkGuardCanvas();
            } catch (error) {
                awfDebug.err = awfDebug.err || String(error && (error.stack || error.message) || error);
                try { parkGuardCanvas(); } catch (parkError) {}
            }
        }
        hardMaxTimer = setTimeout(tryDeadline, HARD_MAX_MS);
        bindMedia(colorSchemeMedia, tick);
        bindMedia(reducedMotionMedia, tick);
        waitForHtml();
        pollTimer = setInterval(tick, POLL_MS);
        overlayMaxTimer = setTimeout(tryDeadline, OVERLAY_MAX_MS);
        document.addEventListener('DOMContentLoaded', onDomReady);
        window.addEventListener('load', onLoad);
        window.addEventListener('pageshow', onPageShow);
        document.addEventListener('visibilitychange', onVisibilityChange);
        if (document.readyState !== 'loading') onDomReady();
        tick();
    }

    start();
})();
