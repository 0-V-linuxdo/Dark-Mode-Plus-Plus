# Dark Mode++ 深色系统 · 浅色首屏复测批次 10（L091–L100）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；测完 Network 下拉是「已停用节流模式」，**No throttling / 无节流**。登录墙 / Cookie / 验证墙只测墙，未登录。未测 L090 及以前，未开批次 11。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 hk.on.cc。

证据目录：`rdc-awf-dark-light-b10/`。连拍只写 `/tmp/g-dl-b10`，用 `/tmp/g-dl-b10/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 91 | pchome.com.tw | https://www.pchome.com.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 91-pchome-overlay.png；91-pchome-complete.png | 浅色电商首页。没把地址贴进搜索框，未进商品。连拍没抓到 `#121212`。 |
| 92 | czbooks.net | https://czbooks.net/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 92-czbooks-overlay.png；92-czbooks-complete.png | 只测墙，未点章节。落地浅色 CF「Sorry, you have been blocked」。没抓到 `#121212`。 |
| 93 | tvbs.com.tw | https://www.tvbs.com.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 93-tvbs-overlay.png；93-tvbs-complete.png | **测的是 www.tvbs.com.tw，没有另测 news.tvbs.com.tw**。浅色首页。未点新闻。没把地址贴进搜索。f01 黑英雄位是站点视频空位，不是脚本 `#121212`。 |
| 94 | chinatimes.com | https://www.chinatimes.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 94-chinatimes-overlay.png；94-chinatimes-complete.png | 落地 `/hottv` 浅色中时首页。未点新闻。Cookie 未点。有登入不是整页墙。白空壳再内容，没抓到 `#121212`。 |
| 95 | openrice.com | https://www.openrice.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 95-openrice-overlay.png；95-openrice-complete.png | 落地 `openrice.com.cn/zh/cn/shenzhen` 深圳站浅色首页。本次无位置权限框。Cookie 未点同意。未进餐厅，没把地址贴进餐厅搜索。 |
| 96 | twkan.com | https://twkan.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 96-twkan-overlay.png；96-twkan-complete.png | 浅绿「臺灣小說網」首页。未点章节/书封。Cookie 未点。没把地址贴进搜索。有地球项，点地球再 Enter。 |
| 97 | xbanxia.cc | https://xbanxia.cc/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 97-xbanxia-overlay.png；97-xbanxia-complete.png | 只测墙，未点章节。落地浅色 CF「Sorry, you have been blocked」。无地球项，Esc 关掉 Kagi 再 Enter。没抓到 `#121212`。 |
| 98 | 7-11.com.tw | https://www.7-11.com.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 98-711-overlay.png；98-711-complete.png | 落地 WAF 浅色「The request is blocked.」只测墙。不是 Helium `ERR_CONNECTION_CLOSED`。Esc 关掉 Kagi 再 Enter。没抓到 `#121212`。 |
| 99 | pixnet.net | https://www.pixnet.net/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 99-pixnet-overlay.png；99-pixnet-complete.png | 浅色痞客邦首页。未点博客正文。有登入不是整页墙。白空壳再内容，没抓到 `#121212`。 |
| 100 | on.cc | https://www.on.cc/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 100-oncc-overlay.png；100-oncc-complete.png | 落地 `hk.on.cc/hk/news/index.html`。未点新闻。Cookie「感谢你浏览东网」未点。连拍末白空壳，稍后出浅色新闻卡。没抓到 `#121212`。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳记 浅，**不算误跳过，也不算深站白闪**。PChome / 中时 / 开饭喇 / 痞客邦 / 东网白空壳再内容；czbooks / xbanxia 是 CF 墙；7-11 是 WAF 白页；TVBS / twkan 已出浅色内容。都是浅色站。
- 原测 PChome / czbooks / TVBS / 中时 / 开饭喇 / twkan / 7-11 是错色（先 `#121212` 再浅）。本批连拍都没抓到深遮罩，按单站抓不到记 浅，通过。不改脚本。
- 登录/验证墙只测墙：czbooks / xbanxia 是 CF「Sorry, you have been blocked」；7-11 是 WAF「The request is blocked.」。痞客邦 / 中时顶栏登录未点。开饭喇没出地区墙，但跳了深圳站。
- Magpie 本批没挡页面。开饭喇本次无位置权限框。东网 / 开饭喇 / 中时 / twkan Cookie 未点。权限框不允许。
- Console / 站点遥测 / `ERR_CONNECTION_CLOSED` / CF 403 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **无节流**（下拉「已停用节流模式」）。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- 测的是 www.tvbs.com.tw，不要另测 news.tvbs.com.tw。开饭喇实际落地 `openrice.com.cn` 深圳站。东网落地 `hk.on.cc/hk/news/index.html`。
- PChome / 开饭喇 / twkan / 痞客邦搜索框会抢输入。Cat 侧栏仍在，会抢 `cmd+l`。点 Helium 标签再 `cmd+l`，Kagi 点地球（站点项 / `https://…`）再 Enter，不要点「Kagi 搜索」。czbooks / xbanxia / 7-11 没有地球项时 **Esc 关掉建议再 Enter**。不要把地址打进页面搜索框。
- 导航下一站时不要点页面内容。中时 / 开饭喇 / twkan / 东网 Cookie 都别点。小说站不要点章节，新闻站不要点正文，开饭喇不要进餐厅。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。PChome / czbooks / TVBS / 中时 / 开饭喇 / twkan / 7-11 没抓到 `#121212` 不改脚本。

## 给批次 11 的规则

- 站点按 `dark-retest-light-sites.md` L101–L110。**不要在本聊天开始批次 11。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。Magpie 挡页面就关。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
