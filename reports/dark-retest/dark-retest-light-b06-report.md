# Dark Mode++ 深色系统 · 浅色首屏复测批次 6（L051–L060）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；测完 Network 工具条是「已停用节流模式」，**No throttling / 无节流**。登录墙 / Cookie / 验证墙只测墙，未登录。未测 L050 及以前，未开批次 7。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 jd.com。

证据目录：`../../evidence/dark-retest/b06/`。连拍只写 `/tmp/g-dl-b06`，用 `/tmp/g-dl-b06/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 51 | amazon.co.uk | https://www.amazon.co.uk/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 51-amazonuk-overlay.png；51-amazonuk-complete.png | 英亚，不是 amazon.com / .in / .co.jp / .de。白空壳 mid=255 再浅色 Skip to / 键盘快捷键首屏。没抓到 `#121212`。未往搜索框打字。本次未断连。 |
| 52 | dcinside.com | https://www.dcinside.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 52-dcinside-overlay.png；52-dcinside-complete.png | 浅色韩语门户「dcinside 2026.11.26 GRAND OPEN」+ 갤러리列表。白空壳再内容，没抓到 `#121212`。未往검색打字。 |
| 53 | zillow.com | https://www.zillow.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 53-zillow-overlay.png；53-zillow-complete.png | 浅色 “Rentals. Homes. Agents. Loans.”。白空壳再浅蓝英雄区后内容，没抓到 `#121212`。未往地址框打字，未点 Sign in。 |
| 54 | messenger.com | https://www.messenger.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 54-messenger-overlay.png；54-messenger-complete.png | 只测未登录墙「开展有意义对话的平台」+ 登录。白空壳再浅，没抓到 `#121212`。未点登录，未填手机号。 |
| 55 | shop.app | https://shop.app/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 55-shopapp-overlay.png；55-shopapp-complete.png | 跟着落地 **shop.com/?_im_id=…** 白页标签「403 Forbidden」，当墙测。没抓到 `#121212`。页面已打开，不是 Helium `ERR_FAILED`。 |
| 56 | taobao.com | https://www.taobao.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 56-taobao-overlay.png；56-taobao-complete.png | 这次不是整页登录墙，浅色双11「开门红」首页。顶栏有请登录，未点。白空壳再内容，没抓到 `#121212`。未往搜索框打字。 |
| 57 | zhihu.com | https://www.zhihu.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 57-zhihu-overlay.png；57-zhihu-complete.png | 落地 **zhihu.com/signin?next=%2F** 浅色登录墙「知乎」+ 验证码/二维码。没抓到 `#121212`。未填手机号，未点登录/注册。 |
| 58 | doubao.com | https://www.doubao.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 58-doubao-overlay.png；58-doubao-complete.png | 落地 **doubao.com/chat** 浅色「有什么我能帮你的」。白空壳再内容，没抓到 `#121212`。未往「发消息」打字，未点登录。 |
| 59 | 163.com | https://www.163.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 59-163-overlay.png；59-163-complete.png | 浅色网易 NetEase 门户首页。白空壳再内容，没抓到 `#121212`。未往搜索框打字。 |
| 60 | jd.com | https://www.jd.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 60-jd-overlay.png；60-jd-complete.png | 这次不是整页登录墙，浅色京东首页。顶栏有请登录，未点。白空壳再红顶栏内容，没抓到 `#121212`。未往搜索框打字。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳记 浅，**不算误跳过，也不算深站白闪**。amazon.co.uk Skip to、shop.com 403 白页、淘宝/京东/网易/豆包白空壳 mid=255 都是浅色站。Helium 新标签 gray≈247 不是白闪。
- shop.app 跳 **shop.com 403 Forbidden**，页面已打开，当墙测，不跳过、不改脚本、不去别的 Shopify 店。
- amazon.co.uk 这次没有像 amazon.de 那样 `ERR_FAILED`，测到浅色 Skip to 首屏。
- 登录墙只测墙：Messenger / 知乎未登录；淘宝 / 京东这次出的是首页+顶栏请登录，未点登录。Zillow 未点 Sign in。豆包未往输入框打字。
- debugger 暂停本批没碰到。遮罩没卡住。
- Console / 站点遥测 / `Failed to construct 'URL'` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **无节流**（「已停用节流模式」）。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- shop.app 会跳 shop.com；403 是站点墙，Helium 断连才跳过。amazon.co.uk 不要改去 amazon.com。
- 淘宝 / 京东 / 豆包 / 网易搜索框、Zillow 地址框、Messenger / 知乎登录框会抢输入。Cat 侧栏仍在。本批用 cmd+t 标签搜索，Kagi 选「打开 https://…」或站点项再 Enter，不要点「搜索」。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。shop.com 403 不改脚本。

## 给批次 7 的规则

- 站点按 `dark-retest-light-sites.md` L061–L070。**不要在本聊天开始批次 7。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。测完 No throttling。
- tmall / 1688 登录墙只测墙。不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
