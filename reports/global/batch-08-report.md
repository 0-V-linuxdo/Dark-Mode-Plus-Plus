# Dark Mode++ 批次 8（71–80）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling / 已停用节流模式**（测完仍是 No throttling）。登录墙 / 年龄墙 / Cookie 墙 / 验证墙只测未登录首屏。必须测 disneyplus.com（本批 #71）。未测第 81 名及以后，未测 rakuten.co.jp。未覆盖中文榜。未开始第 9 批。

证据目录：`../../evidence/global/batch08/`。连拍只写 `/tmp/g-b08`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 71 | disneyplus.com | https://www.disneyplus.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 71-disneyplus-overlay.png；71-disneyplus-complete.png | **必须测，本批 #71。** 只测未登录营销/登录墙，未点 LOG IN / SELECT，未进播放。第一次 Helium `ERR_CONNECTION_CLOSED`，重试落地深色营销「Every Story. Every Genre」。reload r03 近黑空壳（center 4,7,20 var=0）再内容，无 gray=255。Console：`NetworkConnectException` / Site Error Handler 是站点。 |
| 72 | etsy.com | https://www.etsy.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 72-etsy-overlay.png；72-etsy-complete.png | 落地浅色 **访问暂时受限** 验证墙（Network 403）。只测墙，未点验证。f15–f22 `#121212` 再白空壳再墙。Console：font preload / `content.js` 403 是站点。 |
| 73 | indeed.com | https://www.indeed.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 73-indeed-overlay.png；73-indeed-complete.png | 没把地址贴进搜索框。落地 **Cloudflare 深色验证墙**「需要进行其他验证」，未点复选框 / 返回主页。空标签后近黑空壳再墙，无 gray=255。定位权限点不允许。Console：CSP / `No available adapters` 是站点。 |
| 74 | adobe.com | https://www.adobe.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 74-adobe-overlay.png；74-adobe-complete.png | 第一次 `ERR_CONNECTION_CLOSED`，重试落地浅色营销「Get work done. Faster.」。未点 Sign in / Free trial。reload 连拍没抓到 `#121212`（首屏已是内容/轮播）。站点后来打开了，不记跳过。Console：遥测 `ERR_CONNECTION_CLOSED` 是站点。 |
| 75 | ya.ru | https://ya.ru/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 75-yaru-overlay.png；75-yaru-complete.png | **测的是 ya.ru，不是 yandex.ru。** 没有跳 dzen.ru。系统深色 Yandex 首页「Найдётся всё」。未往搜索框打字。f12–f13 `#121212` 对齐深底。Console：`content.js` / `ERR_CONNECTION_CLOSED` 是站点。 |
| 76 | bbc.com | https://www.bbc.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 76-bbc-overlay.png；76-bbc-complete.png | **测的是 bbc.com 国际站，不是 bbc.co.uk。** 浅色新闻首页（France protests）。未点新闻，未往搜索框打字。f17–f23 `#121212` 再浅。Cookie 未在首屏连拍出现。 |
| 77 | chaturbate.com | https://chaturbate.com/ | 深色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 77-chaturbate-overlay.png；77-chaturbate-complete.png | NSFW。只测未登录年龄墙「YOU MUST BE OVER 18」，未点 I AGREE，没往下点。空标签 gray≈59 后 f17–f20 `#121212` 再白卡墙。无 gray=255 空 body。 |
| 78 | music.youtube.com | https://music.youtube.com/ | 深色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 78-ytm-overlay.png；78-ytm-complete.png | **测的是 music.youtube.com，不是 youtube.com。** 深色未登录首页「猜你喜欢」。未点播放，未往搜索框打字。空标签 gray≈59 后直接深页，连拍没抓到 `#121212`。无 gray=255。 |
| 79 | amazon.de | https://www.amazon.de/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 79-amazon-de-overlay.png；79-amazon-de-complete.png | **测的是 amazon.de 德国站，不是 amazon.com / amazon.in / amazon.co.jp。** 浅色德亚首页。没把地址贴进「Amazon.de durchsuchen」。配送条未点。f06–f09 `#121212` 再白空壳再浅色首页。 |
| 80 | msn.com | https://www.msn.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 80-msn-overlay.png；80-msn-complete.png | 系统深色门户（新闻卡 + 天气），顶上有浅色 Bing 壁纸条和搜索框。未往 Search the web 打字，未点 Go now。f04–f12 `#121212` 对齐深底。测完 Network 仍是 **已停用节流模式**。 |

