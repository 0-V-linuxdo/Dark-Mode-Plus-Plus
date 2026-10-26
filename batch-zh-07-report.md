# Dark Mode++ 中文批次 7（61–70）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（28k，已启用，未重装）。系统深色。DevTools Disable cache 开，**No throttling / 已禁用节流模式**（测完仍是 No throttling）。登录/年龄/地区/验证墙只测墙。未测第 71 名及以后。未覆盖全球榜。未另测 news.tvbs.com.tw。未测 hanime1.me。未开始第 8 批。

证据目录：`rdc-awf-zh-batch07/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b07`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 61 | pchome.com.tw | https://www.pchome.com.tw/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 61-pchome-overlay.png；61-pchome-complete.png | 浅色电商首页。**没把地址贴进搜索框，未进商品**。首访空标签灰底 (58,60,60) → `#121212`（gray=18.1 var=2.7）→ 浅色首页。Reload r03–r12 `#121212` 再浅色首页。错色二次闪，遮罩会撤。Console：CSP `frame-ancestors` / CORS / 站点 `ERR_CONNECTION_CLOSED`。 |
| 62 | czbooks.net | https://czbooks.net/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 62-czbooks-overlay.png；62-czbooks-complete.png | **只测墙，未点章节**。落地浅色 CF「Sorry, you have been blocked」。首访灰底 → `#121212` → 墙。Reload r03 浅遮罩淡出。无 gray=255 空 body。Console：Cat / `cdn-cgi/challenge-platform` 403。 |
| 63 | tvbs.com.tw | https://www.tvbs.com.tw/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 63-tvbs-overlay.png；63-tvbs-complete.png | **测的是 www.tvbs.com.tw，没有另测 news.tvbs.com.tw**。浅色 TVBS 首页。**未点新闻**。没把地址贴进「关键字」搜索。首访灰底 → 浅白遮罩 gray≈254 → 浅色首页。Reload r02 `#121212` 再浅色首页。Console：GTM/advertisement `ERR_CONNECTION_CLOSED` / Cat。 |
| 64 | chinatimes.com | https://www.chinatimes.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 64-chinatimes-overlay.png；64-chinatimes-complete.png | 落地 `/hottv` 浅色中时新闻网。**未点新闻**。底部 Cookie 条未点。首页快讯视频不是点进正文。有「登入」不是整页墙。首访灰底后出浅色首页。Reload r02 `#121212` 再浅色首页。Console：GTM/YouTube/Scorecard `ERR_CONNECTION_CLOSED`。 |
| 65 | cmoney.tw | https://www.cmoney.tw/ | 浅色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 65-cmoney-overlay.png；65-cmoney-complete.png | Helium 错误页「无法访问此网站 / ERR_CONNECTION_CLOSED」。URL 栏导航、cmd+r、错误页「重新加载」共 3 次，站点没打开。测的是浏览器错误页，不是 CMoney。没把地址贴进搜索框。未改脚本。 |
| 66 | openrice.com | https://www.openrice.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 66-openrice-overlay.png；66-openrice-complete.png | 落地 `openrice.com.cn/zh/cn/shenzhen` 深圳站浅色首页。位置权限点了「不允许」。Cookie「同意」未点。**未进餐厅详情**。没把地址贴进餐厅搜索。Reload r01 `#121212` 再浅色首页。Console：GTM `ERR_CONNECTION_CLOSED` / Cat。 |
| 67 | twkan.com | https://twkan.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 67-twkan-overlay.png；67-twkan-complete.png | 小说站「臺灣小說網」浅绿首页。**未点章节/书封**。Cookie「我知道了」未点。没把地址贴进搜索框。Helium 命令面板「打开」曾误进 Kagi 搜索，改走顶栏 URL 测的是 twkan.com。首访灰底 → `#121212` → 浅绿首页。Reload 已是内容。Console：gtag 404 / GTM `ERR_CONNECTION_CLOSED`。 |
| 68 | xbanxia.cc | https://xbanxia.cc/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 68-xbanxia-overlay.png；68-xbanxia-complete.png | **只测墙，未点章节**。落地浅色 CF「Sorry, you have been blocked」。命令面板曾误进 Kagi，改走顶栏 URL。首访灰底后出墙。Reload r03 浅遮罩淡出。无 gray=255 空 body。Console：Cat / 403 challenge-platform。 |
| 69 | 7-11.com.tw | https://www.7-11.com.tw/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 69-711-overlay.png；69-711-complete.png | 落地 WAF 浅色「The request is blocked.」**只测墙**。未进活动详情。没把地址贴进搜索框。命令面板曾误进 Kagi，改走顶栏 URL。首访 f03 / Reload r02 `#121212` 再白底拦截页。Console：Cat / 403。这是站点拦截页，不是 Helium `ERR_CONNECTION_CLOSED`。 |
| 70 | pixnet.net | https://www.pixnet.net/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 70-pixnet-overlay.png；70-pixnet-complete.png | 浅色痞客邦首页。**未点博客正文**。没把地址贴进搜索。有「登入」不是整页墙。首访灰底 → 浅白遮罩 gray≈254 → 灰骨架 → 浅色首页。Reload 已是内容。Console：GTM `ERR_CONNECTION_CLOSED`、站点 Minified React `#423`。 |

