# Dark Mode++ 深色系统 · 浅色首屏复测批次 12（L111–L120）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；12306 / 夸克 / V2EX 时 Network 瀑布流可见、无 Slow 4G。登录墙 / Cookie / 验证墙只测墙，未登录。未测 L110 及以前，未开批次 13。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 hupu.com。

证据目录：`rdc-awf-dark-light-b12/`。连拍只写 `/tmp/g-dl-b12`，用 `/tmp/g-dl-b12/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 111 | gitee.com | https://gitee.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 111-gitee-overlay.png；111-gitee-complete.png | 浅色营销/登录墙「让每一行代码都有改变世界的力量」。只测墙，未填手机号，未点企业免费使用/个人账号注册。连拍没抓到 `#121212`。reload f04 白空壳 mid=255 再内容。 |
| 112 | 51job.com | https://www.51job.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 112-51job-overlay.png；112-51job-complete.png | 浅色前程无忧首页。未往「请输入公司/职位」打字，未点职位。连拍+reload 都没抓到 `#121212`。 |
| 113 | autohome.com.cn | https://www.autohome.com.cn/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 113-autohome-overlay.png；113-autohome-complete.png | **落地 `/lanyungang/`。** 浅色汽车之家 + 「限时拆现金盲盒」弹层。只测墙，未填手机号，未点立即拆现金盲盒。f02 白空壳再内容，没抓到 `#121212`。 |
| 114 | zhibo8.com | https://www.zhibo8.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 114-zhibo8-overlay.png；114-zhibo8-complete.png | 浅色直播吧首页。未点视频/资讯。没抓到 `#121212`。 |
| 115 | zhipin.com | https://www.zhipin.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 115-zhipin-overlay.png；115-zhipin-complete.png | **落地 `/chengshi/10119000/haoRefer=index`。** 浅色 BOSS 直聘首页，未出整页登录墙。未往职位搜索打字，未点登录/注册/职位。Helium 旧 104 标签会抢走 Enter，改新标签打开。没抓到 `#121212`。 |
| 116 | 12306.cn | https://www.12306.cn/index/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 116-12306-overlay.png；116-12306-complete.png | **测的是 `/index/`，不是根域。** 浅色中国铁路12306 购票首页。未往出发地/到达地打字，未点查询。没抓到 `#121212`。 |
| 117 | quark.cn | https://www.quark.cn/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 117-quark-overlay.png；117-quark-complete.png | 浅色夸克营销「夸克 · 更强大的AI…」。未点「下载夸克Mac版」。没抓到 `#121212`。 |
| 118 | v2ex.com | https://www.v2ex.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 118-v2ex-overlay.png；118-v2ex-complete.png | 浅色 V2EX 主题列表，有登录/注册不是整页墙。未点主题/登录。f07 白空壳再内容，没抓到 `#121212`。 |
| 119 | qidian.com | https://www.qidian.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 119-qidian-overlay.png；119-qidian-complete.png | 落地 qidian.com **白空壳**。reload 仍白。站点 TypeError Reduce of empty array，不是脚本。没抓到 `#121212`。未点章节。白空壳是浅色站，不是深站白闪。 |
| 120 | juejin.cn | https://juejin.cn/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 120-juejin-overlay.png；120-juejin-complete.png | 浅色稀土掘金首页。未点文章，没把地址贴进「探索稀土掘金」。有登录不是整页墙。没抓到 `#121212`。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳记 浅，**不算误跳过，也不算深站白闪**。码云 / 汽车之家 / V2EX 白空壳再内容；起点 reload 仍白空壳；前程无忧 / 直播吧 / BOSS 直聘 / 12306 / 夸克 / 掘金已出浅色内容。都是浅色站。
- 原测码云 / BOSS 直聘 / 夸克 / 起点是错色（先 `#121212` 再浅）。本批连拍都没抓到深遮罩，按单站抓不到记 浅，通过。不改脚本。
- 登录/验证墙只测墙：码云是营销+手机号墙，只测墙未填。汽车之家现金盲盒弹层只测墙。BOSS 直聘 / V2EX / 掘金本次都不是整页登录墙。12306 未查票。
- Magpie 本批没挡页面。权限框不允许，本批没出权限框。
- Console / 站点遥测 / `ERR_CONNECTION_CLOSED` / 起点 TypeError 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 本批全程未改节流。12306 / 夸克 / V2EX 时 Network 瀑布流可见、无 Slow 4G。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- 12306 必须带 `/index/`，不要只开根域。汽车之家落地 `/lanyungang/`。BOSS 直聘落地 `/chengshi/10119000/haoRefer=index`。
- Helium 地址栏 Enter 可能切到已开的旧标签（本批 104.com.tw 抢走 zhipin）。切错就 `cmd+t` 新标签再打开目标站。
- Cat 侧栏仍在，会抢 `cmd+l`。点 Helium 标签再 `cmd+l`，Kagi 有地球就点地球；没有或乱跳就 Esc 关掉 Kagi 再 Enter。不要点「Kagi 搜索」。不要把地址打进页面搜索框。
- 导航下一站时不要点页面内容。招聘站不要往搜索框打字，汽车之家不要拆盲盒，直播吧不要进视频，12306 不要查票，夸克不要点下载，V2EX / 掘金不要进帖，起点不要点章节。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。码云 / 前程无忧 / 汽车之家 / 直播吧 / BOSS 直聘 / 12306 / 夸克 / V2EX / 起点 / 掘金没抓到 `#121212` 不改脚本。

## 给批次 13 的规则

- 站点按 `dark-retest-light-sites.md` L121–L124（xueqiu / zaobao / goofish / fanqienovel）。**不要在本聊天开始批次 13。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。Magpie 挡页面就关。测完 No throttling。
- Helium Enter 可能切到旧标签，切错就新标签再开。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
