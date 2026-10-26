# Dark Mode++ 批次 6（51–60）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling**（测完仍是 No throttling / 已停用节流模式）。登录墙 / 年龄墙 / 订阅墙 / 地区墙 / 站点连接墙只测未登录首屏。未测第 61 名及以后，未测 spotify.com。未覆盖中文榜。

证据目录：`../../evidence/global/batch06/`。51–60 本轮实机。连拍只写 `/tmp/g-b06`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 51 | discord.com | https://discord.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 51-discord-overlay.png；51-discord-complete.png | 只测未登录营销墙「专为游戏和快乐打造的群聊」，未点登录 / 在浏览器中打开 Discord，未进服务器。空标签 gray≈59 后 f11–f14 `#121212`（mid 18,18,18）再深紫首页。无 gray=255。Console：website-files preload、`sentry.io ERR_CONNECTION_CLOSED` 是站点。 |
| 52 | imdb.com | https://www.imdb.com/ | 浅色 | 深色 | 否 | 深 | 否 | 是 | 否 | 否 | 通过 | 52-imdb-overlay.png；52-imdb-complete.png | 预期浅色，新版实际深色首页（Yellowjackets / Sauron 英雄区）。首访 f09–f16 `#121212`，f17–f21 白空壳 gray≈252 var≈580，再深色内容；reload r03 `#121212` 后直接深页，无白。按 gray=255 var=0 **且** 深站才算白闪失败，reload 不复现，**不改脚本**。未点 Sign in，未往 Search IMDb 打字。 |
| 53 | xhamster46.desi | https://xhamster46.desi/ | 深色 | 无 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 53-xhamster46-error.png | NSFW。Helium `ERR_CONNECTION_CLOSED`「无法访问此网站」。连不上记跳过。未改脚本、未换镜像、未往下点。 |
| 54 | eporner.com | https://www.eporner.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 54-eporner-overlay.png；54-eporner-complete.png | NSFW。本机未出年龄墙；只测未登录深色首页，未点视频 / 搜索。空标签后 f08–f11 `#121212` 再红顶栏内容。无 gray=255。 |
| 55 | nytimes.com | https://www.nytimes.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 55-nytimes-overlay.png；55-nytimes-complete.png | 浅色首页「These top stories are free to read」，不是整页订阅墙。未点 Subscribe / Log in。首访/Reload 白空壳 gray≈252 是浅色站；连拍未见 `#121212`。 |
| 56 | aliexpress.com | https://www.aliexpress.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 56-aliexpress-overlay.png；56-aliexpress-complete.png | 落地 **aliexpress.com/ug-login-page/login.html** 浅色 Register/Sign in 墙（Location: United States）。Overlay f02–f13 `#121212` 再浅。未填 Email，未点 Continue。 |
| 57 | booking.com | https://www.booking.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 57-booking-overlay.png；57-booking-complete.png | 落地 **booking.com/index.zh-cn.html** 浅色中文首页。首访 f06–f12 `#121212`，f13–f16 白空壳，f17–f23 再 `#121212` 后出内容（地区跳转二次遮罩，类似 Zoom）。Genius「登录可省钱」弹层只测墙，未点。未往「输入目的地」打字。 |
| 58 | ozon.ru | https://www.ozon.ru/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 58-ozon-overlay.png；58-ozon-complete.png | 落地 **ozon.ru/?__rr=1** 站点浅色连接墙「Похоже, нет соединения」。页面已打开，不是 Helium `ERR_CONNECTION_CLOSED`，当墙测（对标 eBay 403）。Overlay f17–f18 `#121212` 再浅。未点 Обновить страницу。 |
| 59 | roblox.com | https://www.roblox.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 59-roblox-overlay.png；59-roblox-complete.png | 深色中文营销「一个平台。数百万款游戏。」Reload r02 `#121212` 对齐近黑底，随后 3D 英雄区。无 gray=255。未点登录 / 创建账户。 |
| 60 | instructure.com | https://www.instructure.com/ | 未知 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 60-instructure-overlay.png；60-instructure-complete.png | 测 **instructure.com 营销站**，未点 Login / Explore Canvas，未进 Canvas 租户。浅色 Edtech 首页。Reload r02–r10 `#121212` 再浅。Console：posthog `ERR_CONNECTION_CLOSED` / `TypeError: Failed to fetch` 是站点。 |

## 复测

无。本批没有可复现的深站 gray=255 var=0 空 body，也没有遮罩卡住。IMDb 首访白空壳 reload 不复现，按口径不改脚本。xHamster46.desi 连不上跳过。脚本保持 1.0.2，**不 bump、不重装**。

## 共性问题

- 以**实际首屏**为准。本批 Discord / ePorner / Roblox 仍深；IMDb 新版跟系统变深，不要拿预期浅色当失败；NYTimes / AliExpress 登录墙 / Booking / Ozon 连接墙 / Instructure 营销站仍浅。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 56 / 57 / 58 / 60）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。NYTimes 连拍只抓到浅色白空壳，记 浅，不记失败。Booking 中间白帧+第二次深遮罩也记二次闪，不记失败。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈59 不是白闪。IMDb 首访白空壳 gray≈252 var≈580，reload 不复现，不记失败、不改脚本。NYTimes / Booking 白空壳是浅色站。
- 登录墙 / 年龄墙 / 订阅墙 / 地区墙 / 站点连接墙只看墙：AliExpress 登录、Booking Genius、Ozon「нет соединения」。Helium 断连才跳过（本批仅 53）。ePorner 本机没出年龄墙，测未登录首页即可，不要往下点。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、preload 警告、posthog `Failed to fetch` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 **Helium Cat URL**（桌面约 `(229, 127)`）再 `cmd+a` / `rdc type`，点绿色 **Open https://…**。命令面板「打开」和顶栏 omnibox 容易进 **Kagi 搜索**（本批 xHamster46 曾搜成 `kagi.com/search?q=https://xhamster46.desi/`）。Esc 掉建议后再 Enter；被抢就再点 Cat URL。页面搜索 / Email / 目的地框会抢输入（IMDb Search、AliExpress Email、Booking 目的地）。DevTools 会抢 `cmd+v`，用 `rdc type`。权限框「不允许」。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。Ozon 站点连接墙和 xHamster46 DNS/连接失败都不改脚本。

## 给第 7 批（61–70）的规则

- 站点：Spotify / Walmart / amazon.in / xnxx / office.com / bbc.co.uk / docomo.ne.jp / threads.com / amazon.co.jp / paypal.com。**不要在本聊天开始第 7 批。不要测第 61 名之前。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。以实际首屏为准。系统深色时门户 / 流媒体 / GitHub 类可能跟系统（本批 IMDb 已是这样）。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。Booking / Zoom 这类会二次导航的站，中间白帧+第二次深遮罩也记二次闪，不记失败。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。浅色站白空壳记 浅，不记失败。Helium 空标签 gray≈59 不是白闪。首访白帧 reload 不复现，记备注，不要急着改脚本。
- 登录墙 / 年龄墙 / 地区墙 / 验证墙 / 站点错误墙只测墙。Helium 断连=跳过，不改脚本。amazon.in / amazon.co.jp 与 amazon.com 分开测。office.com 常跳 Microsoft 365。threads 只测登录墙。NSFW 只测未登录首屏/年龄墙。
- 点 Helium **Cat URL Open**，不要进 Kagi 搜索。Cookie / 搜索 / Email / 目的地会抢 Enter；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 61–70。
