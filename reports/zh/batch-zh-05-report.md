# Dark Mode++ 中文批次 5（41–50）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（28k，已启用，未重装）。系统深色。DevTools Disable cache 开，**No throttling / 已禁用节流模式**（测完仍是 No throttling）。登录墙只测未登录首屏。未测第 51 名及以后。未覆盖全球榜。

证据目录：`../../evidence/zh/batch05/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b05`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 41 | chat.qwen.ai | https://chat.qwen.ai/ | 未知 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 41-qwen-overlay.png；41-qwen-complete.png | 未出整页登录墙，右上仅「登录/注册」。深色聊天 UI「有什么可以帮你的吗？」。首访 Helium 空标签灰底 (58,60,60) → `#121212` → 深色首屏。Reload 20 帧无 gray=255。未把地址贴进对话框。Console：Cat `content ready` / `ERR_CONNECTION_CLOSED`。 |
| 42 | missav.ws | https://missav.ws/ | 深色 | 深色 | 是 | 深 | 否 | 是 | 否 | 否 | 失败 | 42-missav-ws-overlay.png；42-missav-ws-complete.png | NSFW。**三个 missav 域名分开测，没有互跳**。落地 `missav.ws/en-US/dm26/en`。首访：空标签灰底 → `#121212` → **gray=255 var=0 空 body** → 深色 CF「正在进行安全验证」→ 深色首页。Reload 22 帧 `#121212` 后深色首页，**无白帧**。复现不稳，未改脚本。未点影片/站内搜索。 |
| 43 | so.com | https://www.so.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 43-so-overlay.png；43-so-complete.png | **测的是 so.com 360搜索，不是 360.cn**。浅色「360搜索」首页。点 Helium 顶栏/omnibox，**没有把地址贴进页面搜索框**。首访 r/f02–f03 `#121212`（gray=18 var=0）再浅色首页。深遮罩盖浅色站，随后撤。Console：`s.360kuai.com` / `show-s.mediav.com ERR_CONNECTION_CLOSED`。 |
| 44 | douyu.com | https://www.douyu.com/ | 深色 | 混合 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 44-douyu-overlay.png；44-douyu-complete.png | **未点「为你推荐」进播放间**。落地主题首页带大窗播放器 + 浅色推荐卡。首访/Reload 都有 wash-white 空帧 mid gray=247 var=0，**不是 gray=255**。有登录入口不是整页墙。Console：直播 CDN / WebSocket `ERR_CONNECTION_CLOSED`、站点 TypeError，不是脚本。 |
| 45 | missav.ai | https://missav.ai/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 45-missav-ai-overlay.png；45-missav-ai-complete.png | NSFW。**测的是 missav.ai，没有跳 .ws/.live**。落地 `missav.ai/dm26/en`。首访空标签灰底 → `#121212` → 深色 CF「missav.ai 正在进行安全验证」→ 深色首页。Reload 无 gray=255。Console：遥测 `ERR_CONNECTION_CLOSED` / Cat。 |
| 46 | missav.live | https://missav.live/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 46-missav-live-overlay.png；46-missav-live-complete.png | NSFW。**测的是 missav.live，没有跳 .ws/.ai**。落地 `missav.live/dm26/en`。首访空标签灰底 → 深遮罩（gray≈24）→ 深色首页。Reload 无 gray=255。未点影片。 |
| 47 | 104.com.tw | https://www.104.com.tw/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 47-104-overlay.png；47-104-complete.png | 浅色 104 人力银行。有「登入/企業徵才」不是整页墙。点的是 Helium 顶栏，没有把地址贴进职位搜索框。Reload r03–r04 白底 mid gray=255 var=0 浅遮罩后出内容。 |
| 48 | nga.cn | https://bbs.nga.cn/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 48-nga-overlay.png；48-nga-complete.png | **测的是 bbs.nga.cn**。落地 `/nuke.php` 浅米色分区首页，夜间头图是照片不是深色主题。有「登录/注册」不是整页墙。未点版块/帖。首访 wash-white 浅遮罩后出内容。 |
| 49 | huya.com | https://www.huya.com/ | 深色 | 混合 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 49-huya-overlay.png；49-huya-complete.png | **未点推荐卡/「立即观赛」进播放间**。虎牙首页大窗 + 浅色分区。首访 wash-white gray=247 **不是 255**；Reload r01 `#121212` 后混合首屏。无 gray=255 空 body。有登录入口不是整页墙。 |
| 50 | shopee.tw | https://shopee.tw/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 50-shopee-tw-overlay.png；50-shopee-tw-complete.png | **测的是 shopee.tw，不是 shopee.com**。落地 `/verify/captcha…` 浅色「安全性驗證 / 選擇語言」墙，只测墙，未点繁體中文/English。Reload r04 洗白骨架 gray=245 var=0 浅遮罩后出墙。 |

