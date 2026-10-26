# Dark Mode++ 批次 7（61–70）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling / 已停用节流模式**（测完仍是 No throttling）。登录墙 / 年龄墙 / Cookie 墙只测未登录首屏。61–66 不重测，用 `rdc-awf-batch07/` + `/tmp/g-b07/{61..66}` 填完整行。67 用已有连拍 `/tmp/g-b07/67`。只实机补测 68–70。未测第 71 名及以后，未测 disneyplus.com。未覆盖中文榜。未开始第 8 批。

证据目录：`rdc-awf-batch07/`。连拍只写 `/tmp/g-b07`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 61 | spotify.com | https://www.spotify.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 61-spotify-overlay.png；61-spotify-complete.png | 落地未登录 **Spotify Web Player**（open.spotify.com），未点播放。空标签 gray≈59 后 f09–f18 `#121212`（center gray=18 var=0）再深色播放器。无 gray=255。Console：IndexedDB `InvalidStateError` / UNHANDLED_REJECTION 是站点。 |
| 62 | walmart.com | https://www.walmart.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 62-walmart-overlay.png；62-walmart-complete.png | 浅色 Walmart 首页（Los Angeles / Flash Deals）。f17–f19 空标签后 f20–f24 `#121212` 再浅色首页。未点 Sign in，未往 Search Walmart 打字。「Ask me anything」购物助手只测墙。 |
| 63 | amazon.in | https://www.amazon.in/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 63-amazon-in-overlay.png；63-amazon-in-complete.png | **测的是 amazon.in，不是 amazon.com。** 浅色印度站购物首页（Women's fashion / Great Indian Festival）。没往搜索框打字。首访连拍停在空标签，没套住遮罩；reload r07–r12 `#121212` 再浅色首页。 |
| 64 | xnxx.com | https://www.xnxx.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 64-xnxx-overlay.png；64-xnxx-complete.png | NSFW。深蓝年龄墙「此网站包含成人内容」，未点「进入 / 管理 Cookie」，没往下点。f05–f11 空标签后 f12 `#121212` 再深蓝墙。Console：`static.xnxx.gold` / `header.static` 404 是站点。 |
| 65 | office.com | https://www.office.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 65-office-overlay.png；65-office-complete.png | 第一次 Helium `ERR_CONNECTION_CLOSED`「无法访问此网站」。重试落地 **m365.cloud.microsoft/zh-hans/** 浅色 Microsoft 365 / Copilot 登录墙。未点「登录 / 购买」。reload b02 `#121212` 再浅色墙。站点后来打开了，不记跳过。 |
| 66 | bbc.co.uk | https://www.bbc.co.uk/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 66-bbc-co-uk-overlay.png；66-bbc-co-uk-complete.png | **测的是 bbc.co.uk 英国站，不是 bbc.com。** 浅色「Welcome to the BBC」。Cookie「Accept / Reject」未点，未点新闻。reload 连拍没抓到 `#121212`；`66-bbc-co-uk-overlay.png` 实际是内容帧。白空壳是浅色站。Console：Feature-Policy / Permissions-Policy 是站点。 |
| 67 | docomo.ne.jp | https://www.docomo.ne.jp/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 67-docomo-overlay.png；67-docomo-complete.png | 落地 **https://www.docomo.ne.jp/** 浅色 docomo 首页（iPhone 18 Pro）。未点登录 / 商品。首访空标签后白骨架（顶栏已是红 docomo，center gray=255 是浅色站）。reload r15–r16 `#121212`（center gray=18 var=0）再浅色首页。Console：`ERR_CONNECTION_CLOSED` / preload 是站点。 |
| 68 | threads.com | https://www.threads.com/ | 浅色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 68-threads-overlay.png；68-threads-complete.png | 只测登录墙，未点「用 Instagram 登录」。落地 **threads.com** 深色墙「在 Threads 中畅所欲言」（跟系统变深）。首访空标签 gray≈59 后出深色墙，连拍没抓到 `#121212`。Reload 出白底 Threads PWA 闪屏再深底 logo，是站点闪屏不是脚本遮罩，也不是 gray=255 空 body。Console：CSP / Permissions-Policy / 站点「停下」反调试文案 / `ERR_CONNECTION_CLOSED` 是站点。 |
| 69 | amazon.co.jp | https://www.amazon.co.jp/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 69-amazon-co-jp-overlay.png；69-amazon-co-jp-complete.png | **测的是 amazon.co.jp 日本站，不是 amazon.com / amazon.in。** 浅色首页（日亚直邮）。没把地址贴进「搜索 Amazon.co.jp」。配送条「美国」未点关闭。Reload r04–r08 `#121212` 再浅色首页。Console：service worker / preload / `ERR_CONNECTION_CLOSED` 是站点。 |
| 70 | paypal.com | https://www.paypal.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 70-paypal-overlay.png；70-paypal-complete.png | 落地 **paypal.com/us/home** 浅色营销首页「Shine all season with PayPal」，有 Log In / Sign Up 但不是整页登录墙。未点登录，Cookie Accept/Decline 未点。首访 f09 `#121212` 再浅。Console：遥测 `ERR_CONNECTION_CLOSED` 是站点。测完 Network 仍是 **已停用节流模式**。 |

