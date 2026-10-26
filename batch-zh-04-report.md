# Dark Mode++ 中文批次 4（31–40）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（28k，已启用，未重装）。系统深色。DevTools Disable cache 开，**No throttling / 已禁用节流模式**（测完仍是 No throttling）。登录墙只测未登录首屏。未测第 41 名及以后。未覆盖全球榜。

证据目录：`rdc-awf-zh-batch04/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b04`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | pinduoduo.com | https://www.pinduoduo.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 31-pinduoduo-overlay.png；31-pinduoduo-complete.png | 未整页跳 App。浅色橙白营销首页 +「立即下载」/「下载APP」。Reload r01 白底 mid gray=250 var=0 浅遮罩，r02 已是粉红首页。未点下载。不要测 yangkeduo.com。Console：preload credentials / Cat `content_ready` / prerender `a-prefetch-js`。 |
| 32 | hk01.com | https://www.hk01.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 32-hk01-overlay.png；32-hk01-complete.png | 浅色香港01。夜间街景头图是新闻照片，不是深色主题。有「登入」按钮不是整页墙。推送框点了「我再想想」。Reload 18 帧已是内容，无 `#121212`、无 gray=255 空 body。Console：站点 Next.js `scpUrl` / Swiper / Meta pixel / Playwright，不是脚本。未点新闻/登入。 |
| 33 | ettoday.net | https://www.ettoday.net/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 33-ettoday-overlay.png；33-ettoday-complete.png | 浅色 ETtoday 新闻云。首访 Helium 空标签灰底 (58,60,60) 后出内容。Reload r03–r10 整页 `#121212`（gray≈18.6, mid=18 var=0），r12 起浅色首页。深遮罩盖浅色站，随后撤。未点新闻 / YouTube 卡。Console：站点 prebid / Facebook pixel / Permissions-Policy。 |
| 34 | mobile01.com | https://www.mobile01.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 34-mobile01-overlay.png；34-mobile01-complete.png | 预期浅色论坛，Helium 系统深色下实际深色首页。首访 load1 `#121212` 后出深色帖列表/广告位。底部 Cookie 条未点。有「登入」不是整页墙。Reload 18 帧无 gray=255。Console：遥测 `ERR_CONNECTION_CLOSED`、ServiceWorker 注册失败，是站点。 |
| 35 | ctrip.com | https://www.ctrip.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 35-ctrip-overlay.png；35-ctrip-complete.png | **测的是 ctrip.com，不是 trip.com**。浅色「预订酒店」首页。位置权限点了「一律不允许」。右上登录/注册是链接不是整页墙。Reload r01 白底 mid gray=255 var=0 浅遮罩后出内容。未点搜索/免费注册。Console：`webresource.c-ctrip.com ERR_CONNECTION_CLOSED`。 |
| 36 | youku.com | https://www.youku.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 36-youku-overlay.png；36-youku-complete.png | 预期浅色，系统深色下是深色点播首页。**未进播放页**。「立即观看」是首页海报，不是播放器。Reload 20 帧全程 gray≈49–59，无 gray=255。有登录/注册入口不是整页墙。Console：`youkuerror` / `video.un.timeout` / 遥测，不是脚本。 |
| 37 | 360.cn | https://www.360.cn/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 37-360cn-overlay.png；37-360cn-complete.png | **测的是 360.cn，不是 360.com**。浅色 360 安全卫士「让您的 Mac 极速如新」。Reload 18 帧已是青绿首页，无 `#121212`、无空 body。未点立即体验 / App Store。Console：Mixed Content 升级警告、遥测 `ERR_CONNECTION_CLOSED`。 |
| 38 | sogou.com | https://www.sogou.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 38-sogou-overlay.png；38-sogou-complete.png | 浅色搜狗搜索首页。点 Helium 顶栏/omnibox 再 reload，**没有把地址贴进页面搜索框**。Reload r01 白底 mid gray=255 var=0 浅遮罩后出首页。Console：Cat / 遥测 `ERR_CONNECTION_CLOSED`。 |
| 39 | meituan.com | https://www.meituan.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 39-meituan-overlay.png；39-meituan-complete.png | 浅色企业官网「美团是一家科技零售公司」，不是外卖 App 页。底部 Cookie 偏好条未点接受/拒绝。有「下载美团App」未点。Reload 已是内容，无 `#121212`。Console：`apple-mobile-web-app-capable` 弃用、遥测 `ERR_CONNECTION_CLOSED`。 |
| 40 | kuaishou.com | https://www.kuaishou.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 40-kuaishou-overlay.png；40-kuaishou-complete.png | **本批 SPA 深色对照**。落地 `kuaishou.com/new-reco` 深色信息流。首访连拍：f01 Helium 空标签灰底 (58,60,60) **不是 gray=255**；f04 深色壳 +「立即登录」卡片；随后视频流。Reload 20 帧无白空 body。1.0.1 `hasSubstantialContent()` 有效。侧栏登录卡片和后来的扫码墙只测墙，未点登录。首页视频流不是点进播放页。Network **已禁用节流模式**。Console 抽屉可见站点 `ERR_CONNECTION_CLOSED`。 |