## 复测

missav.ws 首访出现过 gray=255 var=0 空 body，但 **reload 不复现**（22 帧全程深色）。missav.ai / missav.live 首访+reload 都没有白空 body。按调度：**复现不稳 → 记失败+证据，不改脚本、不 bump、不重装暴力猴**。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准：名单写深色的斗鱼/虎牙，首页其实是大窗播放器 + 浅色推荐卡，记 混合。不要拿预期主题当失败条件。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（360搜索 so.com）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败。
- 浅色遮罩在白底上几乎看不见（104 r03、虾皮 r04、NGA 首访 wash-white）。要用 gray/var。gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。
- missav.ws 首访 CF 验证前抓到一帧白空 body，reload 与另外两个 missav 域名都不复现。不要为此加域名黑名单。
- 直播站首页自带大窗，**不要点进播放间**。斗鱼落地 `/topic/…`、虎牙仍是 `huya.com` 首页。快手/优酷同理：首页播放器不是进房。
- 登录/验证墙只看墙：Qwen 只有登录按钮；虾皮是验证+选语言墙。Cookie/语言按钮未点。
- 三个 missav 域名必须新标签分开打开，不要点站内「More sites」互跳。so.com 是 360 搜索，不要和 360.cn 搞混。测 `bbs.nga.cn`。测 `shopee.tw`，不要测 shopee.com。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、直播 CDN/WebSocket、站点 TypeError、Cat `content ready` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 必须点 **Helium 顶栏 URL** 再 `cmd+r`。导航用 `cmd+t` 后 **type 进新标签 overlay**（DevTools 开着时 `cmd+v` 会被控制台抢走，可先关 DevTools）。不要把地址贴进页面搜索框（360搜索 / 104 / missav / 虾皮）或 Qwen 对话框。Cat 侧栏搜索也会抢焦点。
- Helium 权限框点不允许。本轮未再弹出位置/通知/本地网络框。
- 不要长时间 Slow 4G。浅色遮罩抓不到就记 浅/无。测完保持 No throttling。本轮 Network 一直是「已禁用节流模式」。
- DevTools 设备模式（Responsive）不要开。本轮一直是桌面布局。

## 脚本改动

无。1.0.1 已在暴力猴里。missav.ws 白闪复现不稳，没有改通用逻辑，没有 bump。本批 9/10 通过，1 失败。

## 给中文第 6 批（51–60）的规则

- 站点：ptt.cc / dcard.tw / momoshop.com.tw / setn.com / hkjc.com / ltn.com.tw / stheadline.com / jable.tv / wantgoo.com / cwa.gov.tw。不要开始第 6 批，直到本报告被接手。
- jable.tv 是 NSFW。hkjc 是博彩，可能地区限制。PTT 可能年龄/警告墙。Dcard 可能登录墙。TVBS 不要另测 news.tvbs.com.tw（那是第 7 批）。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 预期主题只作对照。系统深色时论坛/新闻/政务/博彩仍可能跟系统，以实际首屏为准。
- 登录/年龄/地区墙只测墙。不要进 PTT 文章、Dcard 帖、momo 商品、赛马投注页。
- 点 Helium 顶栏 URL 再 reload。导航时 DevTools 会抢 `cmd+v`，先点顶栏或先关控制台，**用 type 进新标签 overlay**。不要把地址贴进页面搜索框。Helium 通知/本地网络/位置权限框点屏蔽/不允许。
- 浅色站出现一帧 `#121212` 再露白底：记 错色 + 二次闪，遮罩会撤就不算失败。
- 深色 SPA 盯空 body：gray=255 var=0 **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。CF/验证墙白帧若 reload 不复现，记失败但不要急着改脚本。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
