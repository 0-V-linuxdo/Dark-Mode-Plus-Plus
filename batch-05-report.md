# Dark Mode++ 批次 5（41–50）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling**（测完仍是 No throttling / 已停用节流模式）。登录墙 / Cookie 墙 / 语言墙 / 错误墙只测未登录首屏。未测第 51 名及以后，未测 discord.com。未覆盖中文榜。

证据目录：`rdc-awf-batch05/`。41–50 本轮实机。连拍只写 `/tmp/g-b05`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 41 | globo.com | https://www.globo.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 41-globo-overlay.png；41-globo-complete.png | 巴西葡语门户。Reload r07–r15 `#121212`（mid 18,18,18）再浅色首页 + Cookie「Prosseguir」。未点 Prosseguir，未往 Busca 打字。权限框点了「一律不允许」。Console：`ERR_CONNECTION_CLOSED` 是站点。 |
| 42 | apple.com | https://www.apple.com/ | 浅色 | 混合 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 42-apple-overlay.png；42-apple-complete.png | 仍是 **apple.com**，无 `/cn/` 等地区路径。英文首页上半 iPhone Duo 白底、下半 iPhone 18 Pro 黑带。Reload r02–r12 `#121212` 再浅英雄区。未点 Learn more / Buy。 |
| 43 | mail.ru | https://mail.ru/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 43-mailru-overlay.png；43-mailru-complete.png | 预期浅色，实际深色俄文门户 + Cookie「我们重视您的隐私」+ 定位条。Reload r08–r12 `#121212` 对齐近黑底。未点全部接受 / 定位，未往 Поиск 打字。站点 `ERR_CONNECTION_CLOSED`。 |
| 44 | espn.com | https://www.espn.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 44-espn-overlay.png；44-espn-complete.png | 深色体育首页。空标签 gray≈56 后 r19 `#121212` 再深色内容。无 gray=255。未点播放。站点 `ERR_CONNECTION_CLOSED`。 |
| 45 | duckduckgo.com | https://duckduckgo.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 45-duckduckgo-overlay.png；45-duckduckgo-complete.png | 跟系统深色营销首页「改用 DuckDuckGo。它是私密的且免费的！」。**未往搜索框打字**，未进 Duck.ai。空标签 gray≈56 后直接深页，连拍未单独抓到 `#121212` 帧，无 gray=255。站点 `ERR_CONNECTION_CLOSED`。 |
| 46 | brave.com | https://brave.com/ | 未知 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 46-brave-overlay.png；46-brave-complete.png | 测 **brave.com 营销站**，没有改去 Brave Search。浅色 “The browser that puts you first” + 语言条「本页面还有中文（中国）版本」。Reload 白空壳 gray 高、mid 255 是浅色站。未点 Get Brave / 是（切换语言），未往 Private search 打字。analytics.brave `ERR_CONNECTION_CLOSED` 是站点。 |
| 47 | github.com | https://github.com/ | 未知 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 47-github-overlay.png；47-github-complete.png | 未登录首页，不要假定深或浅；本机系统深色，实际深蓝紫营销「The future of building happens together」。Reload r10–r14 `#121212` 对齐。未点 Sign in / Sign up，未往邮箱打字。站点 `ERR_CONNECTION_CLOSED`。 |
| 48 | t.me | https://t.me/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 48-tme-overlay.png；48-tme-complete.png | 无路径立刻跳 **telegram.org** 浅色营销「a new era of messaging」。只记落地页，未手动改去 telegram.org。Reload 白空壳是浅色站。未点 Android / iPhone。 |
| 49 | zoom.com | https://www.zoom.com/ | 浅色 | 混合 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 49-zoom-overlay.png；49-zoom-complete.png | 先测 zoom.com，落地 **zoom.com/zh-cn**，**没有**跳 zoom.us。深蓝营销+浅色产品卡 + Cookie。Reload r10–r15 `#121212`，r16–r19 白帧，r20–r24 再盖回 `#121212` 后出内容（地区跳转二次遮罩）。未点 Cookies Settings / 探索产品。 |
| 50 | ebay.com | https://www.ebay.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 50-ebay-overlay.png；50-ebay-complete.png | 落地浅色 **Error Page \| eBay**「SORRY Something went wrong」，Network `GET www.ebay.com/ 403 Forbidden`。再 reload 仍是这堵墙。Overlay r05–r13 `#121212` 再浅。未点 try again，未换 URL。站点 403 不算脚本报错。 |

