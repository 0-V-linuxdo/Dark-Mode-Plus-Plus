# Dark Mode++ 深色系统 · 浅色首屏复测批次 3（L021–L030）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump）。系统深色（桌面 / 菜单栏 / Helium 深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测）。DevTools Disable cache 开，**No throttling / 无节流**（测完 Network 仍是「已停用节流模式」）。登录墙 / Cookie / 验证 / 连接墙只测墙，未登录。未测 L020 及以前，未开批次 4。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 yahoo news。

证据目录：`rdc-awf-dark-light-b03/`。连拍只写 `/tmp/g-dl-b03`，用 `/tmp/g-dl-b03/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | samsung.com | https://www.samsung.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 21-samsung-overlay.png；21-samsung-complete.png | 地区跳 **samsung.com/us/** 浅色营销 + Cookie（Configure / Accept All / Decline All）。f08–f12 `#121212`（mid=18,18,18）再浅。未点 Accept All。 |
| 22 | fandom.com | https://www.fandom.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 22-fandom-overlay.png；22-fandom-complete.png | 浅色门户首页 Frozen 2 + 底部 Cookie，不是子域 wiki。f05 `#121212` 再近黑/白空壳后内容。未往「搜索」打字，未进 wiki。 |
| 23 | globo.com | https://www.globo.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 23-globo-overlay.png；23-globo-complete.png | 巴西葡语门户。浅色首页 Eleições 2026 + Cookie「Prosseguir」。f08–f13 `#121212` 再浅。未点 Prosseguir，未往 Busca / 「Digite o estado ou UF」打字。 |
| 24 | brave.com | https://brave.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 24-brave-overlay.png；24-brave-complete.png | 测营销站，不是 Brave Search。浅色 “The browser that puts you first” + 语言条「本页面还有中文（中国）版本」。没抓到 `#121212`（首访一帧 mid=32,33,36 不是 18,18,18）。未点 Get Brave / 是，未往 Private search 打字。 |
| 25 | t.me | https://t.me/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 25-tme-overlay.png；25-tme-complete.png | 无路径立刻跳 **telegram.org** 浅色营销「a new era of messaging」。只记落地页。白空壳 f12–f14 mid=255，没抓到 `#121212`。未点 Android / iPhone。 |
| 26 | ebay.com | https://www.ebay.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 26-ebay-overlay.png；26-ebay-complete.png | 这次不是 403，落地浅色首页 + Cookie Accept all / Decline All。只测墙。f11–f13 `#121212` 再浅。未点 Accept all，未往「Search for anything」打字。 |
| 27 | nytimes.com | https://www.nytimes.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 27-nytimes-overlay.png；27-nytimes-complete.png | 浅色首页「These top stories are free to read」，不是整页订阅墙。白空壳 f07–f11 mid=255，没抓到 `#121212`。未点 Subscribe。 |
| 28 | aliexpress.com | https://www.aliexpress.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 28-aliexpress-overlay.png；28-aliexpress-complete.png | 落地 **aliexpress.com/ug-login-page/login.html** 浅色 Register/Sign in 墙（Location: United States）。f02–f13 `#121212`（约 overlayMax）再墙。未填 Email，未点 Continue。 |
| 29 | booking.com | https://www.booking.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 29-booking-overlay.png；29-booking-complete.png | 落地 **booking.com/index.zh-cn.html** 浅色中文首页。f10–f15 `#121212` 再浅。未往「输入目的地」打字。本次无 Genius 登录弹层。 |
| 30 | ozon.ru | https://www.ozon.ru/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 30-ozon-overlay.png；30-ozon-complete.png | 落地站点浅色连接墙「Похоже, нет соединения」。不是 Helium `ERR_CONNECTION_CLOSED`，当墙测。f05–f13 `#121212` 再浅。未点 Обновить страницу。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 没有误跳过。** Samsung / Fandom / Globo / eBay / AliExpress / Booking / Ozon 都抓到 `#121212`（mid=18,18,18）。脚本在 `prefers-color-scheme: dark` = true 时仍建遮罩。
- Brave / t.me→telegram.org / NYTimes 单站连拍没抓到 `#121212`，只见到浅色白空壳或已出内容，页面正常、遮罩没卡住，记 浅，**不算误跳过**（其它浅站已证明遮罩会建）。
- 浅站先 `#121212` 再露白 = 遮罩颜色错色、二次闪=是，这是深色系统下的预期，遮罩会撤就算通过。本批 21 / 22 / 23 / 26 / 28 / 29 / 30 属于这类。
- gray=255 var=0 空 body 本批没有当成深站白闪。Helium 空标签 gray≈58 不是白闪。Brave 首访一帧 mid=32,33,36 不是 `#121212`。t.me / NYTimes 白空壳是浅色站。
- 登录墙 / Cookie / 连接墙只测墙：Samsung Cookie、Fandom Cookie、Globo Prosseguir、eBay Cookie、AliExpress 登录墙、Ozon 连接墙。Brave / Booking / NYTimes / t.me 没把地址打进页面搜索框。
- debugger 暂停 F8 后继续，**不记卡住、不记失败**。
- Console / 站点遥测不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **已停用节流模式**。

## 共性问题

- 1.0.3 在系统深色时继续工作，浅色首屏会先盖 `#121212` 再露白。这是跟系统 scheme 的预期错色/二次闪，不是误跳过。
- 单站抓不到遮罩（Brave / t.me / NYTimes）不要当成 1.0.3 跳过；要看整批有没有 `#121212`。本批多数浅站都有。
- 站点 debugger 暂停会冻住定时器。操作上继续 F8；不要把暂停中的深遮罩写成脚本卡住。
- eBay 这次落地首页 Cookie 墙，不是原测的 403 SORRY，只测墙即可。t.me 无路径立刻跳 telegram.org，以落地页为准。Brave 测营销站，不要改去 Brave Search。Ozon 连接墙当墙测。
- 不要长时间 Slow 4G。本批全程 No throttling。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。

## 给批次 4 的规则

- 站点按 `dark-retest-light-sites.md` L031–L040。**不要在本聊天开始批次 4。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
