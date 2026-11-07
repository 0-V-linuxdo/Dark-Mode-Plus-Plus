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

- **出现**：仅在系统深色（`prefers-color-scheme: dark`）时工作。系统浅色直接跳过。检测到 Dark Reader（`data-darkreader-mode` / `.darkreader--fallback` 等）时也跳过，已经在跑则立刻撤掉底色，不和它叠盖。系统深色且没有 Dark Reader 时，脚本按 Dark Reader 的 `document-start` fallback 注入一份 `style[media=screen]`：给 `html, body, body :not(iframe)` 垫 `#181a1b`，并给 `html` 加上 `color-scheme: dark`。这样 Telegram 这类深色 SPA 在自己的主题 class 出现前，内层白底也挡得住。不再盖一层全屏遮罩，也不按网站黑名单排除。
- **颜色**：按页面 `class` / `data-*` / 本地存储 / `meta color-scheme` 判断；这些还没有时，等首批 CSS 读到不透明背景再对齐；再没有则跟随系统 `prefers-color-scheme`。不会在深色站点上先盖一层白，也不会在已判明的浅色站点上先盖一层黑。
- **消失**：`DOMContentLoaded`、初始样式表、首帧绘制完成，且页面已有实质内容、主题信号短暂稳定后立刻撤掉这份 fallback 样式，再触发几次轻微重绘（滚动 1px、`resize`、短暂 `transform` / `zoom`、1px canvas），避免 Arc 在撤掉整页底色后不再画。铺上深色底时也会立刻点一次重绘，切回标签时再点一次，免得 Arc 一直停在浏览器自带的白底上。空的 SPA 壳（例如只有 `#root`、没有文案）不算首屏。站点自己加上深色主题 class 后即可撤掉底色。判断浅色站时会像 Dark Reader 一样暂时关掉这份样式再采样，内层已经是白底内容就马上还回浅色，不会把营销页长期染黑。若存储里已有主题但 DOM 还没跟上，最多再等约 400ms。有内容时约 3.2s、空首屏最晚 5s 会停止等待并清理监听，不会无限挡，也不会把深色底永远留在页面上。

## 已知限制

- 无法早于浏览器在 userscript 之前画出的那一帧。
- 完全没有主题信号的站点，会先按系统深浅色遮罩，等 CSS 背景可读后再对齐。
- 主题只由很晚的异步脚本决定时，仍可能在超时后露出短暂 FOUC。
- 不处理 iframe，也不改站点自己的长期主题。
- 其他没有 Dark Reader 标记的整页改色扩展，仍可能和遮罩叠在一起。
- 超长 loading 的页面最多铺底色约 3.2 秒（有内容）或 5 秒（空首屏）。超时后同样撤掉底色并触发重绘，站点自己的加载页（冷知识、转圈）应能露出来。

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