## 复测

无。本批没有可复现的深站 gray=255 空 body，也没有遮罩卡住。脚本保持 1.0.2，**不 bump、不重装**。eBay 403 当错误墙测，不改脚本。

## 共性问题

- 以**实际首屏**为准。本批 Mail.ru / DuckDuckGo / GitHub 跟系统变深；ESPN 仍深；Globo / Brave / t.me→telegram.org / eBay 错误墙仍浅；Apple 首屏上白下黑记混合；Zoom `/zh-cn` 深蓝底+浅色卡记混合。不要拿预期主题当失败。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 41 / 42 / 50，以及 Zoom 跳转中间的白帧）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。Brave / t.me 连拍只抓到浅色白空壳，记 浅，不记失败。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈56 不是白闪。本批 ESPN / DDG / GitHub / Mail.ru 无 gray=255。eBay / Brave / Telegram 的白空壳是浅色站。
- 登录墙 / Cookie 墙 / 语言墙 / 错误墙 / 地区墙只看墙：Globo Cookie、Mail.ru Cookie+定位、Brave 语言条、Zoom Cookie、eBay 403 SORRY。断连才跳过；本批都能打开。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 403 / worker ready 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 **Helium 顶栏 URL**（本机桌面约 `(310, 36)` / `(305, 22)`，不是 700px 截图像素；旧坐标 `(445, 56)` 会点到侧栏）。Esc 掉 Kagi 建议再 Enter。Cookie / 页面搜索 / 命令面板会抢 Enter（本批 Mail.ru Cookie、GitHub 邮箱/Sign up、Zoom Cookie、Apple 命令面板「Open https://www.apple.com/」曾吞掉 mail.ru）。被抢就再点顶栏。DevTools 会抢 `cmd+v`，用 `rdc type`。debugger 暂停用 F8。权限框「不允许」。不要把地址打进页面搜索框（尤其 DuckDuckGo / Brave Private search / GitHub email）。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无，不要为了拍遮罩开节流。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。

## 给第 6 批（51–60）的规则

- 站点：Discord / IMDb / xHamster46.desi / ePorner / NYTimes / AliExpress / Booking / Ozon / Roblox / Instructure。**不要在本聊天开始第 6 批。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。以实际首屏为准。系统深色时门户 / 搜索 / GitHub 类站点可能跟系统（本批 Mail.ru / DDG / GitHub 已是这样）。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。1.0.2 在浅色 `#fff` 上深遮罩更长，常接近 overlayMax。Zoom 这类会二次导航的站，中间白帧+第二次深遮罩也记二次闪，不记失败。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。浅色站白空壳记 浅，不记失败。Helium 空标签 gray≈56 不是白闪。
- 登录墙 / 年龄墙 / 地区墙 / 验证墙 / 403 错误墙只测墙。断连=跳过，不改脚本。
- Discord 是深色产品站。NYTimes 可能订阅墙。AliExpress 可能跳转。Instructure 测营销站，不是 Canvas 租户。NSFW 只测未登录首屏/年龄墙。
- 点 Helium 顶栏 URL（先点顶栏再 cmd+r；命令面板「打开」可能进 Kagi，Esc 后再 Enter）。Cookie / 搜索 / Sign up 会抢 Enter，先再点顶栏或换新标签；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 51–60。