## 复测

无。本批没有可复现的深站 gray=255 var=0 空 body，也没有脚本遮罩卡住。disneyplus.com / adobe.com 第一次断连后重试已打开，不记跳过。脚本保持 1.0.2，**不 bump、不重装**。

## 共性问题

- 以**实际首屏**为准。本批 Disney+ / YouTube Music 仍深；ya.ru / Indeed Cloudflare 墙 / MSN 门户跟系统变深，不要拿预期浅色当失败；Etsy 验证墙 / BBC.com / Adobe / amazon.de / Chaturbate 年龄墙仍浅。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 72 / 76 / 77 / 79）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。Adobe / YouTube Music 连拍没抓到 `#121212`，记 无，不记失败。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈59 不是白闪。Etsy / amazon.de 白空壳是浅色站。Disney+ 首访米色空壳是断连过程，不是脚本白闪。
- 登录墙 / 年龄墙 / 验证墙 / 站点错误墙只看墙：Disney+ 营销墙、Etsy 访问受限、Indeed Cloudflare、Chaturbate 18+。Helium 断连才跳过；disneyplus.com / adobe.com 第一次 `ERR_CONNECTION_CLOSED` 重试已打开，记通过。ya.ru 与 yandex.ru 分开测；bbc.com 与 bbc.co.uk 分开测；amazon.de 与其他 amazon 分开测；YouTube Music 与 youtube.com 分开测。NSFW 只测未登录年龄墙。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、font preload、站点 Site Error Handler / `No available adapters` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 Helium **Cat URL / 顶栏地址栏**（桌面约地址栏 `(454, 57)`，地球图标 `(427, 61)` 退出 Kagi），`cmd+a` / `rdc type`，出现 Kagi 搜索时不要 Enter；等蓝色地址栏圈或点地球图标后再进。建议还是 Search 时不要 Enter。Esc 后再操作。Cookie / 页面搜索 / Email 会抢输入（Indeed / amazon.de / ya.ru / MSN / YouTube Music 搜索框）。DevTools 会抢 `cmd+v`，用 `rdc type`。debugger 暂停用 F8。权限框「不允许」。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。disneyplus.com / adobe.com 首访断连都不改脚本。

## 给第 9 批（81–90）的规则

- 站点：rakuten.co.jp / onlyfans.com / telegram.org / ok.ru / deepseek.com / vkvideo.ru / usps.com / erome.com / rm358.com / scribd.com，按 `top-100-batches.md` 批次 9。**不要在本聊天开始第 9 批。不要测第 81 名之前。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。以实际首屏为准。系统深色时门户 / 搜索 / 验证墙可能跟系统（本批 ya.ru / Indeed / MSN 已是这样）。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。连拍抓不到遮罩就记 浅/无，不要为了抓遮罩长时间 Slow 4G。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。浅色站白空壳记 浅，不记失败。Helium 空标签 gray≈59 不是白闪。站点 PWA 闪屏 / 品牌 splash 不是脚本遮罩。
- 登录墙 / 年龄墙 / 地区墙 / 验证墙 / 站点错误墙只测墙。Helium 断连=跳过，不改脚本。telegram.org 与 t.me 分开测；deepseek.com 与 chat.deepseek.com 分开测。NSFW 只测未登录年龄墙。rm358.com 可能弹通知，权限框不允许。
- 点 Helium **顶栏地址栏** 再 `cmd+a` / `rdc type`。出现 **Kagi 搜索** 不要 Enter；点地址栏左侧地球/Cat 图标等到蓝色圈再进。Cookie / 搜索 / Email 会抢 Enter；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 81–90。
