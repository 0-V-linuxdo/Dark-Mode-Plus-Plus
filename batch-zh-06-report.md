# Dark Mode++ 中文批次 6（51–60）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（28k，已启用，未重装）。系统深色。DevTools Disable cache 开，**No throttling / 已禁用节流模式**（测完仍是 No throttling）。登录/年龄/地区/验证墙只测墙。未测第 61 名及以后。未覆盖全球榜。未另测 news.tvbs.com.tw。

证据目录：`rdc-awf-zh-batch06/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b06`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 51 | ptt.cc | https://www.ptt.cc/ | 浅色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 51-ptt-overlay.png；51-ptt-complete.png | 落地 `ptt.cc/index.html` 深色「批踢踢實業坊」介绍页，系统深色跟系统。未出年龄/警告墙。未点「前往網頁版 (ptt.cc/bbs)」/文章。首访空标签浅底后出深色首屏。Reload 20 帧已是内容，无 gray=255、无 `#121212`。Console：Cat / `www.google-analytics.com ERR_CONNECTION_CLOSED`。 |
| 52 | dcard.tw | https://www.dcard.tw/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 52-dcard-overlay.png；52-dcard-complete.png | **只测墙，未进帖**。首访空标签灰底 (58,60,60) → 浅色 CF「Sorry, you have been blocked」。Reload 变成深蓝+白卡 Turnstile「需要確認您的連線是安全的」，未点「请验证您是真人」。f10–f11 wash-white 浅遮罩。无 gray=255 空 body。Console 仅 Cat。 |
| 53 | momoshop.com.tw | https://www.momoshop.com.tw/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 53-momo-overlay.png；53-momo-complete.png | 落地 `/main/Main.jsp` 浅色 momo 首页。**未点商品，没把地址贴进搜索框**。首访灰底 → `#121212`（gray=18 var=0）→ 白遮罩 gray=255 → 浅色首页。Reload r04 `#121212` 再浅色首页。深遮罩盖浅色站，随后撤。Console：promo.momo / Appier / jQuery 站点错误，不是脚本。 |
| 54 | setn.com | https://www.setn.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 54-setn-overlay.png；54-setn-complete.png | 浅色 SETN 三立新闻网。**未点新闻**。右上「登入」不是整页墙。首访 f06–f13 `#121212` 再浅色首页。Reload r02 白底 mid gray=255 var=0 浅遮罩后出内容。Console：GTM/Taboola/Scorecard `ERR_CONNECTION_CLOSED`、站点 `ReferenceError: checkInoffFang`。 |
| 55 | hkjc.com | https://www.hkjc.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 55-hkjc-overlay.png；55-hkjc-complete.png | 落地 `/zh-hk/index` 浅色香港赛马会营销首页。**未出地区墙**。未点馬場活動/賽馬資訊进投注页。底部「重要通知」Cookie 条未点「確認」。站点自带深蓝+黄弧 spinner，没抓到脚本 `#121212`。Reload 无 gray=255。Console：Adobe omtrdc `ERR_CONNECTION_CLOSED`。 |
| 56 | ltn.com.tw | https://www.ltn.com.tw/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 56-ltn-overlay.png；56-ltn-complete.png | 浅色自由时报。**未点新闻**。Helium「想要获取位置/相机」框点了 X，未允许。首访 f09–f12 `#121212` → 白底浅遮罩 → 浅色首页。Reload r02–r06 `#121212` 再浅色首页。Console：GTM/广告 `ERR_CONNECTION_CLOSED`、Permissions-Policy。 |
| 57 | stheadline.com | https://www.stheadline.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 57-stheadline-overlay.png；57-stheadline-complete.png | 浅色星岛头条。**未点新闻**。底部 Cookie「同意及继续」未点。首访 f10 wash-white 浅骨架（gray≈254）后出内容。Reload 无 `#121212`、无 gray=255 空 body。Console：Chartbeat/GTM/googleads `ERR_CONNECTION_CLOSED`。 |
| 58 | jable.tv | https://jable.tv/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 58-jable-overlay.png；58-jable-complete.png | NSFW。**未点影片**。首访空标签灰底 → `#121212` → 深色 CF「jable.tv 正在进行安全验证」→ 深色首页。Reload 22 帧全程深色（gray≈32），**无 gray=255 空 body**。和 missav.ws 首访白帧不同。有「登入」不是整页墙。Console：遥测 `ERR_CONNECTION_CLOSED` / Cat。 |
| 59 | wantgoo.com | https://www.wantgoo.com/ | 浅色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 59-wantgoo-overlay.png；59-wantgoo-complete.png | Helium 错误页「无法访问此网站 / ERR_CONNECTION_CLOSED」。新标签打开、URL 栏 cmd+r、错误页「重新加载」共 3 次，站点没打开。测的是浏览器错误页，不是玩股网。没把地址贴进搜索框。未改脚本。 |
| 60 | cwa.gov.tw | https://www.cwa.gov.tw/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 60-cwa-overlay.png；60-cwa-complete.png | 落地 `/V8/C/` 浅蓝「交通部中央氣象署」政务首页。首页台北天气卡不是点进预报详情。未点「鄉鎮預報總覽」。首访/Reload 先 `#121212` 再浅蓝地图首页。错色二次闪，遮罩会撤。Console：googleads `ERR_CONNECTION_CLOSED` / Cat / jQuery migrate。 |