## 复测

无失败站，**没有改** `anti-white-flash.user.js`，没有 bump，没有重新粘贴暴力猴。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准：名单写浅色的站，系统深色下 Mobile01 / 优酷跟系统变深。不要拿预期主题当失败条件。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（ETtoday）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败（同批次 3 凤凰/新浪.com.cn/联合新闻网）。
- 浅色遮罩在白底上几乎看不见（拼多多 r01、携程 r01、搜狗 r01；香港01 / 360.cn / 美团没抓到纯色帧）。要用 gray/var，不要只靠肉眼。gray=255 var=0 空 body **且** 深色站才算白闪失败。
- SPA：快手首访 Helium 空标签是灰底 (58,60,60)，随后深色壳，**没有 gray=255 空 body**。1.0.1 有效。Helium 空标签灰底不是 TikTok 那种白闪。
- 登录墙只看墙：快手侧栏「立即登录」和后来的扫码弹层。香港01 / Mobile01 / 携程 / 优酷只有登录入口。Cookie 条（Mobile01 / 美团）不是登录墙，未点。
- 拼多多是营销首页+下载 CTA，不是整页跳 App。优酷测的是首页点播台，不要进播放页。快手首页信息流自带视频，也不要点进去。
- 测 `ctrip.com`，不要测 trip.com。测 `360.cn`，不要测 360.com。不要测 yangkeduo.com。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 Next.js/Swiper/prebid/Facebook/Playwright/youkuerror 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 必须点 **Helium 顶栏 URL** 再 `cmd+r`。导航用 `cmd+t` omnibox 粘贴，DevTools 开着时 `cmd+v` 会被控制台抢走，测导航可先关 DevTools。不要把地址贴进页面搜索框（搜狗）或对话/登录框。Cat 侧栏搜索也会抢 `cmd+l`。
- Helium 位置权限点「一律不允许」（携程）。站点通知点「我再想想」（香港01）。本地网络权限框点「不允许」（本轮未再弹出）。
- 不要长时间 Slow 4G。浅色遮罩抓不到就记 浅/无，不要为了拍遮罩开节流。测完保持 No throttling。本轮 Network 一直是「已禁用节流模式」。
- DevTools 设备模式（Responsive）不要开。本轮一直是桌面布局。

## 脚本改动

无。1.0.1 已在暴力猴里，本批 10/10 通过，没有可复现的空 body 白闪需要再改通用逻辑。快手深色 SPA 对照通过。

## 给中文第 5 批（41–50）的规则

- 站点：chat.qwen.ai / missav.ws / so.com / douyu.com / missav.ai / missav.live / 104.com.tw / bbs.nga.cn / huya.com / shopee.tw。不要开始第 5 批，直到本报告被接手。
- missav.* 是 NSFW，三个域名分开测，不要互相跳。shopee.tw 不要测 shopee.com。so.com 是 360 搜索，不要和 360.cn 搞混。nga 测 `bbs.nga.cn`。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局（不要 Responsive 设备模式）。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回；浅色遮罩看不见不算失败。
- 预期主题只作对照。系统深色时 AI/直播/成人/招聘/论坛仍可能跟系统，以实际首屏为准。斗鱼 / 虎牙 / missav 名单偏深。
- 登录墙只测墙。Qwen 可能登录墙。直播站不要进播放间。
- 点 Helium 顶栏 URL 再 reload。导航时 DevTools 会抢 `cmd+v`，先点顶栏或先关控制台。不要把地址贴进页面搜索框。Helium 通知/本地网络/位置权限框点屏蔽/不允许。
- 浅色站出现一帧 `#121212` 再露白底：记 错色 + 二次闪，遮罩会撤就不算失败。
- 深色 SPA 盯空 body：gray=255 var=0 **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
