# Dark Mode++ 中文批次 8（71–80）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（未重装、未再核对版本）。系统深色。DevTools Disable cache 开，开测时 Network 为 **已禁用节流模式 / No throttling**，全程未改节流，测完仍保持。登录/年龄/地区/验证墙只测墙。未测第 81 名及以后。未覆盖全球榜。未测 dingtalk.com。未改测 larkoffice.com / 163.com。未开始第 9 批。

证据目录：`rdc-awf-zh-batch08/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b08`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 71 | hanime1.me | https://hanime1.me/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 71-hanime-overlay.png；71-hanime-complete.png | NSFW。**只测首页，未点进影片**（瞄准 Console 时误进过 `/watch?v=`，立刻 `cmd+left` 回首页；证据用回首页帧）。首访空标签灰底 (58,60,60) → `#121212`（gray=18 var=0）→ 深色首页墙。Reload r04 近黑 gray=20 var=0，**无 gray=255 空 body**。和 jable.tv 同类，不像 missav.ws 首访白帧。Console：GTM `ERR_CONNECTION_CLOSED` / 站点 jQuery TypeError / Cat `content ready`。 |
| 72 | on.cc | https://www.on.cc/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 72-oncc-overlay.png；72-oncc-complete.png | 东网。落地 `hk.on.cc/hk/news/index.html`。**未点新闻**。Cookie「同意及關閉」未点。首访空标签灰底后出浅色导航，主栏稍后才填新闻卡。Reload 已是浅色首页，没抓到 `#121212`、无 gray=255 空 body。Console：scorecardresearch/广告 `ERR_CONNECTION_CLOSED` / Cat。 |
| 73 | nownews.com | https://www.nownews.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 73-nownews-overlay.png；73-nownews-complete.png | NOWnews 浅色新闻首页（黑顶栏是品牌条）。**未点新闻**。Cookie 条会抢 Enter，改点顶栏后再 Enter。首访 f06 浅遮罩 gray=255 var=0（浅色站不算白闪）后出首页。Reload 已是内容，无 `#121212`。Console：GTM `ERR_CONNECTION_CLOSED` / 站点 jQuery `_headTracker` TypeError / Cat。 |
| 74 | hko.gov.hk | https://www.hko.gov.hk/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 74-hko-overlay.png；74-hko-complete.png | 香港天文台。落地 `/sc/index.html`。夜间维港头图是照片不是深色主题。**未点预报详情**，没把地址贴进「输入查询字串」。Newsletter 弹层未点。Reload r03 `#121212`（gray=18 var=0）→ r04 白底 → 浅色首页。错色二次闪，遮罩会撤。Console：gtag / Facebook / Mixed Content / Cat。 |
| 75 | tencent.com | https://www.tencent.com/ | 未知 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 75-tencent-overlay.png；75-tencent-complete.png | **实际落地 `/zh-cn/` 中文公司站，不是英文国际站。** 白底+摄影英雄图。首访 f02 `#121212` 再浅色首页。Reload 已是内容。Console：站点 `G.getContext` TypeError / GTM target not found / Cat。未点「关于我们」。 |
| 76 | feishu.cn | https://www.feishu.cn/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 76-feishu-overlay.png；76-feishu-complete.png | **测的是 feishu.cn，没有改测 larkoffice.com。** 未出整页登录墙；实际深色营销首页+「企业 AI 实战全景图」弹层，只测墙/首屏，未点「免费领取」/登录。首访灰底后出深色首屏，**无 gray=255**。Reload 全程深色。Console：CSP / 遥测 `ERR_CONNECTION_CLOSED` / Cat。 |
| 77 | huawei.com | https://www.huawei.com/ | 未知 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 77-huawei-overlay.png；77-huawei-complete.png | **实际落地 `/cn/` 中文站，不是英文国际站。** 浅色 Mate 90 营销首页。未点「了解更多」，没把地址贴进搜索。首访灰底 → `#121212` → 浅色首页。Reload 已是内容。Console：遥测 `ERR_CONNECTION_CLOSED` / Cat / 站点 JSON parse。 |
| 78 | cctv.com | https://www.cctv.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 78-cctv-overlay.png；78-cctv-complete.png | 央视网浅色首页。**未进播放页、未点直播/新闻。** 首页头图轮播不是点进播放器。首访/Reload 先 `#121212` 再浅色首页。Console：Permissions-Policy / 站点 `ERR_CONNECTION_CLOSED` / Cat。 |
| 79 | netease.com | https://www.netease.com/ | 未知 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 79-netease-overlay.png；79-netease-complete.png | **测的是 netease.com 公司站，不是 163.com。** 浅色「网易 NetEase」简介页。未点 game.163.com。Reload r02 浅遮罩 gray=255 var=0 后出正文，无 `#121212`。Console：Tencent WAF 日志 / 404 / Cat。 |
| 80 | chsi.com.cn | https://www.chsi.com.cn/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 80-chsi-overlay.png；80-chsi-complete.png | 学信网浅色政务首页，**未出登录/验证墙**。未点学籍查询/快速入口，没把地址贴进搜索。首访灰底后出浅蓝首页。Reload 已是内容，无 `#121212`、无 gray=255 空 body。Console：GTM `ERR_CONNECTION_CLOSED` / Cat。 |

