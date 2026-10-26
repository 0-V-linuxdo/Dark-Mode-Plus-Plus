# Dark Mode++ 批次 9（81–90）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling / 已停用节流模式**（测完仍是 No throttling）。登录墙 / 年龄墙 / Cookie 墙 / 验证墙只测未登录首屏。必须测 rakuten.co.jp（本批 #81）。未测第 91 名及以后，未测 amazon.co.uk。未覆盖中文榜。未开始第 10 批。

证据目录：`rdc-awf-batch09/`。连拍只写 `/tmp/g-b09`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 81 | rakuten.co.jp | https://www.rakuten.co.jp/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 81-rakuten-overlay.png；81-rakuten-complete.png | **必须测，本批 #81。** 日语浅色首页。未登录、未往「キーワード検索」打字。空标签 gray≈58 后 f08 `#121212`（mid=18,18,18）再浅色。Console：遥测 `ERR_CONNECTION_CLOSED` / preload 是站点。 |
| 82 | onlyfans.com | https://onlyfans.com/ | 深色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 82-onlyfans-overlay.png；82-onlyfans-complete.png | NSFW。**只测未登录登录墙**，未点登录 / 精选文章 / ACCEPT ALL，没往下点。预期深，实际浅色「登录」墙。白 OnlyFans logo 闪屏是站点品牌 splash。f07 `#121212` 再白闪屏再浅色墙。无 gray=255 空 body。Console：Cat / CSS generic font 是站点/浏览器。 |
| 83 | telegram.org | https://telegram.org/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 83-telegram-overlay.png；83-telegram-complete.png | **测的是 telegram.org，不是 t.me。** 浅色官方营销「Telegram a new era of messaging」。未点 Apps / Download。f07 白空壳 gray≈241 是浅色站。没抓到 `#121212`。Console：Cat / tg sticker worker 是站点。 |
| 84 | ok.ru | https://ok.ru/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 84-okru-overlay.png；84-okru-complete.png | 俄区浅色登录墙「Вход в ОК」。只测墙，未点 Войти / 注册。Cookie「Настроить」未点。空标签后浅空壳再墙，无 `#121212`。Console：`ERR_CONNECTION_CLOSED` / TransferService 是站点。 |
| 85 | deepseek.com | https://www.deepseek.com/ | 未知 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 85-deepseek-overlay.png；85-deepseek-complete.png | **测的是 deepseek.com 落地页，不是 chat.deepseek.com。** 浅色「探索未至之境」。未点「和 DeepSeek 对话」，没把地址贴进「一起探索」。连拍已是内容，没抓到 `#121212`。Console：passport 遥测 `ERR_CONNECTION_CLOSED` 是站点。 |
| 86 | vkvideo.ru | https://vkvideo.ru/ | 未知 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 86-vkvideo-overlay.png；86-vkvideo-complete.png | VK 视频。俄区，主题未锁定，实际深色首页。未点播放，没把地址贴进「Поиск видео」。首访慢（地址栏已是 vkvideo.ru，页面仍短暂停在上一站）。reload 深色骨架 mid≈34，**无 gray=255**，没抓到 `#121212`。Console：`rAFCcs tasks must be groupable` / `ERR_CONNECTION_CLOSED` 是站点。 |
| 87 | usps.com | https://www.usps.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 87-usps-overlay.png；87-usps-complete.png | 浅色 USPS 首页。没把地址贴进 Track Packages。f06–f14 `#121212` 再浅。Console：CSP blob worker / `ERR_CONNECTION_CLOSED` 是站点。 |
| 88 | erome.com | https://www.erome.com/ | 深色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 88-erome-overlay.png；88-erome-complete.png | NSFW。**只测未登录年龄墙**「This site is an adult community… I AM 18 OR OLDER」，未点 ENTER，没往下点。空标签 gray≈58 后深色墙，无 gray=255，没抓到 `#121212`。 |
| 89 | rm358.com | https://rm358.com/ | 未知 | 无 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 89-rm358-overlay.png；89-rm358-complete.png | 广告/推送跳转站，不是真实内容站。第一次 + 重试都是 Helium `ERR_CONNECTION_CLOSED`「无法访问此网站」。连不上记跳过。未出通知权限框。**不改脚本、未换 URL。** |
| 90 | scribd.com | https://www.scribd.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 90-scribd-overlay.png；90-scribd-complete.png | 浅色营销/登录墙「Make this semester a success」。只测墙，未点 Sign in / Download free。Cookie「I Understand」未点。没把地址贴进 Search。f21 `#121212` 再浅。测完 Network 仍是 **已停用节流模式**。 |

