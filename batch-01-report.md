# Dark Mode++ 批次 1（1–10）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.0`（测试当时）。系统深色。DevTools Disable cache 开；上一轮留下的 Slow 4G 已关掉，本轮 Bing 未节流。登录墙只测未登录首屏。

证据目录：`rdc-awf-batch01/`。1–8 用上一轮已有 PNG（不重拍）。9 用上一轮落在 `/tmp` 的 WhatsApp 连拍补档。10 本轮实机补测。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | google.com | https://www.google.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 01-google-overlay.png；01-google-complete.png | 未登录，但 Helium 跟系统深色，首页是深色 Google。遮罩 `#121212`（gray=18, var=0）后对齐深色首屏，无白闪。 |
| 2 | youtube.com | https://www.youtube.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 02-youtube-overlay.png；02-youtube-complete.png | 遮罩 `#121212`，完成后仍是深色未登录首页。 |
| 3 | facebook.com | https://www.facebook.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 03-facebook-complete.png；03-facebook-reload.png | 未登录浅色登录墙。连拍 8 帧都是白底（gray≈247），没拍到深遮罩；浅色遮罩在白底上几乎看不见。 |
| 4 | instagram.com | https://www.instagram.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 04-instagram-overlay.png；04-instagram-complete.png | 预期浅色，实际是深色 logo 闪屏（跟系统）。遮罩 `#121212` 对齐，完成后仍深。 |
| 5 | chatgpt.com | https://chatgpt.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 05-chatgpt-overlay.png；05-chatgpt-complete.png | 遮罩 `#121212`，完成后近黑聊天 UI。 |
| 6 | x.com | https://x.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 06-x-complete.png；06-x-reload.png | 深色登录墙。连拍全程深色（mid 近黑），遮罩与页面分不开，无白闪。 |
| 7 | reddit.com | https://www.reddit.com/ | 深色 | 浅色 | 否 | 无 | 否 | 是 | 否 | 否 | 通过 | 07-reddit-light.png；07-reddit-dark.png；07-reddit-complete.png | **深浅冲突**：未登录第一次是浅色顶栏+白底（媒体位黑色 loading）。硬刷新后 Reddit 自己切到系统深色。第一次连拍没有 `#121212` 遮罩，**没有先盖黑的证据**。二次闪是站点主题从浅切深，不是遮罩卡住。 |
| 8 | tiktok.com | https://www.tiktok.com/ | 深色 | 深色 | 是 | 错色 | 否 | 是 | 否 | 否 | 失败 | 08-tiktok-dark-skeleton.png；08-tiktok-gray-fade.png；08-tiktok-white.png；08-tiktok-complete.png | **可复现失败**。Reload 连拍：深骨架/遮罩 gray=18 → 灰淡出 gray=186 → **纯白 gray=255, var=0**（至少 4 帧）→ 稍后才是深色登录墙。脚本把空的白 body 当成首屏就绪，遮罩撤早了。Console 有站点 `webapp_auto_dark_mode` 实验失败，无脚本报错。遮罩 `pointer-events: none`，不挡交互。 |
| 9 | whatsapp.com | https://www.whatsapp.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 09-whatsapp-complete.png；09-whatsapp-white.png | 营销站米色首屏，不是 Web 聊天。Reload：米色（252,245,235）→ 一帧纯白 `#fff` → 米色内容。浅色站上的白帧按浅色遮罩计，不是深站白闪。Console 只有站点 CSP report-only，无脚本报错。 |
| 10 | bing.com | https://www.bing.com/ | 浅色 | 混合 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 10-bing-overlay.png；10-bing-complete.png | 未节流补测。实际首屏是深色摄影首页+白搜索框，不是白底 Bing。Reload 先 `#121212` 遮罩 3 帧，随后露出图书馆背景，遮罩未卡住。Console 是 Bing 遥测 `ERR_CONNECTION_CLOSED`，无脚本报错。 |

## 复测

| # | 站点 | 脚本 | 白闪 | 遮罩颜色 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | tiktok.com | 1.0.1（仅本地） | 未复测 | 未复测 | 未复测 | — | `anti-white-flash.user.js` 已 bump 到 1.0.1，但把全文贴进 Mac Mini 暴力猴/用 HTTP 安装被策略拦住。Helium 里仍是 1.0.0。需要人工把 1.0.1 粘进暴力猴后再复测 TikTok。 |

## 共性问题

- Helium 系统深色时，名单上的「预期浅色」经常对不上：Google / Instagram 实际深色，Bing 是深色摄影首页。表里以**实际首屏**为准，不要拿 Similarweb 备注当渲染结果。
- 没有早期主题信号时，脚本跟 `prefers-color-scheme`。这在深色站（YouTube / ChatGPT / X）有效；在未登录浅色 Reddit 上，第一次没先盖黑，但站点随后自己切深，造成一次浅→深。
- SPA 空壳会被当成首屏。TikTok 白 body + 样式就绪后撤遮罩，先露出纯白，再水合成深色登录墙。这是本批唯一可复现失败。
- 浅色站的浅色遮罩几乎看不见（Facebook、WhatsApp）。要用连拍 mean/var，不要只靠肉眼。
- 不要长时间 Slow 4G。上一轮留下 Slow 4G，TikTok 12s 还是白页，会把站点慢加载写成脚本故障。本轮已改回 No throttling。
- Disable cache 可留着抓遮罩。Console 里 CSP / 遥测 / `injected.js` 不要算脚本报错。
- 遮罩 `pointer-events: none`，本批没有挡住输入或点击。

## 脚本改动

本地 `anti-white-flash.user.js` **1.0.0 → 1.0.1**（通用，无单站白名单）：

- 新增 `hasSubstantialContent()`：空 `#root` / 无文案的 SPA 壳不算首屏。
- `isFirstScreenReady()` 必须有实质内容才撤遮罩。
- 没有实质内容时，不用 body 的白底去改 scheme / 遮罩颜色（避免系统深色被空白 body 带去浅色）。
- 2.4s 软超时：仍无内容则继续遮；5s 硬超时仍强制清。

暴力猴 **还没装上 1.0.1**。请把仓库脚本全文粘进「通用防白闪」保存后再测 TikTok。

## 给第 2 批的规则

- 每站最多 2 张证据图，连拍只写 `/tmp`，用 ImageStat（gray/var）判断纯色遮罩。回复里不要贴原图。
- 先关 Slow 4G；只在遮罩实在抓不到时短开，测完立刻 No throttling。
- 预期主题只作对照。系统深色时 Google / Instagram / Bing / Reddit 都可能跟系统，不要因此判失败。
- 未登录 Reddit / 类似站：写清第一次实际深浅，以及刷新后会不会自己切系统主题。重点看有没有先盖黑。
- SPA（本批 TikTok，下批可能 Discord / 部分 AI 站）：必须看空 body 会不会提前撤遮罩。若 1.0.1 已装上，确认白帧是否消失。
- 登录墙只测墙本身。Console 只记脚本异常。
- 不要开始第 2 批，直到 1.0.1 进暴力猴并复测 TikTok。
