# Dark Mode++ 批次 3（21–30）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.2`（本批未重装、未再核对版本）。系统深色。DevTools Disable cache 开，**No throttling**（测完仍是 No throttling）。登录墙 / 年龄墙 / 验证墙只测未登录首屏。未测第 31 名及以后。未覆盖中文榜。未测 claude.ai。

证据目录：`rdc-awf-batch03/`。21–30 本轮实机。连拍只写 `/tmp/g-b03`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | naver.com | https://www.naver.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 21-naver-overlay.png；21-naver-complete.png | 韩语门户。Reload r05–r10 `#121212`（mid gray=18 var=0）再浅色首页。未点「브라우저를 업데이트하세요」，未往搜索框打字。Console：pstatic `ERR_CONNECTION_CLOSED` 是站点。 |
| 22 | netflix.com | https://www.netflix.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 22-netflix-overlay.png；22-netflix-complete.png | 未登录营销页「Unlimited movies…」。Reload 一帧纯黑 mid gray=0，未见 `#121212` 也未见 gray=255。未点 Sign In / Get Started / Trending 海报。Console：NM_landing / apple-mobile-web-app-capable / logs.netflix.com `ERR_CONNECTION_CLOSED` 是站点。 |
| 23 | live.com | https://outlook.live.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 23-outlook-overlay.png；23-outlook-complete.png | 先 `outlook.live.com/mail/` 白 Outlook 闪屏，落地 **microsoft.com/zh-cn/microsoft-365/outlook/...** 浅色营销墙。Reload r08 `#121212` 再浅。未点「登录 / 下载」。未测 www.live.com。Console：WcpConsent / cookie-compliance 是站点。 |
| 24 | bilibili.com | https://www.bilibili.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 24-bilibili-overlay.png；24-bilibili-complete.png | 全球榜独立测，不抄中文榜。浅色首页。Reload r02 `#121212` 再浅。未进分区/播放，未登录。Console：hydration mismatch / bili-fe-mirror / 站点「白屏检测 status ok」，不是脚本报错。 |
| 25 | pornhub.com | https://www.pornhub.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 25-pornhub-overlay.png；25-pornhub-complete.png | NSFW。跳 **cn.pornhub.com** 深色年龄墙「这是个成人网站」。Reload r04 `#121212` 对齐。未点「我年满 18 岁」。Console：Failed ad zone 是站点广告。 |
| 26 | microsoft.com | https://www.microsoft.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 26-microsoft-overlay.png；26-microsoft-complete.png | 落地 **/en-us** 浅色营销「Hi there, welcome to Microsoft」。Reload r03–r05 `#121212`，r06–r11 白空壳 gray=255（浅色站），再内容。未往 Ask a question 打字，未点 Chat now。Console：clicktale `ERR_CONNECTION_CLOSED` 是站点。 |
| 27 | xhamster.com | https://xhamster.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 27-xhamster-overlay.png；27-xhamster-complete.png | NSFW。未登录年龄墙「adults only」。Reload 一帧纯黑 mid gray=0，无 gray=255。未点 I'm 18 or older，未点 Cookie。 |
| 28 | twitch.tv | https://www.twitch.tv/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 28-twitch-overlay.png；28-twitch-complete.png | 深色浏览首页 + 顶部 Cookie 条。Reload r02–r04 `#121212`，随后近黑 UI。未进直播间，未点「继续 / 登录 / 注册」。Cookie 条会抢后续 Enter。Console：Twitch 遥测 `ERR_CONNECTION_CLOSED` 是站点。 |
| 29 | temu.com | https://www.temu.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 29-temu-overlay.png；29-temu-complete.png | 落地 **temu.com/bgn_verification.html** 安全验证墙（灰底白卡滑块）。Reload r03–r12 `#121212`（约 overlayMax）再墙。未滑拼图，未把地址贴进搜索框。Console：Workbox `sw.js` precache 是站点。 |
| 30 | dzen.ru | https://dzen.ru/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 30-dzen-overlay.png；30-dzen-complete.png | 直接测 dzen.ru，不是第 2 批 Yandex 跳转。浅色信息流。Reload 白空壳 mid gray=255 var=0 是浅色站，不是深站白闪。未往「Поиск Яндекса」打字。本轮无 cookie 条。Console：CSP + yandex `ERR_CONNECTION_CLOSED` 是站点。 |

