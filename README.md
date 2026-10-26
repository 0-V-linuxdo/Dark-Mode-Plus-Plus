# 通用防白闪

Violentmonkey 用户脚本：在网页首屏真正可见前，用跟随系统/页面深浅色的全屏遮罩挡住加载白闪。目标浏览器是 Helium（Chromium）。

## 安装

1. 在 Helium 中安装 [Violentmonkey](https://violentmonkey.github.io/)。
2. 打开本目录的 [`anti-white-flash.user.js`](./anti-white-flash.user.js)，或把该文件拖进 Violentmonkey 仪表盘。
3. 确认脚本已启用。需要的话可在 Violentmonkey 里按网站禁用。

## 匹配范围

| 项 | 值 |
| --- | --- |
| `@match` | `*://*/*`（所有 http/https 页面） |
| `@run-at` | `document-start` |
| `@noframes` | 只跑顶层页面，不进 iframe |
| `@grant` | `none` |

## 出现 / 消失

- **出现**：仅在系统深色（`prefers-color-scheme: dark`）时工作。系统浅色直接跳过，不注入遮罩。系统深色时，脚本在 `document-start` 立刻往 `html` 注入遮罩，并用可被站点覆盖的 `color-scheme` 先把浏览器画布调成浅色或深色。遮罩 `pointer-events: none`，不抢焦点、不挡滚动和输入。
- **颜色**：按页面 `class` / `data-*` / 本地存储 / `meta color-scheme` 判断；这些还没有时，等首批 CSS 读到不透明背景再对齐；再没有则跟随系统 `prefers-color-scheme`。不会在深色站点上先盖一层白，也不会在已判明的浅色站点上先盖一层黑。
- **消失**：`DOMContentLoaded`、初始样式表、首帧绘制完成，且页面已有实质内容、主题信号短暂稳定后淡出并移除。空的 SPA 壳（例如只有 `#root`、没有文案）不算首屏。若存储里已有主题但 DOM 还没跟上，最多再等约 400ms。有内容时 2.4s 仍未就绪会开始撤遮罩；空首屏会等到有内容或 5s 强制清理。

## 已知限制

- 无法早于浏览器在 userscript 之前画出的那一帧。
- 完全没有主题信号的站点，会先按系统深浅色遮罩，等 CSS 背景可读后再对齐。
- 主题只由很晚的异步脚本决定时，仍可能在超时后露出短暂 FOUC。
- 不处理 iframe，也不改站点自己的长期主题。
- 与 Dark Reader 等整页改色扩展叠在一起时，可能各盖各的。
- 超长 loading 的页面最多遮约 2.4 秒，避免把已可交互内容挡住。

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
