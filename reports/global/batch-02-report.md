# Dark Mode++ 批次 2（11–20）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（29k，已启用，Allow user scripts 开）。系统深色。DevTools Disable cache 开，**No throttling**（测完仍是 No throttling）。登录墙只测未登录首屏。未测第 21 名及以后。未覆盖中文榜。

证据目录：`../../evidence/global/batch02/`。TikTok 复测 + 11–20 本轮实机。连拍只写 `/tmp/g-b02`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | wikipedia.org | https://www.wikipedia.org/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 11-wikipedia-overlay.png；11-wikipedia-complete.png | Helium 跟系统深色，门户是深色 Wikipedia，不是浅色门户。Reload overlay r02 `#121212`（mid gray=18 var=0），完成后仍深。未往搜索框打字。 |
| 12 | yahoo.co.jp | https://www.yahoo.co.jp/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 12-yahoo-co-jp-overlay.png；12-yahoo-co-jp-complete.png | 第一次 `ERR_CONNECTION_CLOSED`，重进后是浅色 YAHOO! JAPAN。Overlay 约 3s `#121212` 再露浅色门户。未往搜索框打字。 |
| 13 | gemini.google.com | https://gemini.google.com/ | 未知 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 13-gemini-overlay.png；13-gemini-complete.png | 落地 `/app` 深色 SPA。右上角「登录」，不是整页墙。遮罩 `#121212` 对齐近黑首屏。Console：站点 Fallback / network，无脚本报错。 |
| 14 | yandex.ru | https://yandex.ru/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 14-yandex-overlay.png；14-yandex-complete.png | 经 passport 跳到 **dzen.ru/?yredirect=true** 浅色信息流 + cookie 条。Overlay mid gray=255 是浅色空壳，不是深站白闪。未点「Понятно」。 |
| 15 | amazon.com | https://www.amazon.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 15-amazon-overlay.png；15-amazon-complete.png | 仍停 amazon.com，中文 UI + 配送地址条。Overlay `#121212` 再浅色首页。未点「关闭 / 更改地址」，未搜索。 |
| 16 | yahoo.com | https://www.yahoo.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 16-yahoo-overlay.png；16-yahoo-complete.png | 系统深色新闻门户，不是 yahoo.co.jp。遮罩 `#121212` 对齐。曾「已在调试程序中暂停」，F8 继续。 |
| 17 | linkedin.com | https://www.linkedin.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 17-linkedin-overlay.png；17-linkedin-complete.png | 浅色登录墙「您专属的职场社区」。Overlay `#121212` 再浅色墙。未登录。 |
| 18 | cloud.microsoft | https://cloud.microsoft/ | 未知 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 18-cloud-microsoft-overlay.png；18-cloud-microsoft-complete.png | 落地 **m365.cloud.microsoft/zh-hans/** Copilot / M365 登录墙。第一次 Enter 被抢，连拍仍是 LinkedIn；点顶栏后再 reload 抓到 `#121212`，随后浅色墙。 |
| 19 | baidu.com | https://www.baidu.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 19-baidu-overlay.png；19-baidu-complete.png | 全球榜独立测，不是中文榜那行。浅色首页。Overlay `#121212` 再浅。搜索框是占位文案，不是地址栏。 |
| 20 | pinterest.com | https://www.pinterest.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 20-pinterest-overlay.png；20-pinterest-complete.png | 浅色营销登录墙「在 Pinterest 上创造你热爱的生活」，不是 feed。第一次 Enter 停在百度，二次导航成功。Reload r03–r08 `#121212`，r09 淡出，随后浅色墙。无 gray=255。未搜索。Console：identity provider / Fetch fail 是站点。 |

## 复测

| # | 站点 | 脚本 | 白闪 | 遮罩颜色 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | tiktok.com | 1.0.2（暴力猴已装） | 否 | 深 | 通过 | 08-tiktok-retest-overlay.png；08-tiktok-retest-complete.png | 1.0.0 / 1.0.1 首访仍是空 body 纯白（batch-01）。1.0.2 不再把系统深色下的默认 `#fff` 当浅色信号，等到深色登录墙才撤遮罩。Reload overlay mid `#121212`，complete 深色「登录 TikTok」。无 gray=255。只测墙。 |

## 共性问题

- 以**实际首屏**为准。系统深色时 Wikipedia / Gemini / Yahoo.com 会跟系统变深；Yahoo.co.jp / Amazon / LinkedIn / M365 / Baidu / Pinterest 仍浅。不要拿 Similarweb「预期浅色」判失败。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 12 / 15 / 17 / 18 / 19 / 20）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。1.0.2 对默认 `#fff` 会把深遮罩多留一会儿（常接近 `OVERLAY_MAX_MS` 3.2s）。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈58 不是白闪。Yandex/Dzen overlay 的 mid 白是浅色站空壳。
- SPA：TikTok 1.0.1 仍会把空白白 body 当首屏；1.0.2 等到深色页面 paint。Gemini `/app` 深色 SPA 对齐，无白闪。
- 登录墙只看墙：TikTok / LinkedIn / M365 Copilot。Yandex 跳 Dzen 后只看信息流+cookie 条，不点「Понятно」。Amazon 配送条不点关闭。Wikipedia / Yahoo / Baidu / Pinterest 不要往页面搜索框打字。
- CF / 登录 / 地区墙：测墙本身。断连记跳过，不改脚本。本批 Yahoo.co.jp 第一次 `ERR_CONNECTION_CLOSED`，重进后加载，未跳过。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 Fetch / identity provider / Fallback 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 **Helium 顶栏 URL**（约桌面 `(560, 51)` / `(763, 46)`），Esc 掉 Kagi 建议再 Enter。DevTools 会抢 `cmd+v`，用 `rdc type`。Cookie / 搜索会抢 Enter（本批 LinkedIn→M365、Baidu→Pinterest），先再点顶栏。debugger 暂停用 F8。Helium「查找本地网络设备」点「不允许」。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无，不要为了拍遮罩开节流。

## 脚本改动

本地 + 暴力猴 `anti-white-flash.user.js` **1.0.1 → 1.0.2**（通用，无单站白名单）：

- `resolveScheme()`：系统深色时，默认 `#fff` SPA 壳不再当成浅色主题信号。
- `isFirstScreenReady()`：scheme 为 dark 时必须 `hasDarkPagePaint()`，避免空白 body 提前撤遮罩。
- `OVERLAY_MAX_MS` 2400 → 3200。硬超时仍 5s。

TikTok 1.0.2 复测通过。本批 11–20 没有可复现的深站 gray=255 空 body，**不再 bump**。

## 给第 3 批（21–30）的规则

- 站点：Naver / Netflix / Outlook live.com / Bilibili / Pornhub / Microsoft / xHamster / Twitch / Temu / Dzen。**不要在本聊天开始第 3 批。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。系统深色时门户 / 视频 / AI 可能跟系统（本批 Wiki / Gemini / Yahoo.com 已是这样）。以实际首屏为准。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。1.0.2 在浅色 `#fff` 上深遮罩更长，常接近 overlayMax。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。
- 登录墙 / 年龄墙 / 地区墙只测墙。断连=跳过，不改脚本。Dzen 本批 Yandex 已见过浅色信息流，第 3 批仍要单独测 `dzen.ru`。
- NSFW（Pornhub / xHamster）只测未登录首屏/年龄墙，不往下点。
- 点 Helium 顶栏 URL，Esc Kagi，Enter；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 测 `https://outlook.live.com/`，不要测 www.live.com 跳转迷宫。Bilibili 测首页，分区页另测。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 21–30。
