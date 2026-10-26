# Dark Mode++ 中文批次 2（11–20）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（28k，已启用，未重装）。系统深色。DevTools Disable cache 开，**No throttling**（测完仍是 No throttling）。登录墙只测未登录首屏。未测第 21 名及以后。未覆盖全球榜。

证据目录：`../../evidence/zh/batch02/`。11–16 用中断前已有 PNG + ImageStat（gray/var），不重测。17 豆瓣必须重测（上次连拍 12 帧完全一样，刷新没打上）。18–20 本轮实机。连拍只写 `/tmp/zh-b02`。17–20 证据图 `--max 700`。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | doubao.com | https://www.doubao.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 11-doubao-overlay.png；11-doubao-complete.png | 落地 `doubao.com/chat/`。Overlay 整页白底 center gray=255 var=0，是浅色遮罩/空壳，不是深站白闪。完成后浅色对话首页「有什么我能帮你的吗?」，仅有登录按钮，不是整页登录墙。Console：CSP report-only、`mssdk.bytedance.com ERR_CONNECTION_CLOSED`。 |
| 12 | 163.com | https://www.163.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 12-163-overlay.png；12-163-complete.png | 网易门户浅色首页。Overlay 已是渲染后的白底门户（page gray≈205），没抓到 `#121212`。Console：`antanalysis` fetch 失败、`h5.analytics.126.net ERR_CONNECTION_CLOSED`。上一轮误把地址贴进豆包输入框，本行测的是 163 首页；complete 里 Cat 侧栏仍留着 doubao 搜索，不影响页面。 |
| 13 | jd.com | https://www.jd.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 13-jd-overlay.png；13-jd-complete.png | Overlay 浅色骨架（搜索框+类目，center gray≈249）。完成后红底首页 + 扫码登录弹层，按登录墙只测墙。Console：`jsonpLogin` / `Invalid URL`、`sgm-w.jd.com ERR_CONNECTION_CLOSED`，是站点脚本。 |
| 14 | tmall.com | https://www.tmall.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 14-tmall-overlay.png；14-tmall-complete.png | 未出登录墙。橙红浅色天猫首页。Overlay 已有顶栏/类目，下部卡片骨架；随后补全商品图。没抓到深遮罩。Console：`gm.mmstat.com ERR_CONNECTION_CLOSED`。 |
| 15 | gamer.com.tw | https://www.gamer.com.tw/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 15-gamer-overlay.png；15-gamer-complete.png | 巴哈浅色骨架（气球顶栏 + 註冊/登入，center gray≈230 var≈22）。完成后是 30 周年闪屏「進入巴哈姆特」。Mini 可能已登录，**未点菜单**。Console：GTM / doubleclick `ERR_CONNECTION_CLOSED`、站点 preload 警告。 |
| 16 | eastmoney.com | https://www.eastmoney.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 16-eastmoney-overlay.png；16-eastmoney-complete.png | Overlay 整页 `#121212`（center gray=18 var=0），随后浅色财经首页 + 短信登录弹层。系统深遮罩盖浅色站，一帧后撤走，不算空 body 白闪。Console：`same.eastmoney.com ERR_CONNECTION_CLOSED`、Cat `content ready`。 |
| 17 | douban.com | https://www.douban.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 17-douban-overlay.png；17-douban-complete.png | **本轮重测**。先点 Helium 顶栏 URL 再 `cmd+r`，刷新打上了（Network 0/11 → 9/179）。16 帧 page gray≈221–233，全是浅色首页+右侧登录条，浅色遮罩在白底上看不见。不点登录。Console：`erebor.douban.com` / `ssl.google-analytics.com ERR_CONNECTION_CLOSED`、站点 `Error while trying to access the URL`。测完仍是 No throttling。 |
| 18 | sohu.com | https://www.sohu.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 18-sohu-overlay.png；18-sohu-complete.png | 搜狐浅色门户（黄 logo）。连拍 r01 已是浅色首页（0/1 请求），r03 起瀑布加载，page gray≈190–216，无 `#121212`、无 gray=255 空 body。Console：`track.sohu.com ERR_CONNECTION_CLOSED`。 |
| 19 | hao123.com | https://www.hao123.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 19-hao123-overlay.png；19-hao123-complete.png | 浅色导航（百度搜索框+站点宫格）。Reload r02 洗白骨架 center gray≈243 var≈664，浅色遮罩淡出，不是空 body。未点大图广告。Console：`wn.pos.baidu.com ERR_CONNECTION_CLOSED`。 |
| 20 | 1688.com | https://www.1688.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 20-1688-overlay.png；20-1688-complete.png | **测的是 1688.com，不是 alibaba.com**。浅色批发首页。Reload r02 白骨架+顶栏有少量 `#121212` 像素（约 8%），随后彩色首屏；不是整页空 body。有「已切换至中国大陆站点」提示，未点登录。Console：`log.mmstat.com` / `aliyuncs.com ERR_CONNECTION_CLOSED`。 |

## 复测

无失败站，**没有改** `anti-white-flash.user.js`，没有 bump，没有重新粘贴暴力猴。豆瓣只重测了刷新连拍，脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准：11–20 在 Helium 系统深色下仍全是浅色中文门户/电商/AI，没有跟系统变深。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（本批明确抓到的是东方财富）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败。
- 浅色遮罩在白底上几乎看不见（豆包白帧、豆瓣 16 帧全浅、搜狐/hao123/1688 骨架）。要用 gray/var，不要只靠肉眼。gray=255 var=0 空 body **且** 深色站才算白闪失败。
- SPA：豆包 overlay 是白空壳，随后浅色聊天 UI 出来了，遮罩没提前撤成深站白闪。
- 登录墙只看墙：京东扫码弹层、东方财富短信登录、豆瓣右侧登录条。不要点进去。巴哈周年闪屏是站点首屏，不是遮罩卡住。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 jsonp/Invalid URL、preload 警告不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 必须点 **Helium 顶栏 URL** 再 `cmd+r`。不要 `cmd+l` 后往页面输入框粘贴（上一轮把 163 贴进豆包对话框）。Cat 侧栏搜索也会抢粘贴。
- 不要点首页大图/活动位。hao123 渔场广告、巴哈周年闪屏都别点。
- Helium 可能弹出「查找本地网络设备」，点「不允许」。本轮未再弹出。
- 不要长时间 Slow 4G。浅色遮罩抓不到就记 浅，不要为了拍遮罩开节流。测完保持 No throttling。
- DevTools 设备模式（Responsive）会把首屏收成窄栏，误开会污染证据；`cmd+shift+m` 关掉。豆瓣完成图是关设备模式后的桌面首屏。

## 脚本改动

无。1.0.1 已在暴力猴里，本批 10/10 通过，没有可复现的空 body 白闪需要再改通用逻辑。

## 给中文第 3 批（21–30）的规则

- 站点：支付宝 / 阿里云 / 头条 / 凤凰 / 爱奇艺 / 连登 / 新浪.com.cn / 联合新闻网 / CSDN / Kimi。不要开始第 3 批，直到本报告被接手。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局（不要 Responsive 设备模式）。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回；浅色遮罩看不见不算失败。
- 预期主题只作对照。系统深色时门户/视频/AI 仍可能跟系统，以实际首屏为准。
- 登录墙只测墙（支付宝几乎肯定是墙；爱奇艺营销页偏浅，播放页另测）。连登可能登录墙。
- 测 `sina.com.cn`，不要测 sina.com。CSDN / Kimi 可能登录墙。
- 点 Helium 顶栏 URL 再 reload，不要把地址贴进页面搜索框。Helium 本地网络权限框点不允许。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
