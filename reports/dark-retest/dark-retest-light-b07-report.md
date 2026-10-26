# Dark Mode++ 深色系统 · 浅色首屏复测批次 7（L061–L070）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；测完 Network 工具条是「已停用节流模式」，**No throttling / 无节流**。登录墙 / Cookie / 验证墙只测墙，未登录。未测 L060 及以前，未开批次 8。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 sina.com.cn。

证据目录：`../../evidence/dark-retest/b07/`。连拍只写 `/tmp/g-dl-b07`，用 `/tmp/g-dl-b07/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 61 | tmall.com | https://www.tmall.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 61-tmall-overlay.png；61-tmall-complete.png | 登录墙只测墙。这次不是整页登录墙，浅色天猫首页+顶栏请登录。没抓到 `#121212`。未点登录。过程中误开 huodong.taobao 登录墙，未填，判定用首页。 |
| 62 | gamer.com.tw | https://www.gamer.com.tw/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 62-gamer-overlay.png；62-gamer-complete.png | 浅色巴哈 30 周年首页 + 站点登入引导「下一步」。白空壳再内容，没抓到 `#121212`。未点登入/註冊/下一步。背后变暗是站点弹层，不是脚本 `#121212`。 |
| 63 | eastmoney.com | https://www.eastmoney.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 63-eastmoney-overlay.png；63-eastmoney-complete.png | 浅色东方财富首页。Reload 仍浅，没抓到 `#121212`。未往股票框打字，未点登录。 |
| 64 | douban.com | https://www.douban.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 64-douban-overlay.png；64-douban-complete.png | 浅色豆瓣 7.0 首页+右侧短信登录条。没抓到 `#121212`。未填手机号，未点登录/注册。 |
| 65 | sohu.com | https://www.sohu.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 65-sohu-overlay.png；65-sohu-complete.png | 浅色搜狐门户（黄 logo）。没抓到 `#121212`。未点新闻，未往搜索框打字。 |
| 66 | hao123.com | https://www.hao123.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 66-hao123-overlay.png；66-hao123-complete.png | 浅色导航（百度搜索框+站点宫格+即梦AI）。没抓到 `#121212`。未点广告，未往百度框打字。 |
| 67 | 1688.com | https://www.1688.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 67-1688-overlay.png；67-1688-complete.png | 登录墙只测墙。测的是 **1688.com**，不是 alibaba.com。浅色批发首页+右侧立即登录卡，未点。没抓到 `#121212`。未往搜索框打字。 |
| 68 | aliyun.com | https://www.aliyun.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 68-aliyun-overlay.png；68-aliyun-complete.png | 浅色「Token Plan 全面升级」。白空壳再内容，没抓到 `#121212`。未点立即订阅/小蜜。 |
| 69 | ifeng.com | https://www.ifeng.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 69-ifeng-overlay.png；69-ifeng-complete.png | 浅色凤凰网门户。Reload 仍浅，没抓到 `#121212`。未点新闻。 |
| 70 | sina.com.cn | https://www.sina.com.cn/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 70-sina-overlay.png；70-sina-complete.png | 测的是 **sina.com.cn**，不是 sina.com。浅色新浪网首页。Reload 仍浅，没抓到 `#121212`。未往搜索框打字，未点新闻。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳记 浅，**不算误跳过，也不算深站白闪**。巴哈 / 阿里云白空壳 mid=255、天猫/搜狐/hao123/1688/凤凰/新浪已出浅色内容，都是浅色站。Helium 新标签 gray≈247 不是白闪。
- 原测 eastmoney / ifeng / sina.com.cn 是错色（先 `#121212` 再浅）。本批连拍+reload 都没抓到深遮罩，按单站抓不到记 浅，通过。不改脚本。
- 登录墙只测墙：天猫 / 1688 这次出的是首页+请登录，未点登录。豆瓣右侧短信登录未填。巴哈「下一步」未点。误开的天猫活动登录墙未填。
- debugger 暂停本批没碰到。遮罩没卡住。
- Console / 站点遥测 / `ERR_CONNECTION_CLOSED` / `Failed to construct 'URL'` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **无节流**（「已停用节流模式」）。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- 1688 不要改去 alibaba.com。sina.com.cn 不要改去 sina.com。
- 天猫 / 1688 / 豆瓣 / 东方财富 / hao123 / 新浪搜索框、巴哈登入引导会抢输入。Cat 侧栏仍在。本批用 cmd+l 贴地址，Kagi 点地球（站点项 / `https://…`）再 Enter，不要点「Kagi 搜索」。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。eastmoney / ifeng / sina 没抓到 `#121212` 不改脚本。

## 给批次 8 的规则

- 站点按 `dark-retest-light-sites.md` L071–L080。**不要在本聊天开始批次 8。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
