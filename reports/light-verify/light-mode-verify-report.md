# Dark Mode++ 系统浅色跳过遮罩检验

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」从 **1.0.2 换成 1.0.3**（仪表盘编辑器全文替换并保存，已启用）。MV3 **允许运行用户脚本** 开。系统先深色，GUI 切到浅色后再测，测完 GUI 改回深色。DevTools Disable cache 开，**No throttling**。只测这 6 站，未开新批，未覆盖 `top-100-*.md` / `top-100-zh-*.md`，未 bump 版本。

证据目录：`../../evidence/light-verify/`。连拍只写 `/tmp/g-b-light/{01..06}`，用 `/tmp/g-b-light/analyze.py`（拷自 `/tmp/g-b09/analyze.py`）看 gray/var。`#121212` 判定：gray≈18 且 var≈0（mid≈18,18,18）。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「浅色」；出现 `#121212` 遮罩 / `#dmpp-awf-overlay` / 先黑后白 / 脚本报错 `是/否`；结论 `通过/失败/跳过`。

## 切浅色

1. 切之前桌面是系统深色：Helium 深色、菜单栏深。截图 `00-desk-before.png`（菜单栏 gray≈52）。
2. GUI 打开「系统设置」→「外观」，点 **浅色**，没有点自动。
3. 切完：设置窗口变浅、浅色磁贴蓝框、Helium 跟随变浅。截图 `00-light-on.png` / `00-desk-light.png`（菜单栏 gray≈91）。

## 暴力猴 1.0.3

- Helium `helium://extensions` 暴力猴 2.49.0 详情：**允许运行用户脚本** 开。截图 `00-allow-userscripts.png`。
- 仪表盘原先是「通用防白闪」**1.0.2**。扩展页 URL 会被 Helium `ERR_BLOCKED_BY_CLIENT` 拦住，用侧栏「扩展程序 - 暴力猴」进仪表盘。
- 在编辑器里 `cmd+a` 后剪贴板贴入本地 `anti-white-flash.user.js` **1.0.3**（可见 `start()` 里 `if (systemScheme() !== 'dark') return;`），点 **保存**，星号消失。
- 回到已安装列表：名称「通用防白闪」，版本 **Dark Mode++ 1.0.3**，29k，开关开着。截图 `00-vm-103.png`。
- 中途误把脚本点进回收站，已用恢复按钮还原后再编辑。测时是已启用的 1.0.3，不是回收站只读副本。

## matchMedia

Helium 已浅色后，YouTube 页 DevTools Console（`rdc type`，不用 `javascript:`）：

```
matchMedia('(prefers-color-scheme: dark)').matches
false

document.getElementById('dmpp-awf-overlay')
null

document.getElementById('dmpp-awf-style')
null
```

截图 `00-matchmedia.png`、`00-no-overlay.png`。

## 结果

| # | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 出现#121212遮罩 | 出现#dmpp-awf-overlay | 先黑后白 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | google.com | https://www.google.com/ | 浅色 | 1.0.3 | 浅色 | 否 | 否 | 否 | 否 | 通过 | 01-google-early.png；01-google-complete.png | 以前系统深色时实际深；浅色下 Google 白底彩标。连拍 28 帧全是 light-content（gray≈252，mid=255），没有 gray≈18 var≈0。没把地址打进搜索框。Cat `content ready` 不是脚本。 |
| 2 | baidu.com | https://www.baidu.com/ | 浅色 | 1.0.3 | 浅色 | 否 | 否 | 否 | 否 | 通过 | 02-baidu-early.png；02-baidu-complete.png | 浅色百度首页。深色系统时曾 `#121212` 再白；本轮 28 帧全是 light-content（gray≈247，mid=255），不再先黑。没往搜索框打字。Console 字体 / `ERR_CONNECTION_CLOSED` 是站点。 |
| 3 | amazon.co.uk | https://www.amazon.co.uk/ | 浅色 | 1.0.3 | 浅色 | 否 | 否 | 否 | 否 | 通过 | 03-amazon-early.png；03-amazon-complete.png | 测的是 amazon.co.uk。批次 10 深色系统 reload 曾 `#121212` 再浅。本轮 Skip to / Keyboard shortcuts + 深导航，28 帧 mixed（gray≈151，var 很高，mid=230），没有 `#121212`。未点登录。Console `ERR_CONNECTION_CLOSED` 是站点。 |
| 4 | youtube.com | https://www.youtube.com/ | 浅色 | 1.0.3 | 浅色 | 否 | 否 | 否 | 否 | 通过 | 04-youtube-early.png；04-youtube-complete.png | 深色站在浅色系统下实际是浅色「搜索视频，开启 YouTube 之旅」。28 帧全 light-content（gray≈252）。Console 已确认 overlay/style 都是 `null`。站点 `ERR_CONNECTION_CLOSED` / preload 警告不是脚本。没往搜索框打字。 |
| 5 | github.com | https://github.com/ | 浅色 | 1.0.3 | 深色 | 否 | 否 | 否 | 否 | 通过 | 05-github-early.png；05-github-complete.png | 深色营销「The future of building happens together」。这是站点自己的深色，不是脚本遮罩。28 帧 dark-content，var 都在 4900+，mid≈227，没有 gray≈18 var≈0。未点 Sign in，没往邮箱框打字。 |
| 6 | tiktok.com | https://www.tiktok.com/ | 浅色 | 1.0.3 | 深色 | 否 | 否 | 否 | 否 | 通过 | 06-tiktok-early.png；06-tiktok-complete.png | 只测未登录墙「登录 TikTok」。早期是站点近黑壳（gray≈47，var≈3400，mid=40），不是 `#121212`（18,18,18 / var≈0）。随后登录墙+视频 mixed。完全没有脚本深遮罩。未登录。Console i18n / `ERR_CONNECTION_CLOSED` 是站点。 |

## 判定摘要

- 6/6 通过，0 失败，0 跳过。
- 系统浅色已确认 + 脚本 1.0.3 已装 + 6 站连拍都没有 `#121212`（gray≈18 var≈0）。
- YouTube 页 DOM 没有 `#dmpp-awf-overlay` / `#dmpp-awf-style`。其余站连拍也从未出现脚本深遮罩，记 overlay=否。
- 百度 / 英亚在深色系统下的「先黑后白」本轮不再出现。
- GitHub / TikTok 自己的深色首屏不算脚本遮罩。Helium 空标签/白加载壳不算脚本遮罩。
- 没有可复现脚本 bug，**不 bump**。

## 改回深色

测完用 GUI 打开「系统设置」→「外观」，点 **深色**，没有留在浅色，也没有点自动。设置窗口、Helium 顶栏、菜单栏都变回深色，深色磁贴蓝框。截图 `99-desk-dark.png`（同 `99-dark-on.png`）。

未开始别的测试。未改 `anti-white-flash.user.js` 版本号。
