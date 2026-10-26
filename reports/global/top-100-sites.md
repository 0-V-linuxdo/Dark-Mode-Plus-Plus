# Dark Mode++ Top 100 站点表

给 `anti-white-flash.user.js` 首屏测试用。本文件只做榜单聚合，不测脚本、不改 userscript。

## 规则

- 恰好 100 个不重复域名，10 批 × 10。
- 批次 1（1–10）锁定：google.com → bing.com。
- 1–50：Wikipedia 所引 Similarweb **2026-09** 排名（条目约 **2026-10-22** 更新）。
- 51–100：Similarweb **2026-08** 完整 Top 100 相对顺序为底，再用 2026-09 trending / 官方推文覆盖已确认名次。
- 保留 NSFW / 博彩（若上榜），在分类和备注标明。
- 不用 Tranco、Cloudflare Radar。
- `t.me` 与 `telegram.org`、`deepseek.com` 与 `chat.deepseek.com` 都保留，分开测。
- 预期主题 = **未登录默认首屏**，不是系统深浅色，也不是登录后偏好。

## 来源与日期

| 来源 | 数据月 | 页面/发布 | 覆盖 |
| --- | --- | --- | --- |
| [Wikipedia: List of most-visited websites](https://en.wikipedia.org/wiki/List_of_most-visited_websites) | 2026-09 | 约 2026-10-22 | Similarweb 1–50 |
| [Similarweb Top Websites](https://www.similarweb.com/top-websites/) | 2026-09（快照 2026-09-01） | Last updated 2026-10-01 | 公开榜 1–50；#49 记为 `zoom.us` |
| [Similarweb: Top 100 Most Visited Websites Worldwide (August 2026)](https://www.similarweb.com/blog/research/market-research/most-visited-websites/) | 2026-08 | 约 2026-09-17 | 完整 1–100 |
| [Similarweb Top Trending Websites](https://www.similarweb.com/top-websites/trending/) | 2026-09 | Last updated 2026-10-01 | 升/降/新入/跌出；部分 51–100 精确名次 |
| [Similarweb: Gen AI ranks, Sep 2026](https://x.com/Similarweb/status/2109974139792752877) | 2026-09 | 2026-10-13 | `deepseek.com` #85（+4） |

公开 Similarweb `/top-websites/` 与 `/api/gettopwebsites` 都只给 50 条。Excel 导出要登录。因此 **51–100 不是官方完整 Sep 榜**，是下面这套可复核的拼接。

## 51–100 怎么拼

**Sep 已确认（trending / 推文）：**

| Sep # | 域名 | 依据 |
| --- | --- | --- |
| 57 | booking.com | trending down，-13（Aug #44） |
| 60 | instructure.com | joined，+59 |
| 65 | office.com | trending up，+6（Aug #71） |
| 85 | deepseek.com | Similarweb 推文 +4（Aug #89） |
| 89 | rm358.com | trending down，-9（Aug #80） |
| 90 | scribd.com | joined，+17 |
| 94 | hbomax.com | trending down，-9（Aug #85） |
| 96 | zillow.com | trending down，-10（Aug #86） |
| 97 | chat.deepseek.com | joined，+7 |
| 98 | douyin.com | trending down，-11（Aug #87） |
| 99 | messenger.com | joined，+7 |

**Sep 跌出 Top 100（不收录）：** auone.jp、marca.com、avito.ru、primevideo.com

**Aug 51–100 升入 Sep 1–50：** apple.com #42、espn.com #44、zoom.us / zoom.com #49

**Aug 1–50 掉到 Sep 51–100：** booking.com（已确认 #57）、discord.com、imdb.com

其余 39 个空位按 **August 相对顺序** 填入（已去掉升入前 50、跌出榜、以及已钉在确认名次上的域名）。

## 全表

| # | 域名 | 测试 URL | 分类 | 预期主题 | 来源 | 批次 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `google.com` | https://www.google.com/ | 搜索 | 浅色 | Sep 1–50 | 1 | 未登录首页浅色。 |
| 2 | `youtube.com` | https://www.youtube.com/ | 视频 | 深色 | Sep 1–50 | 1 | 未登录现多为深色；登录态跟账号。 |
| 3 | `facebook.com` | https://www.facebook.com/ | 社交 | 浅色 | Sep 1–50 | 1 | 未登录登录墙浅色。 |
| 4 | `instagram.com` | https://www.instagram.com/ | 社交 | 浅色 | Sep 1–50 | 1 | 未登录浅色。 |
| 5 | `chatgpt.com` | https://chatgpt.com/ | AI 聊天 | 深色 | Sep 1–50 | 1 | 默认深色；可能登录墙。 |
| 6 | `x.com` | https://x.com/ | 社交 | 深色 | Sep 1–50 | 1 | 默认深色；可能登录墙。 |
| 7 | `reddit.com` | https://www.reddit.com/ | 社交 | 深色 | Sep 1–50 | 1 | 新版常深色；未登录偶发浅色。 |
| 8 | `tiktok.com` | https://www.tiktok.com/ | 社交 | 深色 | Sep 1–50 | 1 | 未登录偏深；可能地区/登录墙。 |
| 9 | `whatsapp.com` | https://www.whatsapp.com/ | 即时通讯 | 浅色 | Sep 1–50 | 1 | 营销站浅色，不是 Web 聊天。 |
| 10 | `bing.com` | https://www.bing.com/ | 搜索 | 浅色 | Sep 1–50 | 1 | 浅色搜索首页。 |
| 11 | `wikipedia.org` | https://www.wikipedia.org/ | 百科 | 浅色 | Sep 1–50 | 2 | 门户浅色；条目页也浅。 |
| 12 | `yahoo.co.jp` | https://www.yahoo.co.jp/ | 新闻 | 浅色 | Sep 1–50 | 2 | 日本门户浅色。 |
| 13 | `gemini.google.com` | https://gemini.google.com/ | AI 聊天 | 未知 | Sep 1–50 | 2 | 登录墙，主题不确定。 |
| 14 | `yandex.ru` | https://yandex.ru/ | 搜索 | 浅色 | Sep 1–50 | 2 | 浅色；俄区。 |
| 15 | `amazon.com` | https://www.amazon.com/ | 电商 | 浅色 | Sep 1–50 | 2 | 浅色；可能地区跳转。 |
| 16 | `yahoo.com` | https://www.yahoo.com/ | 新闻 | 浅色 | Sep 1–50 | 2 | 浅色门户。 |
| 17 | `linkedin.com` | https://www.linkedin.com/ | 社交 | 浅色 | Sep 1–50 | 2 | 浅色登录墙。 |
| 18 | `cloud.microsoft` | https://cloud.microsoft/ | 办公软件 | 未知 | Sep 1–50 | 2 | Microsoft 365。备选 https://www.microsoft365.com/ |
| 19 | `baidu.com` | https://www.baidu.com/ | 搜索 | 浅色 | Sep 1–50 | 2 | 浅色；中文。 |
| 20 | `pinterest.com` | https://www.pinterest.com/ | 社交 | 浅色 | Sep 1–50 | 2 | 浅色；登录墙。 |
| 21 | `naver.com` | https://www.naver.com/ | 新闻 | 浅色 | Sep 1–50 | 3 | 浅色；韩语。 |
| 22 | `netflix.com` | https://www.netflix.com/ | 流媒体 | 深色 | Sep 1–50 | 3 | 深色营销/浏览页。 |
| 23 | `live.com` | https://outlook.live.com/ | 邮箱 | 浅色 | Sep 1–50 | 3 | Outlook。域名是 live.com；不要测 www.live.com 跳转迷宫。 |
| 24 | `bilibili.com` | https://www.bilibili.com/ | 社交/视频 | 浅色 | Sep 1–50 | 3 | 首页粉白浅色；分区页另测。 |
| 25 | `pornhub.com` | https://www.pornhub.com/ | NSFW | 深色 | Sep 1–50 | 3 | NSFW。深色；年龄墙。 |
| 26 | `microsoft.com` | https://www.microsoft.com/ | 软件 | 浅色 | Sep 1–50 | 3 | 浅色营销站。 |
| 27 | `xhamster.com` | https://xhamster.com/ | NSFW | 深色 | Sep 1–50 | 3 | NSFW。深色。 |
| 28 | `twitch.tv` | https://www.twitch.tv/ | 直播 | 深色 | Sep 1–50 | 3 | 深色。 |
| 29 | `temu.com` | https://www.temu.com/ | 电商 | 浅色 | Sep 1–50 | 3 | 浅色橙白；可能跳转。 |
| 30 | `dzen.ru` | https://dzen.ru/ | 新闻 | 浅色 | Sep 1–50 | 3 | 浅色；俄区。 |
| 31 | `claude.ai` | https://claude.ai/ | AI 聊天 | 浅色 | Sep 1–50 | 4 | 默认浅米色；登录墙。 |
| 32 | `vk.ru` | https://vk.ru/ | 社交 | 浅色 | Sep 1–50 | 4 | 浅色；俄区。已从 vk.com 迁来。 |
| 33 | `canva.com` | https://www.canva.com/ | 设计 | 浅色 | Sep 1–50 | 4 | 浅色；登录墙。 |
| 34 | `weather.com` | https://weather.com/ | 天气 | 浅色 | Sep 1–50 | 4 | 浅色。 |
| 35 | `bet.br` | https://bet.br/ | 博彩 | 未知 | Sep 1–50 | 4 | 博彩。巴西固定赔率博彩二级域，不是真实网站；DNS 可能失败。 |
| 36 | `xvideos.com` | https://www.xvideos.com/ | NSFW | 深色 | Sep 1–50 | 4 | NSFW。深色。 |
| 37 | `news.yahoo.co.jp` | https://news.yahoo.co.jp/ | 新闻 | 浅色 | Sep 1–50 | 4 | 浅色；日语新闻。 |
| 38 | `samsung.com` | https://www.samsung.com/ | 消费电子 | 浅色 | Sep 1–50 | 4 | 浅色；可能地区跳转。 |
| 39 | `stripchat.com` | https://stripchat.com/ | NSFW | 深色 | Sep 1–50 | 4 | NSFW。深色成人直播。 |
| 40 | `fandom.com` | https://www.fandom.com/ | Wiki 托管 | 浅色 | Sep 1–50 | 4 | 浅色门户；子域 wiki 另测。 |
| 41 | `globo.com` | https://www.globo.com/ | 新闻 | 浅色 | Sep 1–50 | 5 | 浅色；巴西葡语。 |
| 42 | `apple.com` | https://www.apple.com/ | 消费电子 | 浅色 | Sep 1–50 | 5 | 浅色。Sep 从 Aug #56 升至 #42（+14）。 |
| 43 | `mail.ru` | https://mail.ru/ | 邮箱 | 浅色 | Sep 1–50 | 5 | 浅色；俄区。 |
| 44 | `espn.com` | https://www.espn.com/ | 体育 | 深色 | Sep 1–50 | 5 | 现站常深色。Sep 从 Aug #63 升至 #44（+19）。 |
| 45 | `duckduckgo.com` | https://duckduckgo.com/ | 搜索 | 浅色 | Sep 1–50 | 5 | 默认浅色，可跟系统。 |
| 46 | `brave.com` | https://brave.com/ | 浏览器 | 未知 | Sep 1–50 | 5 | 营销站深浅混杂。Brave Search 是另一主机。 |
| 47 | `github.com` | https://github.com/ | 开发 | 未知 | Sep 1–50 | 5 | 常跟系统 color-scheme；不要假定深或浅。 |
| 48 | `t.me` | https://t.me/ | 即时通讯 | 浅色 | Sep 1–50 | 5 | 短链落地浅色；无路径可能立刻跳转。与 telegram.org 分开测。 |
| 49 | `zoom.com` | https://www.zoom.com/ | 会议 | 浅色 | Sep 1–50 | 5 | Wikipedia 域名为 zoom.com；Similarweb 公开榜 #49 是 zoom.us（+13）。可改测 https://zoom.us/ |
| 50 | `ebay.com` | https://www.ebay.com/ | 电商 | 浅色 | Sep 1–50 | 5 | 浅色。 |
| 51 | `discord.com` | https://discord.com/ | 社交 | 深色 | Aug 序位 | 6 | Aug #48，Sep 掉出前 50。深色。 |
| 52 | `imdb.com` | https://www.imdb.com/ | 娱乐 | 浅色 | Aug 序位 | 6 | Aug #49，Sep 掉出前 50。浅色为主，新版可能偏深。 |
| 53 | `xhamster46.desi` | https://xhamster46.desi/ | NSFW | 深色 | Aug 序位 | 6 | NSFW。xHamster 镜像。 |
| 54 | `eporner.com` | https://www.eporner.com/ | NSFW | 深色 | Aug 序位 | 6 | NSFW。深色。 |
| 55 | `nytimes.com` | https://www.nytimes.com/ | 新闻 | 浅色 | Aug 序位 | 6 | 浅色；可能订阅墙。 |
| 56 | `aliexpress.com` | https://www.aliexpress.com/ | 电商 | 浅色 | Aug 序位 | 6 | 浅色；可能跳转。 |
| 57 | `booking.com` | https://www.booking.com/ | 旅行 | 浅色 | Sep 确认 | 6 | Sep 确认 #57（-13，Aug #44）。浅色。 |
| 58 | `ozon.ru` | https://www.ozon.ru/ | 电商 | 浅色 | Aug 序位 | 6 | 浅色；俄区。 |
| 59 | `roblox.com` | https://www.roblox.com/ | 游戏 | 深色 | Aug 序位 | 6 | 站点偏深色黑底。 |
| 60 | `instructure.com` | https://www.instructure.com/ | 教育 LMS | 未知 | Sep 确认 | 6 | Sep 新入榜 #60（+59）。Canvas 租户主题各异；此 URL 是营销站。 |
| 61 | `spotify.com` | https://www.spotify.com/ | 音乐 | 深色 | Aug 序位 | 7 | 深色。 |
| 62 | `walmart.com` | https://www.walmart.com/ | 电商 | 浅色 | Aug 序位 | 7 | 浅色。 |
| 63 | `amazon.in` | https://www.amazon.in/ | 电商 | 浅色 | Aug 序位 | 7 | 浅色；印度站。与 amazon.com 分开测。 |
| 64 | `xnxx.com` | https://www.xnxx.com/ | NSFW | 深色 | Aug 序位 | 7 | NSFW。深色。 |
| 65 | `office.com` | https://www.office.com/ | 办公软件 | 浅色 | Sep 确认 | 7 | Sep 确认 #65（+6，Aug #71）。浅色；常跳 Microsoft 365。 |
| 66 | `bbc.co.uk` | https://www.bbc.co.uk/ | 新闻 | 浅色 | Aug 序位 | 7 | 浅色；英国站。与 bbc.com 分开测。 |
| 67 | `docomo.ne.jp` | https://www.docomo.ne.jp/ | 电信 | 浅色 | Aug 序位 | 7 | 浅色；日语，可能跳转。 |
| 68 | `threads.com` | https://www.threads.com/ | 社交 | 浅色 | Aug 序位 | 7 | 浅色；登录墙。 |
| 69 | `amazon.co.jp` | https://www.amazon.co.jp/ | 电商 | 浅色 | Aug 序位 | 7 | 浅色；日本站。 |
| 70 | `paypal.com` | https://www.paypal.com/ | 支付 | 浅色 | Aug 序位 | 7 | 浅色；登录墙。 |
| 71 | `disneyplus.com` | https://www.disneyplus.com/ | 流媒体 | 深色 | Aug 序位 | 8 | 深色；登录墙。 |
| 72 | `etsy.com` | https://www.etsy.com/ | 电商 | 浅色 | Aug 序位 | 8 | 浅色。 |
| 73 | `indeed.com` | https://www.indeed.com/ | 招聘 | 浅色 | Aug 序位 | 8 | 浅色。 |
| 74 | `adobe.com` | https://www.adobe.com/ | 软件 | 浅色 | Aug 序位 | 8 | 浅色。 |
| 75 | `ya.ru` | https://ya.ru/ | 搜索 | 浅色 | Aug 序位 | 8 | Yandex 首页别名，浅色。与 yandex.ru 分开测。 |
| 76 | `bbc.com` | https://www.bbc.com/ | 新闻 | 浅色 | Aug 序位 | 8 | 浅色国际站。与 bbc.co.uk 分开测。 |
| 77 | `chaturbate.com` | https://chaturbate.com/ | NSFW | 深色 | Aug 序位 | 8 | NSFW。深色。 |
| 78 | `music.youtube.com` | https://music.youtube.com/ | 音乐 | 深色 | Aug 序位 | 8 | 深色。与 youtube.com 分开测。 |
| 79 | `amazon.de` | https://www.amazon.de/ | 电商 | 浅色 | Aug 序位 | 8 | 浅色；德国站。 |
| 80 | `msn.com` | https://www.msn.com/ | 新闻 | 浅色 | Aug 序位 | 8 | 浅色门户。 |
| 81 | `rakuten.co.jp` | https://www.rakuten.co.jp/ | 电商 | 浅色 | Aug 序位 | 9 | 浅色；日语。 |
| 82 | `onlyfans.com` | https://onlyfans.com/ | NSFW | 深色 | Aug 序位 | 9 | NSFW。深色；登录墙。 |
| 83 | `telegram.org` | https://telegram.org/ | 即时通讯 | 浅色 | Aug 序位 | 9 | 官方站浅色。与 t.me 分开测。 |
| 84 | `ok.ru` | https://ok.ru/ | 社交 | 浅色 | Aug 序位 | 9 | 浅色；俄区。 |
| 85 | `deepseek.com` | https://www.deepseek.com/ | AI 聊天 | 未知 | Sep 确认 | 9 | Sep 确认 #85（+4，Aug #89）。落地页；与 chat.deepseek.com 分开测。 |
| 86 | `vkvideo.ru` | https://vkvideo.ru/ | 视频 | 未知 | Aug 序位 | 9 | VK 视频。俄区；主题未锁定。 |
| 87 | `usps.com` | https://www.usps.com/ | 邮政 | 浅色 | Aug 序位 | 9 | 浅色。 |
| 88 | `erome.com` | https://www.erome.com/ | NSFW | 深色 | Aug 序位 | 9 | NSFW。深色。 |
| 89 | `rm358.com` | https://rm358.com/ | 广告/跳转 | 未知 | Sep 确认 | 9 | Sep 确认 #89（-9，Aug #80）。广告/推送跳转站，不是真实内容站；谨慎，可能弹通知。 |
| 90 | `scribd.com` | https://www.scribd.com/ | 文档 | 浅色 | Sep 确认 | 9 | Sep 新入榜 #90（+17）。浅色；登录/付费墙。 |
| 91 | `amazon.co.uk` | https://www.amazon.co.uk/ | 电商 | 浅色 | Aug 序位 | 10 | 浅色；英国站。 |
| 92 | `namu.wiki` | https://namu.wiki/ | 百科 | 浅色 | Aug 序位 | 10 | 浅色；韩语。 |
| 93 | `qq.com` | https://www.qq.com/ | 门户 | 浅色 | Aug 序位 | 10 | 浅色；中文门户。 |
| 94 | `hbomax.com` | https://www.hbomax.com/ | 流媒体 | 深色 | Sep 确认 | 10 | Sep 确认 #94（-9，Aug #85）。Max 深色；可能跳 max.com。 |
| 95 | `dcinside.com` | https://www.dcinside.com/ | 论坛 | 浅色 | Aug 序位 | 10 | 浅色；韩语论坛。 |
| 96 | `zillow.com` | https://www.zillow.com/ | 房产 | 浅色 | Sep 确认 | 10 | Sep 确认 #96（-10，Aug #86）。浅色。 |
| 97 | `chat.deepseek.com` | https://chat.deepseek.com/ | AI 聊天 | 未知 | Sep 确认 | 10 | Sep 新入榜 #97（+7）。聊天 UI；与 deepseek.com 分开测。 |
| 98 | `douyin.com` | https://www.douyin.com/ | 短视频 | 深色 | Sep 确认 | 10 | Sep 确认 #98（-11，Aug #87）。偏深；可能地区限制。 |
| 99 | `messenger.com` | https://www.messenger.com/ | 即时通讯 | 浅色 | Sep 确认 | 10 | Sep 新入榜 #99（+7）。浅色；登录墙。 |
| 100 | `shop.app` | https://shop.app/ | 购物 App | 未知 | Aug 序位 | 10 | Shopify Shop。可能跳 App Store / 应用页。 |

## 特殊域名

| 域名 | 说明 |
| --- | --- |
| `bet.br` | 巴西博彩二级域，不是网站。保留是因为 Similarweb / Wikipedia 都把它排进去了。 |
| `zoom.com` / `zoom.us` | 表内域名跟 Wikipedia：`zoom.com`。Similarweb 公开榜 #49 是 `zoom.us`（Aug #62，+13）。 |
| `cloud.microsoft` | Microsoft 365。测试 `https://cloud.microsoft/`，备选 `https://www.microsoft365.com/`。 |
| `live.com` | Outlook。测试 `https://outlook.live.com/`。 |
| `rm358.com` | 广告/推送跳转垃圾站，不是内容站。上榜所以保留；主题未知，别乱点通知。 |
| `xhamster46.desi` | NSFW，xHamster 镜像。 |
| `shop.app` | Shopify Shop，可能跳应用商店。 |
| `ya.ru` | Yandex 首页别名，和 `yandex.ru` 分开测。 |
| `t.me` / `telegram.org` | 两个域名都在榜上，分开测。 |
| `deepseek.com` / `chat.deepseek.com` | 落地页 vs 聊天 UI，分开测。 |

## NSFW / 博彩

- NSFW：pornhub.com, xhamster.com, xvideos.com, stripchat.com, xhamster46.desi, eporner.com, xnxx.com, chaturbate.com, onlyfans.com, erome.com
- 博彩：bet.br（还不是真实站点）

## 校验

- 行数：100
- 唯一域名：100
- 批次：1–10, 11–20, …, 91–100，每批 10 个
- 批次 1 锁定头 10 名