## 复测

无。本批没有可复现的深站 gray=255 var=0 空 body，也没有脚本遮罩卡住。Threads reload 的白底 PWA 闪屏是站点，不改脚本。office.com 第一次断连后重试已打开，不记跳过。脚本保持 1.0.2，**不 bump、不重装**。

## 共性问题

- 以**实际首屏**为准。本批 Spotify / xnxx 仍深；Threads 登录墙跟系统变深，不要拿预期浅色当失败；Walmart / amazon.in / office.com→M365 / BBC / docomo / amazon.co.jp / PayPal 仍浅。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 62 / 63 / 65 / 67 / 69 / 70）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。BBC / Threads 连拍没抓到 `#121212`，记 无，不记失败。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈59 不是白闪。docomo 首访白骨架、BBC 白空壳是浅色站。Threads reload 白底 PWA 闪屏 var≠0 且带 logo，不是空 body。
- 登录墙 / 年龄墙 / Cookie 墙只看墙：office.com→M365 登录、xnxx 年龄墙、Threads Instagram 登录、PayPal Cookie。Helium 断连才跳过；office.com 第一次 `ERR_CONNECTION_CLOSED` 重试已打开，记通过。amazon.in / amazon.co.jp 与 amazon.com 分开测。NSFW 只测未登录年龄墙。
- Console 里 CSP、Permissions-Policy、遥测 `ERR_CONNECTION_CLOSED`、IndexedDB `InvalidStateError`、站点「停下」反调试文案不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 **Helium Cat URL**（桌面约 `(229, 127)` / 字段中心约 `(280, 137)`）再 `cmd+a` / `rdc type`，等绿色 **Open https://…** 再 Enter。建议还是 Search 时不要 Enter（会进 Kagi）。命令面板「打开」和顶栏 omnibox 容易进 Kagi / 切 Space。Esc 后再操作。Cookie / 页面搜索 / Email 会抢输入（Walmart / amazon.in / amazon.co.jp 搜索框、GitHub Email、PayPal Cookie）。DevTools 会抢 `cmd+v`，用 `rdc type`。debugger 暂停用 F8。权限框「不允许」。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。Threads PWA 闪屏和 office.com 首访断连都不改脚本。

## 给第 8 批（71–80）的规则

- 站点：disneyplus.com / etsy.com / indeed.com / adobe.com / ya.ru / … 按 `top-100-batches.md` 批次 8。**不要在本聊天开始第 8 批。不要测第 71 名之前。不要测 disneyplus.com（本批已明确排除，下批按清单再决定）。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。以实际首屏为准。系统深色时门户 / 流媒体 / 社交墙可能跟系统（本批 Threads 已是这样）。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。连拍抓不到遮罩就记 浅/无，不要为了抓遮罩长时间 Slow 4G。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。浅色站白空壳记 浅，不记失败。Helium 空标签 gray≈59 不是白闪。站点 PWA 闪屏 / 品牌 splash 不是脚本遮罩。
- 登录墙 / 年龄墙 / 地区墙 / 验证墙 / 站点错误墙只测墙。Helium 断连=跳过，不改脚本。ya.ru 与 yandex.ru 分开测。disneyplus 若测只测登录墙。
- 点 Helium **Cat URL Open**，不要进 Kagi 搜索。Cookie / 搜索 / Email 会抢 Enter；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 71–80。
