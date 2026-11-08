# 通用防白闪

Violentmonkey 用户脚本：在网页首屏真正可见前，用跟随系统/页面深浅色的页面底色挡住加载白闪。目标浏览器是 Helium（Chromium）。

## 安装

先装 [Violentmonkey](https://violentmonkey.github.io/)，再点下面的链接。扩展会拦截 `.user.js` 并弹出安装确认，装的就是仓库 `main` 上的最新版。

**[点此安装最新版](https://raw.githubusercontent.com/0-V-linuxdo/Dark-Mode-Plus-Plus/main/anti-white-flash.user.js)**

`raw.githubusercontent.com` 打不开时用备用：

**[备用安装（jsDelivr）](https://cdn.jsdelivr.net/gh/0-V-linuxdo/Dark-Mode-Plus-Plus@main/anti-white-flash.user.js)**

也可以打开 [`anti-white-flash.user.js`](./anti-white-flash.user.js)，或把该文件拖进 Violentmonkey 仪表盘。需要的话可在 Violentmonkey 里按网站禁用。

## 匹配范围

| 项 | 值 |
| --- | --- |
| `@match` | `*://*/*`（所有 http/https 页面） |
| `@run-at` | `document-start` |
| `@noframes` | 只跑顶层页面，不进 iframe |
| `@grant` | `none` |

## 出现 / 消失

- **出现**：仅在系统深色（`prefers-color-scheme: dark`）时工作。系统浅色直接跳过。检测到 Dark Reader（`data-darkreader-mode` / `.darkreader--fallback` 等）时也跳过，已经在跑则立刻撤掉底色，不和它叠盖。系统深色且没有 Dark Reader 时，脚本按 Dark Reader 的 `document-start` 画布垫色注入一份 `style[media=screen]`：给 `html, body` 垫 `#181a1b`，不设 `color-scheme`。只垫画布，不给子节点刷色，也不盖全屏罩，所以 Discord 登录页能正常画出来。只垫 `body` 会让 Telegram 的 `html` 在慢加载时漏白。不按网站黑名单排除。
- **颜色**：按页面 `class` / `data-*` / 本地存储 / `meta color-scheme` 判断；这些还没有时，等首批 CSS 读到不透明背景再对齐；再没有则跟随系统 `prefers-color-scheme`。不会在深色站点上先盖一层白，也不会在已判明的浅色站点上先盖一层黑。
- **消失**：看见站点自己的大块深色界面（不只是 `theme-dark` 这类 class，也不只靠点选屏幕像素）就立刻撤掉垫色。检测时不关掉垫色，避免 Telegram 慢加载漏白。Arc 冻住时窗口尺寸和元素矩形可能是空的，会改用元素自己的宽高来认这块深色界面，好立刻撤垫。撤垫后不再改版心、滚动或发 `resize`：这些会把 Discord 卡在加载里。深色垫不设 `color-scheme`，也不给页面壳加 `opacity` / `filter` / `zoom` / `will-change` / `transform`。空的 SPA 壳（例如只有 `#root`、没有文案）不算首屏。判断浅色站时，等页面加载完成后再像 Dark Reader 一样短暂关掉这份样式看一次真实底色；内层已经是白底内容会马上还回浅色，不会把营销页长期染黑。若存储里已有主题但 DOM 还没跟上，最多再等约 400ms。超时只再试一次揭开：已经画出的深色首屏会撤垫；还白着的空页继续垫着。

## 已知限制

- 无法早于浏览器在 userscript 之前画出的那一帧。
- 完全没有主题信号的站点，会先按系统深浅色垫 html/body 画布，等 CSS 背景可读后再对齐。
- 主题只由很晚的异步脚本决定时，仍可能在超时后露出短暂 FOUC。
- 不处理 iframe，也不改站点自己的长期主题。
- 其他没有 Dark Reader 标记的整页改色扩展，仍可能和垫色叠在一起。
- 超长 loading 时 html/body 会继续垫着深色底，直到站点自己的大块深色界面出现；已经画出的界面不会被罩住。

## 仓库结构

根目录只放脚本和说明。测试材料都进子目录，避免 GitHub 文件列表被截图文件夹铺满。

| 路径 | 内容 |
| --- | --- |
| [`anti-white-flash.user.js`](./anti-white-flash.user.js) | 用户脚本 |
| [`reports/`](./reports/) | 测试名单、结果表、批次报告 |
| [`evidence/`](./evidence/) | 截图证据 |

## 测试记录

- [全球 Top 100](./reports/global/top-100-results.md)
- [中文 Top 100](./reports/zh/top-100-zh-results.md)
- [系统浅色跳过](./reports/light-verify/light-mode-verify-report.md)
- [深色系统 × 浅色首屏复测](./reports/dark-retest/dark-retest-light-results.md)
