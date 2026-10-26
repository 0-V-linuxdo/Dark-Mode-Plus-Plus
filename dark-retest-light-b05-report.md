# Dark Mode++ 深色系统 · 浅色首屏复测批次 5（L041–L050）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（未重装、未 bump，未开暴力猴仪表盘）。系统深色（桌面 / 菜单栏 / Helium 深；批次 1 已确认 `matchMedia('(prefers-color-scheme: dark)').matches` = true，本批未重测仪表盘）。DevTools Disable cache 开。本批未改节流；测完用命令面板核对，只有「启用快速 3G/4G 节流」，没有已启用项，**No throttling / 无节流**。登录墙 / Cookie / 验证 / 年龄 / 403 墙只测墙，未登录。未测 L040 及以前，未开批次 6。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。Helium 续测时停在 scribd.com。

证据目录：`rdc-awf-dark-light-b05/`。连拍只写 `/tmp/g-dl-b05`，用 `/tmp/g-dl-b05/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 41 | bbc.com | https://www.bbc.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 41-bbc-overlay.png；41-bbc-complete.png | 国际站，不是 bbc.co.uk。f03 白空壳 mid=255 再浅色 BBC Home / News / Sport。没抓到 `#121212`。Cookie 未点，未点 Sign in。 |
| 42 | chaturbate.com | https://chaturbate.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 42-chaturbate-overlay.png；42-chaturbate-complete.png | NSFW。只测未登录年龄墙 “YOU MUST BE OVER 18… I AGREE / EXIT”。没抓到 `#121212`。未点 I AGREE / I am 18，未往下点。 |
| 43 | amazon.de | https://www.amazon.de/ | 深色 | 1.0.3 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 跳过 | 43-amazonde-overlay.png；43-amazonde-complete.png | 德国站，不是 amazon.com / .in / .co.jp。第一次 Helium `ERR_FAILED`「无法访问此网站」，cmd+r 重试一次仍 `ERR_FAILED`。断连跳过，不改脚本。未往搜索框打字。 |
| 44 | rakuten.co.jp | https://www.rakuten.co.jp/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 44-rakuten-overlay.png；44-rakuten-complete.png | 浅色楽天市場「ようこそ楽天市場へ」+ 楽天モバイル条。白/浅骨架再内容，没抓到 `#121212`。未往キーワード検索打字。 |
| 45 | onlyfans.com | https://onlyfans.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 45-onlyfans-overlay.png；45-onlyfans-complete.png | NSFW。先短暂 `ERR_CONNECTION_CLOSED`，同一导航内落到浅色未登录墙「注册以支持你最喜欢的创作者」+ Cookie。没抓到 `#121212`。未点登录/注册/ACCEPT ALL，未填邮箱。 |
| 46 | telegram.org | https://telegram.org/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 46-telegram-overlay.png；46-telegram-complete.png | 营销站，不是 t.me（批次 3 已测落地页）。浅色 “a new era of messaging”。没抓到 `#121212`。未点 Android / iPhone。 |
| 47 | ok.ru | https://ok.ru/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 47-okru-overlay.png；47-okru-complete.png | 浅色登录墙 Войти + Cookie。没抓到 `#121212`。未点 Войти，未填账号，Cookie 未点。 |
| 48 | deepseek.com | https://www.deepseek.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 48-deepseek-overlay.png；48-deepseek-complete.png | 浅色营销「探索未至之境」。f01 白空壳 mid=255 再浅蓝页。没抓到 `#121212`。未往「问点什么，一起探索」打字。 |
| 49 | usps.com | https://www.usps.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 49-usps-overlay.png；49-usps-complete.png | 浅色首页蓝英雄区 “See Incoming Mail in Your Email” + Search or Track Packages。没抓到 `#121212`。未往跟踪框打字，未点 Sign in。 |
| 50 | scribd.com | https://www.scribd.com/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 50-scribd-overlay.png；50-scribd-complete.png | 先短暂 `ERR_CONNECTION_CLOSED`，同一导航内落到浅色营销 “Connect the docs. Make this semester a success.”。没抓到 `#121212`。未往 Search 打字，未点 Sign in / For students。 |

## 判定摘要

- 9/10 通过，0 失败，1 跳过（amazon.de Helium 断连）。
- **深色系统下 1.0.3 本批没有可复现的误跳过或卡住。** 10 站连拍都没抓到 `#121212`（mid=18,18,18）。按规则单站抓不到记 浅/无，通过；这不是 matchMedia 关掉脚本。批次 1–4 已在深色系统抓到 `#121212`。本批不改脚本。
- 浅站白空壳 / 白骨架记 浅，**不算误跳过，也不算深站白闪**。BBC / Rakuten / DeepSeek / Scribd 白空壳 mid=255 是浅色站。Helium 新标签 gray≈247 不是白闪。
- amazon.de 第一次 + 重试都是浏览器 `ERR_FAILED`，当 Helium 断连跳过，只测墙、不改脚本、不去 amazon.com。
- onlyfans / scribd 中途 `ERR_CONNECTION_CLOSED` 后在同一导航内打开，按落地页记，不算跳过。
- 登录墙 / Cookie / 年龄墙只测墙：Chaturbate 未点 I AGREE；OnlyFans 未登录；OK.ru 未点 Войти；USPS / Scribd 未点 Sign in。BBC / OK.ru / OnlyFans Cookie 未点。amazon.de / Rakuten / DeepSeek / USPS / Scribd 没把地址打进页面搜索框。
- debugger 暂停本批没碰到。遮罩没卡住。
- Console / 站点遥测 / `ERR_CONNECTION_CLOSED` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **无节流**（命令面板只有「启用」3G/4G 节流，未点）。

## 共性问题

- 1.0.3 在系统深色时继续工作。本批浅站连拍偏慢，容易只见到白空壳或已出内容；单站抓不到 `#121212` 记 浅，不要当成脚本跳过。
- Helium `ERR_FAILED` / `ERR_CONNECTION_CLOSED`：断连先重试一次；重试仍打不开才跳过。同一导航内自己恢复的（OnlyFans / Scribd）按落地页记。
- bbc.com 不要当成 bbc.co.uk。amazon.de 不要改去 amazon.com。telegram.org 与 t.me 分开。NSFW 只测未登录首屏/年龄墙，不要点 I am 18。
- Cat 侧栏仍在。本批用 文件→新建标签页；Kagi 建议选网址项再 Enter。不要把地址打进页面搜索框。
- 不要长时间 Slow 4G。本批全程无节流。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。amazon.de 断连不改脚本。

## 给批次 6 的规则

- 站点按 `dark-retest-light-sites.md` L051–L060。**不要在本聊天开始批次 6。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙 / 年龄墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。测完 No throttling。
- amazon.co.uk 不要改去 amazon.com。NSFW 只测未登录首屏/年龄墙。中文站从 L056 开始。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
