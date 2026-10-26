# Dark Mode++ 深色系统 · 浅色首屏复测批次 8（L071–L080）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；测完 Network 下拉是「已停用节流模式」，**No throttling / 无节流**。登录墙 / Cookie / 验证墙只测墙，未登录。未测 L070 及以前，未开批次 9。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 so.com。

证据目录：`rdc-awf-dark-light-b08/`。连拍只写 `/tmp/g-dl-b08`，用 `/tmp/g-dl-b08/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 71 | udn.com | https://udn.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 71-udn-overlay.png；71-udn-complete.png | 浅色联合新闻网。Magpie 剪贴板点了一律不允许。连拍+reload 都没抓到 `#121212`。未点新闻。 |
| 72 | csdn.net | https://www.csdn.net/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 72-csdn-overlay.png；72-csdn-complete.png | 浅色 CSDN 社区首页，顶栏有登录不是整页墙。没抓到 `#121212`。未点登录，未往搜索框打字。 |
| 73 | pinduoduo.com | https://www.pinduoduo.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 73-pinduoduo-overlay.png；73-pinduoduo-complete.png | 登录墙只测墙。这次不是整页登录墙，浅色「拼多多 新电商开创者」营销首页+立即下载。白空壳再粉红首页，没抓到 `#121212`。未点立即下载。 |
| 74 | hk01.com | https://www.hk01.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 74-hk01-overlay.png；74-hk01-complete.png | 浅色香港01首页。头图是广告照片不是深色主题。没抓到 `#121212`。未点新闻/登入。本次无通知框。 |
| 75 | ettoday.net | https://www.ettoday.net/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 75-ettoday-overlay.png；75-ettoday-complete.png | 浅色 ETtoday 新闻云。白空壳再内容，没抓到 `#121212`。未点新闻/YouTube 卡。 |
| 76 | ctrip.com | https://www.ctrip.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 76-ctrip-overlay.png；76-ctrip-complete.png | 测的是 **ctrip.com**，不是 trip.com。浅色酒店预订首页。本次无位置权限框。没抓到 `#121212`。未往搜索框打字，未点登录。 |
| 77 | 360.cn | https://www.360.cn/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 77-360cn-overlay.png；77-360cn-complete.png | 测的是 **360.cn** 营销站，不是 so.com。浅色 360 安全中心。站点 debugger 暂停，不是脚本卡住。白空壳再青绿首页，没抓到 `#121212`。未往 360搜索 打字。 |
| 78 | sogou.com | https://www.sogou.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 78-sogou-overlay.png；78-sogou-complete.png | 浅色搜狗搜索首页。没抓到 `#121212`。未往搜索框打字。 |
| 79 | meituan.com | https://www.meituan.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 79-meituan-overlay.png；79-meituan-complete.png | 浅色企业官网「美团是一家科技零售公司」，不是 App 外卖页。底部 Cookie 条未点接受/拒绝。没抓到 `#121212`。 |
| 80 | so.com | https://www.so.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 80-so-overlay.png；80-so-complete.png | 测的是 **so.com** 360搜索，不是 360.cn。浅色搜索首页。没抓到 `#121212`。未往搜索框打字。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳记 浅，**不算误跳过，也不算深站白闪**。拼多多 / ETtoday / 360.cn / 搜狗白空壳 mid=255、联合新闻网/CSDN/香港01/携程/美团/360搜索已出浅色内容，都是浅色站。
- 原测 udn / ettoday / so.com 是错色（先 `#121212` 再浅）。本批连拍（udn 加了 reload）都没抓到深遮罩，按单站抓不到记 浅，通过。不改脚本。
- 登录墙只测墙：拼多多这次出的是营销首页+立即下载，未点。CSDN 顶栏登录未点。携程登录未点。
- 360.cn 站点 `debugger;` 暂停，F8 / DevTools 恢复后仍可能再断；遮罩没卡住，不记失败。
- Magpie 挡 udn 剪贴板，点了一律不允许。美团 Cookie 条未点。权限框不允许。
- Console / 站点遥测 / `ERR_CONNECTION_CLOSED` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **无节流**（下拉「已停用节流模式」）。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- 360.cn 不要改去 so.com。so.com 不要改去 360.cn。ctrip.com 不要改去 trip.com。
- 搜狗 / 360搜索 / 携程 / CSDN 搜索框会抢输入。Cat 侧栏仍在。本批用 cmd+l 贴地址，Kagi 点地球（站点项 / `https://…`）再 Enter，不要点「Kagi 搜索」。DevTools 会抢 `cmd+v`，必要时 `rdc type`。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。udn / ettoday / so.com 没抓到 `#121212` 不改脚本。

## 给批次 9 的规则

- 站点按 `dark-retest-light-sites.md` L081–L090。**不要在本聊天开始批次 9。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。Magpie 挡页面就关。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
