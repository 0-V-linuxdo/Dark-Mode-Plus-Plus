# Dark Mode++ 中文批次 9（81–90）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（未重装、未再核对版本）。系统深色。DevTools Disable cache 开，开测时 Network 为 **已禁用节流模式 / No throttling**，全程未改节流，测完仍保持。登录/机构/验证墙只测墙。未测第 91 名及以后。未覆盖全球榜。未测 mi.com / weixin.qq.com / 12306。未开始第 10 批。

证据目录：`../../evidence/zh/batch09/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b09`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 81 | dingtalk.com | https://www.dingtalk.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 81-dingtalk-overlay.png；81-dingtalk-complete.png | 钉钉。**未出整页登录墙**；实际浅色营销首页「AI 时代的新记录方式」，未点「下载钉钉」/「注册钉钉」。首访 f02 `#121212`（gray=18 var=0）→ 浅色首页。Reload 已是内容。Console：mmstat `ERR_CONNECTION_CLOSED` / 站点 `[API_ERROR] 日志上报失败`。 |
| 82 | xiaomi.com.cn | https://www.xiaomi.com.cn/ | 浅色 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 82-xiaomi-overlay.png；82-xiaomi-complete.png | **测的是 xiaomi.com.cn，没有测 mi.com。** Helium「无法访问此网站 / ERR_CONNECTION_CLOSED」。URL 栏导航、cmd+r、错误页「重新加载」共 3 次，站点没打开。测的是浏览器错误页。未改脚本。 |
| 83 | cnki.net | https://www.cnki.net/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 83-cnki-overlay.png；83-cnki-complete.png | 中国知网。**未出登录/机构墙**。浅色检索首页。底部 Cookie 条未点。**没把地址贴进检索框，未点论文。** 首访空标签灰底 (58,60,60) → `#121212` → 蓝首页。Reload r02 `#121212` 再浅色首页。Console：Cat `content ready`。 |
| 84 | woa.com | https://woa.com/ | 未知 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 84-woa-overlay.png；84-woa-complete.png | **落地仍是 woa.com，没有跳 work.weixin.qq.com，没有另测 weixin.qq.com。** Helium「无法访问此网站 / ERR_CONNECTION_CLOSED」。URL 栏 + cmd+r +「重新加载」共 3 次。未改脚本。 |
| 85 | hupu.com | https://www.hupu.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 85-hupu-overlay.png；85-hupu-complete.png | 浅色虎扑首页（红顶栏是品牌条）。**未点进帖/比赛**；顶栏 NBA/CBA 比分是首页模块。首访灰底 → `#121212` → 浅色资讯流。Reload 已是内容。Console：Mixed Content / Cat / 遥测 `ERR_CONNECTION_CLOSED`。 |
| 86 | gitee.com | https://gitee.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 86-gitee-overlay.png；86-gitee-complete.png | 浅色营销首页+「请输入你的手机号码」登录墙，**只测墙**。未填手机号，未点「企业免费使用」/「个人账号注册」。点的是 Helium 顶栏，没有把地址贴进手机号框。首访灰底 → 深遮罩（gray≈13 var=0）→ 浅色墙。Reload 已是内容。Console：Cat / GITEE banner / gtag `ERR_CONNECTION_CLOSED`。 |
| 87 | 51job.com | https://www.51job.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 87-51job-overlay.png；87-51job-complete.png | 浅色前程无忧首页。**未进职位详情**，没把地址贴进「请输入公司/职位」。底部 Cookie 条未点。微信码浮层未点。首访/Reload 已是浅色首页，无 `#121212`、无 gray=255 空 body。Console：wechat/radar `ERR_CONNECTION_CLOSED`。 |
| 88 | autohome.com.cn | https://www.autohome.com.cn/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 88-autohome-overlay.png；88-autohome-complete.png | 落地 `/lanyangyang/` 浅色汽车之家首页。**未进车型详情**（首页 Model Y 等入口未点）。站点「限时拆现金盲盒」弹层未点、未填手机号。首访空标签灰底后出首页。Reload 无 `#121212`。Console：Cat / 阿里云日志上报失败 / 站点 `requestId` TypeError。 |
| 89 | zhibo8.com | https://www.zhibo8.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 89-zhibo8-overlay.png；89-zhibo8-complete.png | 浅色直播吧首页。**未进直播间**；首页「足球视频」卡和底栏「文字 手机直播」都没点。首访浅遮罩 gray=248 var=0（浅色站不算白闪）后出首页。Reload 已是内容。Console：Mixed Content / Cat / webstat `ERR_CONNECTION_CLOSED`。 |
| 90 | zhipin.com | https://www.zhipin.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 90-zhipin-overlay.png；90-zhipin-complete.png | BOSS 直聘。**未出整页登录墙**；落地 `/chengshi/101190100/hesoffer-index` 浅色职位首页。**没把地址贴进「搜索职位、公司」，未点职位/登录。** 首访灰底 → `#121212` → 浅色首页。Reload x02 `#121212` → x03 浅骨架 gray=244 → 浅色首页。Helium 在直聘首屏停留数秒后会退回上一站，测的是直聘墙/首屏不是直播吧。Console：Cat / WebSocket / `ERR_CONNECTION_CLOSED`。 |