## 复测

本批没有可复现的白闪失败。jable.tv 作为 missav.ws 同类深色 NSFW，首访+reload 都没有 gray=255 空 body，按调度不改脚本。wantgoo.com 三次都是 `ERR_CONNECTION_CLOSED`，记跳过，不 bump、不重装暴力猴。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准：PTT 名单写浅色，系统深色下介绍页是深色。不要拿预期主题当失败条件。CWA 浅蓝政务页记 浅色，不是深色主题。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（momo / 三立 / 自由时报 / 气象署）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败。
- 浅色遮罩在白底上几乎看不见（Dcard f10、三立 r02、星岛 f10）。要用 gray/var。gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。
- jable.tv 首访 CF 验证前是 `#121212` 再深色验证页，没有 missav.ws 那种白空 body。不要为此改脚本。
- 登录/年龄/地区/验证墙只看墙：PTT 没出年龄墙；Dcard 是 CF 拦截/Turnstile；HKJC 没出地区墙，只测落地页。Cookie/语言/验证按钮未点。
- 导航用 Helium 命令面板「打开 https://…」，不要点页面搜索框（momo / 玩股）或新闻卡片。cmd+t 有时不会空白新标签，type 进顶栏/命令面板即可。点 Helium 顶栏 URL 再 `cmd+r`。
- Helium 权限框点不允许：自由时报位置/相机框点了 X。通知/本地网络本轮未再弹。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、GTM/广告、站点 TypeError/ReferenceError、Cat `content ready` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 不要长时间 Slow 4G。本轮 Network 一直是「已禁用节流模式」。DevTools 设备模式（Responsive）不要开。本轮一直是桌面布局。
- wantgoo 连不上时记 跳过，不要改脚本、不要加域名黑名单。

## 脚本改动

无。1.0.1 已在暴力猴里。本批 8/10 通过，1 跳过（wantgoo 连不上），0 失败。没有可复现脚本问题，没有 bump。

## 给中文第 7 批（61–70）的规则

- 站点：pchome.com.tw / czbooks.net / tvbs.com.tw / chinatimes.com / cmoney.tw / openrice.com / twkan.com / xbanxia.cc / 7-11.com.tw / pixnet.net。不要开始第 7 批，直到本报告被接手。
- **不要另测 news.tvbs.com.tw**（测 `www.tvbs.com.tw`）。openrice 可能跳地区站。小说站（czbooks / twkan / xbanxia）不要点进章节。7-11 / pchome 不要把地址贴进搜索框。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 预期主题只作对照。系统深色时论坛/新闻/政务/电商仍可能跟系统，以实际首屏为准。
- 登录/年龄/地区墙只测墙。不要进新闻正文、小说章节、超商活动详情。
- 点 Helium 顶栏 URL 再 reload。导航时 DevTools 会抢 `cmd+v`，先点顶栏或先关控制台，**用 type 进新标签 overlay / 命令面板「打开」**。不要把地址贴进页面搜索框。Helium 通知/本地网络/位置权限框点屏蔽/不允许。
- 浅色站出现一帧 `#121212` 再露白底：记 错色 + 二次闪，遮罩会撤就不算失败。
- 深色 SPA 盯空 body：gray=255 var=0 **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。CF/验证墙白帧若 reload 不复现，记失败但不要急着改脚本。连不上的站记 跳过。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
