# Dark Mode++ 批次 10（91–100）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling / 已停用节流模式**（测完仍是 No throttling）。登录墙 / 年龄墙 / Cookie 墙 / 验证墙 / 地区墙 / 站点错误墙只测未登录首屏。必须测 amazon.co.uk（本批 #91）。未测第 91 名之前。未覆盖中文榜。**未开始第 11 批。** 这是全球 Top 100 最后一批。

证据目录：`../../evidence/global/batch10/`。连拍只写 `/tmp/g-b10`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 91 | amazon.co.uk | https://www.amazon.co.uk/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 91-amazon-co-uk-overlay.png；91-amazon-co-uk-complete.png | **必须测，本批 #91。** 测的是 amazon.co.uk，不是 amazon.com / amazon.in / amazon.co.jp / amazon.de。浅色英亚。没把地址贴进 Search Amazon.co.uk。首访 debugger 暂停 F8；reload r09–r12 `#121212`（mid=18,18,18）再浅。落地 Skip to / Keyboard shortcuts + 深色导航条，未点登录。Console：遥测 `ERR_CONNECTION_CLOSED` 是站点。 |
| 92 | namu.wiki | https://namu.wiki/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 92-namu-overlay.png；92-namu-complete.png | 韩语。预期浅，实际深色「나무위키:대문」（跟系统）。没把地址贴进「여기에서 검색」。f06 `#121212` 再深页。无 gray=255。Console：`ERR_CONNECTION_CLOSED` / Cat 是站点/浏览器。 |
| 93 | qq.com | https://www.qq.com/ | 浅色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 93-qq-overlay.png；93-qq-complete.png | **全球榜独立测，不抄中文榜。** 预期浅，实际深色腾讯网门户（跟系统）。没把地址贴进搜索。连拍已是内容，没抓到 `#121212`。Console：遥测 `ERR_CONNECTION_CLOSED` 是站点。DevTools workspace 映射框未点。 |
| 94 | hbomax.com | https://www.hbomax.com/ | 深色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 94-hbomax-overlay.png；94-hbomax-complete.png | 落地仍是 **hbomax.com**，未跳 max.com。深色营销「Must-see series」+ Legal Terms and Privacy cookie 墙，**未点 Agree**，未进播放。空标签 gray≈58 后深页，无 gray=255，没抓到 `#121212`。Console：beam events / geoip 是站点。 |
| 95 | dcinside.com | https://www.dcinside.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 95-dcinside-overlay.png；95-dcinside-complete.png | 韩语浅色论坛首页（dcinside GRAND OPEN）。没把地址贴进「갤러리&통합검색」。空标签 gray≈58 后浅页，没抓到 `#121212`。Console：lottie / Instagram embed / CSP / `ERR_CONNECTION_CLOSED` 是站点。 |
| 96 | zillow.com | https://www.zillow.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 96-zillow-overlay.png；96-zillow-complete.png | 浅色「Rentals. Homes. Agents. Loans.」+ 人机验证墙「在我们继续之前……按住以确认您是人类」，**未点按住**。没把地址贴进 Enter an address。f05–f12 `#121212` 再浅。mid=255 但 var 很高，不是空 body。 |
| 97 | chat.deepseek.com | https://chat.deepseek.com/ | 未知 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 97-chat-deepseek-overlay.png；97-chat-deepseek-complete.png | **测的是 chat.deepseek.com，不是 deepseek.com。** 落地 `/sign_in` 深色登录墙（手机号 / 微信扫码），**未登录**。连拍已是深墙，没抓到 `#121212`。没往手机号框打字。Console：遥测 fetch failed / `ERR_CONNECTION_CLOSED` 是站点。 |
| 98 | douyin.com | https://www.douyin.com/ | 深色 | 混合 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 98-douyin-overlay.png；98-douyin-complete.png | 落地 `douyin.com/jingxuan`。深色信息流 + 浅色登录墙「登录后免费畅享高清视频」。**只测墙，未登录、未刷视频。** f02–f04 `#121212` 再浅墙。Console：遥测 `ERR_CONNECTION_CLOSED` / service worker 是站点。 |
| 99 | messenger.com | https://www.messenger.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 99-messenger-overlay.png；99-messenger-complete.png | **只测未登录登录墙**「开展有意义对话的平台」，未点登录。没把地址贴进邮箱/电话框。f08–f12 `#121212` 再浅。Console：Permissions-Policy / Cat / 站点「停下」反调试文案是站点。 |
| 100 | shop.app | https://shop.app/ | 未知 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 100-shop-overlay.png；100-shop-complete.png | 跟着落地：跳 `shop.com` 跟踪 URL，浅色 **403 Forbidden** 墙。未开 App Store。只测墙。f09–f23 `#121212` 再浅 403。Console：Cat `403 Forbidden` / favicon 是站点。测完 Network 仍是 **已停用节流模式**。 |