## 复测

本批没有可复现的白闪失败。10/10 通过，0 失败，0 跳过。未改脚本、未 bump、未重装暴力猴。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准。本批 3 个「未知」站（tencent / huawei / netease）落地都是中文浅色公司页，不是英文国际站。feishu 预期浅色登录墙，实际深色营销首页。不要拿预期主题当失败条件。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（HKO / 腾讯 / 华为 / 央视）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败。
- 浅色遮罩在白底上几乎看不见（nownews 首访 f06、netease reload r02 的 gray=255 var=0）。gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。hanime1.me 首访空 body 是灰底再 `#121212`，没有 missav.ws 那种白帧。
- 登录/年龄/地区/验证墙只看墙：feishu 没出整页登录墙，只测了深色首页+营销弹层。学信网没出登录/验证墙，测的是政务首页。Cookie/Newsletter/「免费领取」未点。
- 点 Helium 顶栏 URL 再 `cmd+r`。命令面板「打开」旁边仍有 Kagi 搜索项，**以顶栏地址栏第一项为准**。Cookie 条会抢 Enter（东网），这时先点顶栏再导航。导航时 DevTools 会抢 `cmd+v`，用 `rdc type`。不要把地址贴进页面搜索框（HKO / 华为 / 学信网）。
- Helium 权限框点不允许。本轮未再弹出通知/本地网络/位置框。HKO 有「我的位置天气」入口，未点。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、GTM/广告、站点 TypeError/jQuery、Cat `content ready`、Tencent WAF 日志不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 不要长时间 Slow 4G。本轮 Network 开测时就是「已禁用节流模式」，全程未改。DevTools 设备模式不要开。证据图在桌面布局下拍。
- NSFW 只测首页（hanime1）。新闻/政务不要点进正文或预报详情。视频站不要进播放页（央视首页头图不是播放页）。公司站不要点进 163.com / larkoffice.com。

## 脚本改动

无。1.0.1 已在暴力猴里。本批 10/10 通过。没有可复现脚本问题，没有 bump。

## 给中文第 9 批（81–90）的规则

- 站点：dingtalk.com / xiaomi.com.cn / cnki.net / woa.com / hupu.com / gitee.com / 51job.com / autohome.com.cn / zhibo8.com / zhipin.com。不要开始第 9 批，直到本报告被接手。
- **不要测 mi.com**（国际商店常英文）。woa.com 可能跳 work.weixin.qq.com，记下落地域即可。钉钉 / 知网 / Gitee / BOSS 直聘可能是登录墙，只测墙。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 预期主题只作对照。系统深色时论坛/新闻/政务/电商仍可能跟系统，以实际首屏为准。
- 登录/年龄/地区墙只测墙。不要进新闻正文、影片、商品、招聘详情。
- 点 Helium 顶栏 URL 再 reload。命令面板「打开」可能进 Kagi 搜索，**以顶栏地址栏为准**。导航时 DevTools 会抢 `cmd+v`，先点顶栏或先关控制台，用 type。不要把地址贴进页面搜索框。Helium 通知/本地网络/位置权限框点屏蔽/不允许。Cookie 条会抢 Enter。
- 浅色站出现一帧 `#121212` 再露白底：记 错色 + 二次闪，遮罩会撤就不算失败。
- 深色 SPA 盯空 body：gray=255 var=0 **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。CF/验证墙白帧若 reload 不复现，记失败但不要急着改脚本。连不上的站记 跳过。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
