# Dark Mode++ 深色系统 · 浅色首屏复测批次 4（L031–L040）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump）。系统深色（桌面 / 菜单栏 / Helium 深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开，**No throttling / 无节流**（开测 ozon 墙时与测完 adobe 后 Network 都是「已停用节流模式」）。登录墙 / Cookie / 验证 / 连接墙只测墙，未登录。未测 L030 及以前，未开批次 5。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 adobe.com。

证据目录：`rdc-awf-dark-light-b04/`。连拍只写 `/tmp/g-dl-b04`，用 `/tmp/g-dl-b04/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | instructure.com | https://www.instructure.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 31-instructure-overlay.png；31-instructure-complete.png | 测营销站，未进 Canvas 租户，未点 Login / Explore Canvas。r04–r11 `#121212`（mid=18,18,18）再浅色 “Why not all screen time is the same”。 |
| 32 | walmart.com | https://www.walmart.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 32-walmart-overlay.png；32-walmart-complete.png | 浅色首页 Halloween party food。没抓到 `#121212`。未往 Search Walmart 打字，购物助手只测墙、未点。 |
| 33 | amazon.in | https://www.amazon.in/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 33-amazonin-overlay.png；33-amazonin-complete.png | 印度站，不是 amazon.com。Delivering to Mumbai + Search Amazon.in。r01–r03 `#121212` 再浅色 Great Indian Festival。未往搜索框打字。 |
| 34 | office.com | https://www.office.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 34-office-overlay.png；34-office-complete.png | 跳 **m365.cloud.microsoft/zh-hans/** 浅色 Copilot 营销，不是整页登录墙。r11–r13 `#121212` 再浅。未点立即购买。本次无断连。 |
| 35 | bbc.co.uk | https://www.bbc.co.uk/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 35-bbc-overlay.png；35-bbc-complete.png | 英国站，不是 bbc.com。浅色 Welcome to the BBC。白空壳 mid=255，没抓到 `#121212`。Cookie 未点，未点 Sign in。 |
| 36 | docomo.ne.jp | https://www.docomo.ne.jp/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 36-docomo-overlay.png；36-docomo-complete.png | 首访白骨架是浅色站。r02 `#121212` 再白骨架后「iPhone 18 Pro ついに登場」。白骨架不是深站白闪。 |
| 37 | amazon.co.jp | https://www.amazon.co.jp/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 37-amazonjp-overlay.png；37-amazonjp-complete.png | 日本站，不是 amazon.com / amazon.in。搜索 Amazon.co.jp + 配送至美国条。白空壳再浅色「探索影音商品和游戏」，没抓到 `#121212`。未往搜索框打字。 |
| 38 | paypal.com | https://www.paypal.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 38-paypal-overlay.png；38-paypal-complete.png | 落地 **/us/home** 浅色营销「Shine all season with Pay」，不是整页登录墙。白空壳 mid=255，没抓到 `#121212`。未点 Learn More。 |
| 39 | etsy.com | https://www.etsy.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 39-etsy-overlay.png；39-etsy-complete.png | 这次不是 403，落地 `/?go_referrer=` 浅色「Our Top 100 Holiday Gifts」。白空壳再内容，没抓到 `#121212`。未往 Search for anything 打字。 |
| 40 | adobe.com | https://www.adobe.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 40-adobe-overlay.png；40-adobe-complete.png | 浅色营销「Students and teachers save 71%」。白空壳再内容，没抓到 `#121212`。第一次无断连，未重试。未点 Sign in。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 没有误跳过。** Instructure / Amazon.in / Office→M365 / Docomo 都抓到 `#121212`（mid=18,18,18）。脚本在 `prefers-color-scheme: dark` = true 时仍建遮罩。
- Walmart / BBC / Amazon.co.jp / PayPal / Etsy / Adobe 单站连拍没抓到 `#121212`，只见到浅色白空壳或已出内容，页面正常、遮罩没卡住，记 浅，**不算误跳过**（其它浅站已证明遮罩会建）。
- 浅站先 `#121212` 再露白 = 遮罩颜色错色、二次闪=是，这是深色系统下的预期，遮罩会撤就算通过。本批 31 / 33 / 34 / 36 属于这类。
- gray=255 var=0 空 body 本批没有当成深站白闪。Helium 空标签 gray≈58 不是白闪。BBC / Docomo 白骨架 / Amazon.co.jp / PayPal / Etsy / Adobe 白空壳是浅色站。
- 登录墙 / Cookie / 营销墙只测墙：Office 落地 M365 营销而非整页登录；PayPal 落地 `/us/home` 营销；Etsy 这次不是 403。Instructure 未进 Canvas。Walmart / Amazon.in / Amazon.co.jp / Etsy 没把地址打进页面搜索框。BBC Cookie 未点。
- debugger 暂停 F8 后继续，**不记卡住、不记失败**。本批遮罩都在连拍内撤掉。
- Console / 站点遥测不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **已停用节流模式**。

## 共性问题

- 1.0.3 在系统深色时继续工作，浅色首屏会先盖 `#121212` 再露白。这是跟系统 scheme 的预期错色/二次闪，不是误跳过。
- 单站抓不到遮罩（Walmart / BBC / Amazon.co.jp / PayPal / Etsy / Adobe）不要当成 1.0.3 跳过；要看整批有没有 `#121212`。本批 Instructure / Amazon.in / M365 / Docomo 都有。
- 站点 debugger 暂停会冻住定时器。操作上继续 F8；不要把暂停中的深遮罩写成脚本卡住。
- office.com 可能跳 m365.cloud.microsoft；PayPal 可能落地 `/us/home` 营销页；Etsy 可能 403，这次是首页。只记落地页。Helium 断连先重试一次；本批 office / adobe 第一次就打开。
- Cat 侧栏会抢 `cmd+l` / 打字。本批后半段用新窗口 + 文件→新建标签页，Kagi 建议点地球关掉再 Enter。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程 No throttling。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。

## 给批次 5 的规则

- 站点按 `dark-retest-light-sites.md` L041–L050。**不要在本聊天开始批次 5。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。测完 No throttling。
- bbc.com 不要当成 bbc.co.uk。amazon.de 不要改去 amazon.com。telegram.org 与 t.me 分开。NSFW 只测未登录首屏/年龄墙。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