## 复测

本批没有可复现的白闪失败。xiaomi.com.cn / woa.com 三次都是 `ERR_CONNECTION_CLOSED`，记跳过，不 bump、不重装暴力猴。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准。钉钉/知网/BOSS 直聘预期登录墙，实际是浅色营销或职位首页。不要拿预期主题当失败条件。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（钉钉 / 知网 / 虎扑 / Gitee / 直聘）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败。
- 浅色遮罩在白底上几乎看不见（直播吧首访 gray=248 var=0；直聘 reload 浅骨架 gray=244 var=0）。gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。
- 连不上的站记 跳过：xiaomi.com.cn / woa.com 三次 `ERR_CONNECTION_CLOSED`，和 wantgoo / cmoney 同类。不要改脚本、不要加域名黑名单、不要改测 mi.com / weixin.qq.com。
- 登录/机构墙只看墙：Gitee 是手机号登录墙；钉钉/知网/直聘没出整页墙。Cookie/「下载」「注册」「拆盲盒」未点。
- 点 Helium 顶栏 URL 再 `cmd+r`。命令面板「打开」可能进 Kagi 搜索，**以顶栏地址栏第一项为准**。Cookie 条会抢 Enter（知网 / 前程无忧）。导航时 DevTools 会抢 `cmd+v`，用 `rdc type`。不要把地址贴进页面搜索框（知网 / Gitee 手机号 / 前程无忧 / 汽车之家 / 直聘）。
- Helium 从直聘首屏会在数秒后退回上一标签（直播吧）。这是浏览器导航/预览行为，不是脚本遮罩。证据用仍停在 `zhipin.com` 的帧。
- Helium 权限框点不允许。本轮未再弹出通知/本地网络/位置框。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、GTM/广告、站点 TypeError/API_ERROR、Cat `content ready`、Mixed Content、WebSocket 失败不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 不要长时间 Slow 4G。本轮 Network 开测时就是「已禁用节流模式」，全程未改。DevTools 设备模式不要开。证据图在桌面布局下拍。
- 社区/招聘/汽车/直播不要点进帖、职位详情、车型详情、直播间。首页模块（虎扑比分、直播吧视频卡、汽车之家车入口）不是点进详情。

## 脚本改动

无。1.0.1 已在暴力猴里。本批 8/10 通过，0 失败，2 跳过。没有可复现脚本问题，没有 bump。

## 给中文第 10 批（91–100）的规则

- 站点：12306.cn / quark.cn / v2ex.com / qidian.com / juejin.cn / xueqiu.com / gamersky.com / zaobao.com.sg / goofish.com / fanqienovel.com。不要开始第 10 批，直到本报告被接手。
- **不要在本批之外提前测 12306。** 12306 高峰可能慢/验证码，验证墙只测墙。quark 可能偏 App/营销页。v2ex / 起点 / 雪球 / 闲鱼 / 番茄可能是登录墙，只测墙。闲鱼可能跳 App。联合早报总部新加坡，默认中文界面所以收录。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 预期主题只作对照。系统深色时论坛/新闻/政务/电商仍可能跟系统，以实际首屏为准。
- 登录/年龄/地区/验证墙只测墙。不要进小说章节、新闻正文、股票帖、游戏专题、商品详情。
- 点 Helium 顶栏 URL 再 reload。命令面板「打开」可能进 Kagi 搜索，**以顶栏地址栏为准**。导航时 DevTools 会抢 `cmd+v`，先点顶栏或先关控制台，用 type。不要把地址贴进页面搜索框（12306 / 夸克 / 起点 / 雪球 / 游民 / 闲鱼 / 番茄）。Helium 通知/本地网络/位置权限框点屏蔽/不允许。Cookie 条会抢 Enter。
- 浅色站出现一帧 `#121212` 再露白底：记 错色 + 二次闪，遮罩会撤就不算失败。
- 深色 SPA 盯空 body：gray=255 var=0 **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。CF/验证墙白帧若 reload 不复现，记失败但不要急着改脚本。连不上的站记 跳过。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