## 复测

无。本批 21–30 没有可复现的深站 gray=255 空 body，也没有遮罩卡住。脚本保持 1.0.2，**不 bump、不重装**。

## 共性问题

- 以**实际首屏**为准。本批 Naver / Outlook / Bilibili / Microsoft / Temu / Dzen 仍浅；Netflix / Pornhub / xHamster / Twitch 仍深。不要拿 Similarweb「预期主题」判失败。
- 没有早期主题信号时，1.0.2 跟 `prefers-color-scheme`，先盖 `#121212`。浅色站会看到深遮罩再露浅色首屏（本批 21 / 23 / 24 / 26 / 29）。记 遮罩颜色=错色、二次闪=是；遮罩会撤就不算失败。Temu 验证墙深遮罩接近 `OVERLAY_MAX_MS` 3.2s。
- gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签 gray≈58 不是白闪。Microsoft / Dzen 的白空壳是浅色站。Netflix / xHamster reload 一帧纯黑 gray=0 是深底，不是白闪。
- 登录墙 / 年龄墙 / 验证墙只看墙：Outlook 营销墙、Pornhub / xHamster 年龄墙、Temu 安全验证。断连记跳过，不改脚本。本批全部加载出来，无跳过。
- NSFW 只测未登录首屏/年龄墙，不往下点。Bilibili 只测首页，不进分区/播放。Twitch 不进直播间。Netflix 不进播放。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 TypeError / Failed ad / Workbox / 站点自有「白屏检测」不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 点 **Helium 顶栏 URL**（桌面约 `(445, 56)` / `(409, 55)`，不是 700px 截图像素）。Esc 掉 Kagi 建议再 Enter。Cookie / 页面搜索会抢 Enter（本批 Twitch Cookie「继续」曾把 Temu 导航吞掉，改新标签后才进 Temu）。DevTools 会抢 `cmd+v`，用 `rdc type`。debugger 暂停用 F8。权限框「不允许」。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程 No throttling。浅色遮罩看不见就记 浅/无，不要为了拍遮罩开节流。测完仍是 **已停用节流模式**。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.2**。本批没有可复现的深站白闪或遮罩卡住，保持通用，不加域名黑名单，**不再 bump**。

## 给第 4 批（31–40）的规则

- 站点：Claude / VK / Canva / Weather / bet.br / xVideos / Yahoo JP News / Samsung / Stripchat / Fandom。**不要在本聊天开始第 4 批。不要测 claude.ai（属第 4 批）。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 预期主题只作对照。以实际首屏为准。系统深色时门户 / 视频 / AI 可能跟系统。
- `#121212` 再浅色 = 错色/二次闪，遮罩会撤就通过。1.0.2 在浅色 `#fff` 上深遮罩更长，常接近 overlayMax。
- gray=255 var=0 空 body 只在**深色站**算白闪失败。浅色站白空壳记 浅，不记失败。
- 登录墙 / 年龄墙 / 地区墙 / 验证墙只测墙。断连=跳过，不改脚本。bet.br 可能 DNS 失败，记跳过即可。
- NSFW（xVideos / Stripchat）只测未登录首屏/年龄墙，不往下点。
- 点 Helium 顶栏 URL，Esc Kagi，Enter；Cookie / 搜索会抢 Enter，先再点顶栏或换新标签；DevTools 抢粘贴；debugger 暂停 F8；权限框「不允许」；不要把地址打进页面搜索框。
- 先确认 No throttling。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 不要覆盖中文榜 `top-100-zh-*.md`。只回填 `top-100-results.md` 31–40。