## 复测

本批没有可复现的白闪失败。cmoney.tw 三次都是 `ERR_CONNECTION_CLOSED`，记跳过，不 bump、不重装暴力猴。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准。本批 10 站预期都是浅色；CMoney 没打开，记的是 Helium 深色错误页，不是失败。不要拿预期主题当失败条件。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（PChome / 中时 / TVBS / 开饭喇 / twkan / 7-11）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败。
- 浅色遮罩在白底上几乎看不见（TVBS 首访、xbanxia reload、痞客邦 f15）。要用 gray/var。gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。
- 登录/年龄/地区/验证墙只看墙：czbooks / xbanxia 是 CF「Sorry, you have been blocked」；7-11 是 WAF「The request is blocked.」；开饭喇没出地区选择墙，但跳了深圳站。Cookie/语言/验证按钮未点。
- 连不上的站记 跳过：CMoney 三次 `ERR_CONNECTION_CLOSED`，和 wantgoo 同类。不要改脚本、不要加域名黑名单。7-11 的 WAF 白页是站点响应，不是浏览器错误页。
- Helium 命令面板「打开 https://…」对不常见域名（twkan / xbanxia / 7-11）会误进 **Kagi 搜索**。要以顶栏 URL 高亮后再 Enter 为准；证据图必须看到站点域名，不是 `kagi.com/search`。Cookie 条会抢 Enter（中时），这时点「打开」新页或改走顶栏。
- 点 Helium 顶栏 URL 再 `cmd+r`。顶栏大约桌面 y≈50–52，点太低会点到页面。导航时 DevTools 会抢 `cmd+v`，用 `rdc type`。不要把地址贴进页面搜索框（PChome / 开饭喇 / twkan / 7-11）。
- Helium 权限框点不允许：开饭喇位置点了「不允许」。通知/本地网络本轮未再弹。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、GTM/广告、站点 React/TypeError、Cat `content ready`、CF 403 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 不要长时间 Slow 4G。本轮 Network 一直是「已禁用节流模式」。DevTools 设备模式（Responsive）不要开。证据图在桌面布局下拍。
- 小说站（czbooks / twkan / xbanxia）不要点进章节。新闻站不要点进正文。开饭喇不要进餐厅详情。7-11 / PChome 不要进商品或活动。

## 脚本改动

无。1.0.1 已在暴力猴里。本批 9/10 通过，1 跳过（cmoney 连不上），0 失败。没有可复现脚本问题，没有 bump。

## 给中文第 8 批（71–80）的规则

- 站点：hanime1.me / on.cc / nownews.com / hko.gov.hk / tencent.com / feishu.cn / huawei.com / cctv.com / netease.com / chsi.com.cn。不要开始第 8 批，直到本报告被接手。
- **hanime1.me 是 NSFW**，只测首页/墙，不要点进影片。feishu 只测登录墙。不要改测 larkoffice.com。tencent/huawei/netease 可能是国际英文站，以实际首屏为准。hko / chsi 是政务浅色页。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 预期主题只作对照。系统深色时论坛/新闻/政务/电商仍可能跟系统，以实际首屏为准。
- 登录/年龄/地区墙只测墙。不要进新闻正文、影片、政务详情。
- 点 Helium 顶栏 URL 再 reload。命令面板「打开」可能进 Kagi 搜索，**以顶栏地址栏为准**。导航时 DevTools 会抢 `cmd+v`，先点顶栏或先关控制台，用 type。不要把地址贴进页面搜索框。Helium 通知/本地网络/位置权限框点屏蔽/不允许。Cookie 条会抢 Enter。
- 浅色站出现一帧 `#121212` 再露白底：记 错色 + 二次闪，遮罩会撤就不算失败。
- 深色 SPA 盯空 body：gray=255 var=0 **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。CF/验证墙白帧若 reload 不复现，记失败但不要急着改脚本。连不上的站记 跳过。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
