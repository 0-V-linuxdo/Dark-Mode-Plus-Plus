# Dark Mode++ 深色系统 · 浅色首屏复测批次 9（L081–L090）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；测完 Network 下拉是「已停用节流模式」，**No throttling / 无节流**。登录墙 / Cookie / 验证墙只测墙，未登录。未测 L080 及以前，未开批次 10。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 cwa.gov.tw。

证据目录：`rdc-awf-dark-light-b09/`。连拍只写 `/tmp/g-dl-b09`，用 `/tmp/g-dl-b09/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 81 | 104.com.tw | https://www.104.com.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 81-104-overlay.png；81-104-complete.png | 浅色 104 人力银行。有登入/立即安裝APP不是整页墙。白空壳再内容，没抓到 `#121212`。未点登入/立即安裝APP，未往职位搜索框打字。 |
| 82 | nga.cn | https://bbs.nga.cn/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 82-nga-overlay.png；82-nga-complete.png | 测的是 **bbs.nga.cn**。落地 `/?rand=912` 浅米色分区首页，头图是照片。有登录/注册不是整页墙。加载中请稍候是浅米色，没抓到 `#121212`。未点版块/帖。 |
| 83 | shopee.tw | https://shopee.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 83-shopee-overlay.png；83-shopee-complete.png | **测的是 shopee.tw，不是 shopee.com**。登录墙只测墙。落地 captcha 浅色「安全性驗證/選擇語言」，未点繁體中文。f02 gray=245 var=0 浅遮罩，没抓到 `#121212`。 |
| 84 | dcard.tw | https://www.dcard.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 84-dcard-overlay.png；84-dcard-complete.png | 这次不是 CF 墙。落地 `/f` 浅色看板首页，信息流「發生錯誤」。未点重新載入/註冊登入，未进帖。没把地址贴进搜索框。没抓到 `#121212`。 |
| 85 | momoshop.com.tw | https://www.momoshop.com.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 85-momo-overlay.png；85-momo-complete.png | 落地 `/main/Main.jsp` 浅色首页。白空壳 mid=255 再骨架再商品，没抓到 `#121212`。未点商品，没把地址贴进搜索框。有登入/註冊不是整页墙。 |
| 86 | setn.com | https://www.setn.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 86-setn-overlay.png；86-setn-complete.png | 浅色三立新闻首页。白空壳再内容，没抓到 `#121212`。未点新闻。有登入不是整页墙。 |
| 87 | hkjc.com | https://www.hkjc.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 87-hkjc-overlay.png；87-hkjc-complete.png | 落地 `/zh-hk/index` 浅色营销首页。未出地区墙。未进投注页，未点「確認」Cookie 条。站点轮播/深蓝区块不是脚本 `#121212`。没抓到脚本遮罩。 |
| 88 | ltn.com.tw | https://www.ltn.com.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 88-ltn-overlay.png；88-ltn-complete.png | 浅色自由时报。没抓到 `#121212`。未点新闻。Helium 相机框点了一律不允许。 |
| 89 | stheadline.com | https://www.stheadline.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 89-stheadline-overlay.png；89-stheadline-complete.png | 浅色星岛头条。没抓到 `#121212`。Cookie「本網站正使用 Cookies」未点同意。未点新闻。 |
| 90 | cwa.gov.tw | https://www.cwa.gov.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 90-cwa-overlay.png；90-cwa-complete.png | 落地 `/V8/C/` 浅蓝政务首页。未点预报详情，未选县市确定。没抓到 `#121212`。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳记 浅，**不算误跳过，也不算深站白闪**。104 / momo / 三立白空壳 mid=255、NGA 浅米色加载、虾皮 gray=245 浅遮罩、Dcard/马会/自由时报/星岛/气象署已出浅色内容，都是浅色站。
- 原测 momo / setn / ltn / cwa 是错色（先 `#121212` 再浅）。本批连拍都没抓到深遮罩，按单站抓不到记 浅，通过。不改脚本。
- 登录墙只测墙：虾皮是安全性驗證/選擇語言，未点繁體中文。104 / NGA / momo / 三立顶栏登录未点。Dcard 这次是看板首页错误流，不是 CF。
- Magpie 本批没再挡页面。自由时报相机框点了一律不允许。马会 / 星岛 Cookie 未点。权限框不允许。
- Console / 站点遥测 / `ERR_CONNECTION_CLOSED` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **无节流**（下拉「已停用节流模式」）。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- shopee.tw 不要改去 shopee.com。测的是 bbs.nga.cn。
- 104 / Dcard / momo 搜索框会抢输入。Cat 侧栏仍在，会抢 `cmd+l`。点 Helium 标签再 `cmd+l`，Kagi 点地球（站点项 / `https://…`）再 Enter，不要点「Kagi 搜索」。不要把地址打进页面搜索框。
- 导航下一站时不要点页面内容（104 防诈横幅会进 blog.104.com.tw）。马会 Cookie「確認」、星岛 Cookie、气象署县市「确定」都别点。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。momo / setn / ltn / cwa 没抓到 `#121212` 不改脚本。

## 给批次 10 的规则

- 站点按 `dark-retest-light-sites.md` L091–L100。**不要在本聊天开始批次 10。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。Magpie 挡页面就关。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