## 复测

无。本批没有可复现的深站 gray=255 var=0 空 body，也没有脚本遮罩卡住。rm358.com 第一次断连后重试仍失败，记跳过，不改脚本。脚本保持 1.0.2，**不 bump、不重装**。

## 共性问题

- 以**实际首屏**为准。本批 Rakuten / Telegram / OK / DeepSeek / USPS / Scribd 仍浅；vkvideo.ru / Erome 年龄墙仍深。OnlyFans 预期深、未登录登录墙实际浅，不要拿预期主题当失败。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 81 / 82 / 87 / 90）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。Telegram / OK 白/浅空壳记 浅。DeepSeek / vkvideo / Erome 连拍没抓到 `#121212`，记 无，不记失败。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈58 不是白闪。浅色站白空壳（Telegram / OK / OnlyFans logo splash）记 浅，不记失败。站点 PWA / 品牌 splash 不是脚本遮罩。
- 登录墙 / 年龄墙 / Cookie 墙 / 站点错误墙只看墙：OnlyFans 登录墙、OK 登录墙、Erome 18+、Scribd 营销/登录墙。Helium 断连才跳过；rm358.com 第一次+重试 `ERR_CONNECTION_CLOSED` 记跳过。telegram.org 与 t.me 分开测；deepseek.com 与 chat.deepseek.com 分开测。NSFW 只测未登录登录墙/年龄墙。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、font preload、站点 SDK / Cat `content ready` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 Helium **顶栏地址栏**（桌面约地址栏 `(509, 56)`，地球图标 `(427, 61)` 退出 Kagi），`cmd+a` / `rdc type`，出现 Kagi 搜索时不要 Enter；等蓝色地址栏圈或点地球图标后再进。Esc 后再操作。Cookie / 页面搜索 / Email 会抢输入（Rakuten / DeepSeek / vkvideo / USPS / Scribd 搜索框）。DevTools 会抢 `cmd+v`，用 `rdc type`。DevTools 顶栏 tab 在 700 图约 y=30，不是 y=48。debugger 暂停用 F8。权限框「不允许」。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。rm358.com 断连不改脚本。

## 给第 10 批（91–100）的规则

- 站点：amazon.co.uk / namu.wiki / qq.com / hbomax.com / dcinside.com / zillow.com / chat.deepseek.com / douyin.com / messenger.com / shop.app，按 `top-100-batches.md` 批次 10。**不要在本聊天开始第 10 批。不要测第 91 名之前。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。以实际首屏为准。系统深色时门户 / 搜索 / 验证墙可能跟系统。OnlyFans 这类预期深、登录墙实际浅，不要当失败。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。连拍抓不到遮罩就记 浅/无，不要为了抓遮罩长时间 Slow 4G。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。浅色站白空壳记 浅，不记失败。Helium 空标签 gray≈58 不是白闪。站点 PWA 闪屏 / 品牌 splash 不是脚本遮罩。
- 登录墙 / 年龄墙 / 地区墙 / 验证墙 / 站点错误墙只测墙。Helium 断连先重试一次，仍失败才跳过，不改脚本。chat.deepseek.com 与 deepseek.com 分开测；amazon.co.uk 与其他 amazon 分开测。hbomax.com 可能跳 max.com。douyin.com 可能地区限制。shop.app 可能跳 App Store。NSFW 只测未登录年龄墙。
- 点 Helium **顶栏地址栏** 再 `cmd+a` / `rdc type`。出现 **Kagi 搜索** 不要 Enter；点地址栏左侧地球/Cat 图标等到蓝色圈再进。Cookie / 搜索 / Email 会抢 Enter；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 91–100。