## 复测

无。本批没有可复现的深站 gray=255 var=0 空 body，也没有脚本遮罩卡住。10 站全通过。脚本保持 1.0.2，**不 bump、不重装**。

## 共性问题

- 以**实际首屏**为准。本批 amazon.co.uk / dcinside / zillow / messenger / shop.app 403 仍浅；namu.wiki / qq.com / hbomax / chat.deepseek 实际深。namu / qq 预期浅、系统深色下实际深；douyin 预期深、登录墙是浅色白卡叠在深色信息流上记 混合。不要拿预期主题当失败。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 91 / 96 / 98 / 99 / 100）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。qq / hbomax / dcinside / chat.deepseek 连拍没抓到 `#121212`，记 无，不记失败。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈58 不是白闪（hbomax / dcinside）。浅色站白空壳 / 白 403（shop.app）记 浅，不记失败。zillow mid=255 但 var 很高，是浅色内容不是空 body。
- 登录墙 / Cookie 墙 / 验证墙 / 站点错误墙只看墙：hbomax Legal Terms、zillow 人机验证、chat.deepseek 登录墙、douyin 登录墙、messenger 登录墙、shop.app 403。Helium 断连才跳过；本批没有断连。amazon.co.uk 与其他 amazon 分开测；qq.com 全球榜独立测；chat.deepseek.com 与 deepseek.com 分开测。hbomax 未跳 max.com，跟着落地。shop.app 跳 shop.com 403，未开 App Store。NSFW 本批无。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 SDK / Cat `content ready`、Facebook「停下」反调试、403 favicon 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 Helium **顶栏地址栏**（桌面约地址栏 `(520, 54)` / `(509, 56)`，地球图标 `(427, 61)` 退出 Kagi），`cmd+a` / `rdc type`，出现 Kagi 搜索时不要 Enter；等蓝色地址栏圈或点地球图标后再进。Esc 后再操作。Cookie / 搜索 / Email / 手机号会抢 Enter（amazon.co.uk / namu / qq / dcinside / zillow / chat.deepseek / douyin / messenger）。DevTools 会抢焦点，用 `rdc type` 前先点顶栏地址栏。debugger 暂停用 F8。权限框「不允许」；DevTools workspace 映射不是站点权限，未点。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。

## 全球 1–100 汇总

数据来源：`top-100-results.md` 最终结论（含批次 1 TikTok 旧失败但 1.0.2 复测通过，以最终结论计）。

| 结论 | 数量 | 说明 |
| --- | --- | --- |
| 通过 | 97 | 含 TikTok 1.0.2 复测通过 |
| 失败 | 0 | 无残留失败 |
| 跳过 | 3 | 35 bet.br、53 xhamster46.desi、89 rm358.com，均为 Helium `ERR_CONNECTION_CLOSED` 连不上 |
| 合计 | 100 | 批次 1–10 |

脚本最终版本：**1.0.2**（暴力猴已装，第 3–10 批未 bump）。全球 Top 100 测完，**不再开第 11 批**。未覆盖中文榜 `top-100-zh-sites.md` / `top-100-zh-batches.md` / `top-100-zh-results.md`。
