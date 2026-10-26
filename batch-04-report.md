# Dark Mode++ 批次 4（31–40）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling**（测完仍是 No throttling）。登录墙 / 年龄墙 / Cookie 墙只测未登录首屏。未测第 41 名及以后。未覆盖中文榜。本批必须测 claude.ai（#31）。

证据目录：`rdc-awf-batch04/`。31–40 本轮实机。连拍只写 `/tmp/g-b04`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | claude.ai | https://claude.ai/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 31-claude-overlay.png；31-claude-complete.png | 落地 **claude.ai/login** 深色登录墙「追问未来」，不是浅米色。Reload r04–r11 `#121212`（mid gray=18 var=0）对齐近黑墙。只测墙，未点 Google/Apple/邮箱。Console：FedCM / Datadog `NetworkError` 是站点。 |
| 32 | vk.ru | https://vk.ru/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 32-vk-overlay.png；32-vk-complete.png | 测 **vk.ru**，不要改去 vk.com。深色 QR「VK登录」。Reload r04 起 `#121212`，随后仍深。未点创建账号/其他方式登录。页面搜索「vk.ru搜索」会抢后续 Enter。Console：Crashlytics / CORS 是站点。 |
| 33 | canva.com | https://www.canva.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 33-canva-overlay.png；33-canva-complete.png | 落地 **/zh_cn/** 浅色营销「今天你想设计什么？」+ Cookie。第一次 Enter 被 VK 搜索吞掉，再点顶栏才进。Reload r05 白空壳 gray=255 var=0 是浅色站，不是深站白闪。未点「登录 / 开始设计 / 接受Cookie」。 |
| 34 | weather.com | https://weather.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 34-weather-overlay.png；34-weather-complete.png | 落地 **weather.com/zh-CN/cn/jiangsu/lianyungang/haizhou-district/today?Goto=Redirected** 浅色天气 + Manage Cookie Settings。Reload r02–r04 `#121212` 再浅。未点 Accept。Cookie 墙会抢后续 Enter。Console：s.w-x.co `ERR_CONNECTION_CLOSED` 是站点。 |
| 35 | bet.br | https://bet.br/ | 未知 | 无 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 35-bet-br-error.png | Helium「无法访问此网站」`ERR_CONNECTION_CLOSED`。未改脚本、未换别的 URL。 |
| 36 | xvideos.com | https://www.xvideos.com/ | 深色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 36-xvideos-overlay.png；36-xvideos-complete.png | NSFW。白年龄/Cookie 墙「此网站只适合成年人」。Reload r07–r13 `#121212` 再浅色墙。未点「我已满18岁」，未往下点，未往「搜寻X视频」打字。 |
| 37 | news.yahoo.co.jp | https://news.yahoo.co.jp/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 37-yahoo-news-overlay.png；37-yahoo-news-complete.png | 日语新闻门户，不是第 2 批 yahoo.co.jp。浅色 YAHOO!ニュース。第一次 cmd+r 被页面抢走；再点顶栏 `(445, 56)` 后 r04–r10 `#121212` 再浅。未往搜索框打字。站点直播 `MEDIA_ERR_SRC_NOT_SUPPORTED`。 |
| 38 | samsung.com | https://www.samsung.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 38-samsung-overlay.png；38-samsung-complete.png | 地区跳 **samsung.com/us/** 浅色 Samsung Week + Cookie。Reload r04–r10 `#121212` 再浅。未点 Accept All / Learn more。Cookie「Accept All」会抢 Enter。 |
| 39 | stripchat.com | https://stripchat.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 39-stripchat-overlay.png；39-stripchat-complete.png | NSFW。跳 **zh.stripchat.com** 深色年龄墙「我已经年满18岁」。Reload 近黑/深骨架，无 gray=255。未点 18 岁，未进直播。Console：beatrixcdn `ERR_CONNECTION_CLOSED` 是站点。 |
| 40 | fandom.com | https://www.fandom.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 40-fandom-overlay.png；40-fandom-complete.png | 浅色门户首页，不是子域 wiki。Reload r03–r04 白空壳 gray=255 是浅色站。未往「搜寻」打字，未进 wiki。Console：fan.api 403 是站点。 |

## 复测

无。本批没有可复现的深站 gray=255 空 body，也没有遮罩卡住。脚本保持 1.0.2，**不 bump、不重装**。bet.br 跳过，不改脚本。

## 共性问题

- 以**实际首屏**为准。本批 Claude / VK 跟系统变深；xVideos 年龄墙实际是浅色白卡（预期深色也不算失败）；Canva / Weather / Yahoo JP News / Samsung / Fandom 仍浅；Stripchat 仍深。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 34 / 36 / 37 / 38）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。Canva / Fandom 连拍只抓到浅色白空壳，记 浅，不记失败。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈58 不是白闪。Canva / Fandom 的白空壳是浅色站。Claude / VK / Stripchat 无 gray=255。
- 登录墙 / 年龄墙 / Cookie 墙 / 地区墙只看墙：Claude 登录墙、VK QR 墙、Canva Cookie、Weather Cookie、xVideos / Stripchat 年龄墙、Samsung Cookie。断连记跳过，不改脚本。bet.br `ERR_CONNECTION_CLOSED` 跳过。
- NSFW 只测未登录首屏/年龄墙，不往下点，不进直播。Fandom 只测门户首页，不进子域 wiki。Yahoo JP News 不要往搜索框打字。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、FedCM / Datadog / Crashlytics / 站点 403 / `MEDIA_ERR_SRC_NOT_SUPPORTED` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 **Helium 顶栏 URL**（桌面约 `(445, 56)` / `(409, 55)`，不是 700px 截图像素）。Esc 掉 Kagi 建议再 Enter。Cookie / 页面搜索会抢 Enter（本批 VK 搜索吞掉 Canva、Weather Cookie 可能抢后续、xVideos 年龄墙「进入」、Yahoo 页面抢 cmd+r）。被抢就再点顶栏。DevTools 会抢 `cmd+v`，用 `rdc type`。debugger 暂停用 F8。权限框「不允许」。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无，不要为了拍遮罩开节流。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。

## 给第 5 批（41–50）的规则

- 站点：Globo / Apple / Mail.ru / ESPN / DuckDuckGo / Brave / GitHub / t.me / Zoom / eBay。**不要在本聊天开始第 5 批。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。以实际首屏为准。系统深色时门户 / 搜索 / GitHub 可能跟系统（本批 Claude / VK 已是这样）。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。1.0.2 在浅色 `#fff` 上深遮罩更长，常接近 overlayMax。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。浅色站白空壳记 浅，不记失败。
- 登录墙 / 年龄墙 / 地区墙 / 验证墙只测墙。断连=跳过，不改脚本。
- `t.me` 无路径可能立刻跳转，只记落地页，与 telegram.org 分开。Zoom 公开榜可能是 zoom.us，按第 5 批指示测，不要自行改脚本。Brave 测 brave.com 营销站，不要改去 Brave Search。GitHub 不要假定深或浅。
- 点 Helium 顶栏 URL，Esc Kagi，Enter；Cookie / 搜索会抢 Enter，先再点顶栏或换新标签；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 41–50。
