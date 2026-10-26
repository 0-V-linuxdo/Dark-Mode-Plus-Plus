# Dark Mode++ 深色系统 · 浅色首屏复测批次 11（L101–L110）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；开测时 Network 面板在右侧、瀑布流可见、无 Slow 4G。登录墙 / Cookie / 验证墙只测墙，未登录。未测 L100 及以前，未开批次 12。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 hk.on.cc，先 Esc 关掉东网权限框（不允许）。

证据目录：`../../evidence/dark-retest/b11/`。连拍只写 `/tmp/g-dl-b11`，用 `/tmp/g-dl-b11/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 101 | nownews.com | https://www.nownews.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 101-nownews-overlay.png；101-nownews-complete.png | 浅色 NOWnews 今日新聞首页。未点新闻。没把地址贴进搜索。连拍没抓到 `#121212`。站点 debugger 暂停，F8 后撤。 |
| 102 | hko.gov.hk | https://www.hko.gov.hk/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 102-hko-overlay.png；102-hko-complete.png | 落地 `/sc/index.html`。夜间维港头图是照片不是深色主题。Newsletter「天气预报员」未点。未点预报详情，没把地址贴进查询。f01 白空壳再内容，没抓到 `#121212`。 |
| 103 | tencent.com | https://www.tencent.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 103-tencent-overlay.png；103-tencent-complete.png | **本次落地英文公司站，没有跳 `/zh-cn/`。** 白底+摄影「We build technologies that create the future」。未点 Who we are。debugger 暂停 F8。没抓到 `#121212`。 |
| 104 | huawei.com | https://www.huawei.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 104-huawei-overlay.png；104-huawei-complete.png | **实际落地 `/cn/` 中文站，不是英文国际站。** 浅色 Mate 90 Pro Max。未点「了解更多」，没把地址贴进搜索。debugger 暂停 F8。f01 白空壳再内容，没抓到 `#121212`。 |
| 105 | cctv.com | https://www.cctv.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 105-cctv-overlay.png；105-cctv-complete.png | 浅色央视网首页。未进播放页、未点直播/新闻。首页头图轮播不是点进播放器。没抓到 `#121212`。 |
| 106 | netease.com | https://www.netease.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 106-netease-overlay.png；106-netease-complete.png | **测的是 netease.com 公司站，不是 163.com。** 浅色「网易 NetEase」简介页。未点 game.163.com。没抓到 `#121212`。 |
| 107 | chsi.com.cn | https://www.chsi.com.cn/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 107-chsi-overlay.png；107-chsi-complete.png | 学信网浅色政务首页，**未出登录/验证墙**。未点学籍查询/快速入口，没把地址贴进搜索。没抓到 `#121212`。 |
| 108 | dingtalk.com | https://www.dingtalk.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 108-dingtalk-overlay.png；108-dingtalk-complete.png | **未出整页登录墙**；浅色营销「AI 时代的新协作方式」。未点「下载钉钉」/「注册钉钉」。没抓到 `#121212`。 |
| 109 | cnki.net | https://www.cnki.net/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 109-cnki-overlay.png；109-cnki-complete.png | **未出登录/机构墙**。浅色知网检索首页。没把地址贴进检索框，未点论文。Cookie 本次未见条。没抓到 `#121212`。 |
| 110 | hupu.com | https://www.hupu.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 110-hupu-overlay.png；110-hupu-complete.png | 浅色虎扑首页（红顶栏是品牌条）。**未点进帖/比赛**；顶栏 NBA/CBA 比分是首页模块。没抓到 `#121212`。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳记 浅，**不算误跳过，也不算深站白闪**。天文台 / 华为白空壳再内容；NOWnews / 腾讯 / 央视 / 网易公司站 / 学信网 / 钉钉 / 知网 / 虎扑已出浅色内容。都是浅色站。
- 原测天文台 / 腾讯 / 华为 / 央视 / 钉钉 / 知网 / 虎扑是错色（先 `#121212` 再浅）。本批连拍都没抓到深遮罩，按单站抓不到记 浅，通过。不改脚本。
- 登录/验证墙只测墙：学信网 / 钉钉 / 知网本次都不是整页登录墙。钉钉顶栏有下载/注册未点。知网检索框未打字。
- Magpie 本批没挡页面。东网权限框 Esc 关掉，不允许。天文台 Newsletter 未点。权限框不允许。
- Console / 站点遥测 / `ERR_CONNECTION_CLOSED` / debugger 暂停不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 本批全程未改节流。开测 Network 在右侧可见、无 Slow 4G。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- 测的是 netease.com 公司站，不要另测 163.com。腾讯本次落地英文站，不要改测 `/zh-cn/`。华为落地 `/cn/`。天文台落地 `/sc/index.html`。
- 多站 debugger 暂停冻住首屏，F8 后撤，不记卡住。
- Cat 侧栏仍在，会抢 `cmd+l`。点 Helium 标签再 `cmd+l`，Kagi 点地球（站点项 / `https://…`）再 Enter，不要点「Kagi 搜索」。不要把地址打进页面搜索框。
- 导航下一站时不要点页面内容。新闻站不要点正文，天文台不要点预报，华为不要点了解更多，钉钉不要点下载/注册，知网不要进论文，虎扑不要进帖。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。天文台 / 腾讯 / 华为 / 央视 / 钉钉 / 知网 / 虎扑没抓到 `#121212` 不改脚本。

## 给批次 12 的规则

- 站点按 `dark-retest-light-sites.md` L111–L120。**不要在本聊天开始批次 12。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。Magpie 挡页面就关。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
