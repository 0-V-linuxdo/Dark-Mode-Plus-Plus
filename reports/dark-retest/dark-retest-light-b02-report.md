# Dark Mode++ 深色系统 · 浅色首屏复测批次 2（L011–L020）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump）。系统深色（桌面 / 菜单栏 / Helium 深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测）。DevTools Disable cache 开，**No throttling / 无节流**（测完仍是「已停用节流模式」）。登录墙 / Cookie / 验证 / 年龄墙只测墙，未登录。未测 L010 及以前，未开批次 3。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。

证据目录：`../../evidence/dark-retest/b02/`。连拍只写 `/tmp/g-dl-b02`，用 `/tmp/g-dl-b02/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | naver.com | https://www.naver.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 11-naver-overlay.png；11-naver-complete.png | 韩语浅色门户。reload r10–r12 `#121212`（mid=18,18,18）再浅色首页。未点浏览器更新条，未往搜索框打字。debugger 暂停 F8 后撤，不记卡住。Console pstatic `ERR_CONNECTION_CLOSED` 是站点。 |
| 12 | live.com | https://outlook.live.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 12-outlook-overlay.png；12-outlook-complete.png | 先 `outlook.live.com/mail/` 白 Outlook 闪屏，落地 **microsoft.com/zh-cn/microsoft-365/outlook/...** 浅色营销墙「让你的收件箱井然有序」。reload r07–r11 `#121212` 再浅。未点「登录 / 下载」。未测 www.live.com。 |
| 13 | bilibili.com | https://www.bilibili.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 13-bilibili-overlay.png；13-bilibili-complete.png | 浅色首页。首访 f03 `#121212` 再浅。未进分区/播放，未登录。 |
| 14 | microsoft.com | https://www.microsoft.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 14-microsoft-overlay.png；14-microsoft-complete.png | 落地 **/en-us** 浅色营销「Hi there, welcome to Microsoft」。f13–f19 `#121212`，随后白空壳再内容。未往 Ask a question 打字，未点 Sign in。 |
| 15 | temu.com | https://www.temu.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 15-temu-overlay.png；15-temu-complete.png | 落地 **temu.com/login.html** 浅色登录/注册墙（这次不是滑块验证）。f06–f20 `#121212`（约 overlayMax）再墙。未填邮箱，未点继续。 |
| 16 | dzen.ru | https://dzen.ru/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 16-dzen-overlay.png；16-dzen-complete.png | 浅色信息流。reload 白空壳 mid gray=255，没抓到 `#121212`。未往「Поиск」打字。debugger 暂停 F8。白空壳是浅色站，不是深站白闪。 |
| 17 | canva.com | https://www.canva.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 17-canva-overlay.png；17-canva-complete.png | 落地 **/zh_cn/** 浅色营销「今天你想设计什么？」。白空壳 gray≈238 mid=255 再内容，没抓到 `#121212`。未点「登录 / 开始设计」。 |
| 18 | weather.com | https://weather.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 18-weather-overlay.png；18-weather-complete.png | 落地 **weather.com/zh-CN/.../haizhou-district/today** 浅色天气 + Manage Cookie Settings。f06–f13 `#121212` 再浅。未点 Accept。 |
| 19 | xvideos.com | https://www.xvideos.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 19-xvideos-overlay.png；19-xvideos-complete.png | NSFW。白年龄/Cookie 墙「此网站只适合成年人」。f13–f15 `#121212` 再浅色墙。未点「我已满18岁」，未往下点，未往「搜寻X视频」打字。 |
| 20 | news.yahoo.co.jp | https://news.yahoo.co.jp/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 20-yahoo-news-overlay.png；20-yahoo-news-complete.png | 日语新闻门户，不是 yahoo.co.jp。浅色 YAHOO!ニュース。f08–f12 `#121212` 再浅。未往搜索框打字。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 没有误跳过。** Naver / Outlook / Bilibili / Microsoft / Temu / Weather / xVideos / Yahoo JP News 都抓到 `#121212`（mid=18,18,18）。脚本在 `prefers-color-scheme: dark` = true 时仍建遮罩。
- Dzen / Canva 单站连拍没抓到 `#121212`，只见到浅色白空壳，页面正常、遮罩没卡住，记 浅，**不算误跳过**（其它浅站已证明遮罩会建）。
- 浅站先 `#121212` 再露白 = 遮罩颜色错色、二次闪=是，这是深色系统下的预期，遮罩会撤就算通过。本批 11 / 12 / 13 / 14 / 15 / 18 / 19 / 20 属于这类。
- gray=255 var=0 空 body 本批没有当成深站白闪。Helium 空标签 gray≈58 不是白闪。Dzen / Canva / Microsoft 的白空壳是浅色站。
- 登录墙 / Cookie / 年龄墙只测墙：Outlook 营销墙、Temu 登录墙、Weather Cookie、xVideos 年龄墙。Naver / Bilibili / Microsoft / Dzen / Canva / Yahoo JP News 没把地址打进页面搜索框。
- Naver / Dzen 的 debugger 暂停冻住页面，F8 后继续，**不记卡住、不记失败**。
- Console 里 pstatic / 遥测 `ERR_CONNECTION_CLOSED` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **已停用节流模式**。

## 共性问题

- 1.0.3 在系统深色时继续工作，浅色首屏会先盖 `#121212` 再露白。这是跟系统 scheme 的预期错色/二次闪，不是误跳过。
- 单站抓不到遮罩（Dzen / Canva）不要当成 1.0.3 跳过；要看整批有没有 `#121212`。本批多数浅站都有。
- 站点 debugger 暂停会冻住定时器。操作上继续 F8；不要把暂停中的深遮罩写成脚本卡住。
- Temu 这次落地登录墙而不是滑块验证，只测墙即可。Outlook 先 `/mail/` 白闪屏再营销站，以落地墙为准。
- 不要长时间 Slow 4G。本批全程 No throttling。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。

## 给批次 3 的规则

- 站点按 `dark-retest-light-sites.md` L021–L030。**不要在本聊天开始批次 3。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
