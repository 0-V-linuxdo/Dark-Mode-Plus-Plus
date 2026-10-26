# Dark Mode++ 深色系统 · 浅色首屏复测批次 1（L001–L010）

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」**1.0.3**（仪表盘已确认，未重装、未 bump）。系统深色（桌面 / 菜单栏 / Helium 深；Console `matchMedia('(prefers-color-scheme: dark)').matches` = **true**）。MV3 **允许运行用户脚本** 开。DevTools Disable cache 开，**No throttling / 无节流**（测完仍是无节流）。登录墙只测墙，未登录。L001–L003 沿用原测 chat 磁盘证据，未重开这 3 站。本 chat 从 L004 测到 L010。未开批次 2。未覆盖 `top-100-*.md` / `top-100-zh-*.md`。

证据目录：`rdc-awf-dark-light-b01/`。连拍只写 `/tmp/g-dl-b01`，用 `/tmp/g-dl-b01/analyze.py` 看 gray/var。`#121212` 判定：mid≈(18,18,18)。每站最多 2 张证据图，`--max 700`。回复里不贴原图。

取值：系统主题必须是「深色」；实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 先确认（不重测）

- 桌面深色：`00-desk-dark.png`
- 暴力猴「通用防白闪」**1.0.3**：`00-vm-103.png`
- `prefers-color-scheme: dark` = true：`00-matchmedia.png`

## 结果

| L# | 站点 | URL | 系统主题 | 脚本版本 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | facebook.com | https://www.facebook.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 01-facebook-overlay.png；01-facebook-complete.png | 不重测。磁盘连拍 f08–f13 `#121212`（mid=18,18,18）再浅色登录墙。只测墙。 |
| 2 | reddit.com | https://www.reddit.com/ | 深色 | 1.0.3 | 深色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 02-reddit-overlay.png；02-reddit-complete.png | 不重测。短暂近黑闪后实际深色首页（跟系统）。reload 仍深，没抓到 `#121212`。 |
| 3 | whatsapp.com | https://www.whatsapp.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 03-whatsapp-overlay.png；03-whatsapp-complete.png | 不重测。f07–f12 `#121212` 再米色营销页。Helium 续测时仍停在此页，准备进 yahoo.co.jp。 |
| 4 | yahoo.co.jp | https://www.yahoo.co.jp/ | 深色 | 1.0.3 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 04-yahoo-overlay.png；04-yahoo-complete.png | 日语浅色首页。首访连拍还在空标签；reload f06–f16 Helium 空标签 gray≈58，f17 起浅色，没抓到 `#121212`。没往搜索框打字。Console `ERR_CONNECTION_CLOSED` / Permissions-Policy 是站点。 |
| 5 | yandex.ru | https://yandex.ru/ | 深色 | 1.0.3 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 05-yandex-overlay.png；05-yandex-complete.png | 浅色「Поиск Яндекса」首页+资讯。空标签后 f17 白壳再内容，没抓到 `#121212`。Console CSP 是站点。 |
| 6 | amazon.com | https://www.amazon.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 06-amazon-overlay.png；06-amazon-complete.png | f07–f11 `#121212` 再浅色 Skip to / 键盘快捷键首屏（键盘进站）。没把地址打进搜索框。Console `ERR_CONNECTION_CLOSED` 是站点。 |
| 7 | linkedin.com | https://www.linkedin.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 07-linkedin-overlay.png；07-linkedin-complete.png | 只测未登录墙「领英: 登录或注册」。f07–f14 `#121212` 再浅。未点登录。Cat `content ready` 不是脚本。 |
| 8 | cloud.microsoft | https://cloud.microsoft/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 08-microsoft-overlay.png；08-microsoft-complete.png | 只测 Microsoft 365 / Copilot 登录墙。连拍末帧仍 `#121212`，等一下 + F8 后撤。站点 debugger 暂停，不是脚本卡住。未点登录。 |
| 9 | baidu.com | https://www.baidu.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 09-baidu-overlay.png；09-baidu-complete.png | 浅色百度首页。连拍全程 `#121212` 是站点 debugger 暂停冻住定时器，F8 后撤。搜索框仍是占位文案，没把地址打进去。 |
| 10 | pinterest.com | https://www.pinterest.com/ | 深色 | 1.0.3 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 10-pinterest-overlay.png；10-pinterest-complete.png | 只测未登录营销/登录墙「在 Pinterest 上创造你热爱的生活」。f04–f14 `#121212` 再浅。未点登录/注册。测完 Network 仍是 **无节流**。 |

## 判定摘要

- 10/10 通过，0 失败，0 跳过。
- **深色系统下 1.0.3 没有误跳过。** Facebook / WhatsApp / Amazon / LinkedIn / cloud.microsoft / Baidu / Pinterest 都抓到 `#121212`（mid=18,18,18）。脚本在 `prefers-color-scheme: dark` = true 时仍建遮罩，没有 `systemScheme() !== 'dark'` 直接 return。
- Reddit / Yahoo / Yandex 单站连拍没抓到 `#121212`，页面正常、遮罩没卡住，记 无/浅，**不算误跳过**（其它浅站已证明遮罩会建）。
- 浅站先 `#121212` 再露白 = 遮罩颜色错色、二次闪=是，这是深色系统下的预期，遮罩会撤就算通过。本批 1 / 3 / 6 / 7 / 8 / 9 / 10 属于这类。
- Reddit 这次实际首屏是深色（跟系统），以这次为准。
- gray=255 var=0 空 body 本批没有。Helium 空标签 gray≈58 不是白闪。
- 登录墙只测墙：Facebook / LinkedIn / Microsoft 365 / Pinterest。Amazon 实际首屏是 Skip to / 键盘快捷键。Yahoo / Baidu 没把地址打进页面搜索框。
- cloud.microsoft / Baidu 的长时间 `#121212` 是站点 Sources debugger 暂停冻住定时器，F8 后遮罩撤，**不记卡住、不记失败**。
- Console 里 CSP、Permissions-Policy、遥测 `ERR_CONNECTION_CLOSED`、Cat `content ready` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 测完 Network 仍是 **无节流**。

## 共性问题

- 1.0.3 在系统深色时继续工作，浅色首屏会先盖 `#121212` 再露白。这是跟系统 scheme 的预期错色/二次闪，不是误跳过。
- 单站抓不到遮罩（Yahoo / Yandex / Reddit）不要当成 1.0.3 跳过；要看整批有没有 `#121212`。本批多数浅站都有。
- 站点 debugger 暂停会冻住遮罩超时。操作上继续 F8；不要把暂停中的深遮罩写成脚本卡住。
- 键盘进 Amazon 会先出 Skip to / 键盘快捷键，这是站点无障碍首屏，不是脚本。
- 不要长时间 Slow 4G。本批全程 No throttling。

## 脚本改动

无。本地 + 暴力猴仍是 `anti-white-flash.user.js` **1.0.3**。本批没有可复现的误跳过或遮罩卡住，**不 bump、不重装**。

## 给批次 2 的规则

- 站点按 `dark-retest-light-sites.md` L011–L020。**不要在本聊天开始批次 2。**
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图、不要 view 大图。新图 `--max 700`。
- 系统必须深色。1.0.3 应工作，不能误跳过。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就通过。单站抓不到遮罩记 无/浅，通过。卡住才失败。
- 登录墙 / Cookie / 验证墙只测墙。Helium 断连先重试一次。不要把地址打进搜索框。debugger 暂停 F8。权限框不允许。测完 No throttling。
- 不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。只回填 `dark-retest-light-results.md` 对应行。
