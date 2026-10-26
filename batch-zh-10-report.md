# Dark Mode++ 中文批次 10（91–100）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（未重装、未再核对版本）。系统深色。DevTools Disable cache 开，开测时 Network 为 **已禁用节流模式 / No throttling**，全程未改节流，测完仍保持。登录/验证/地区墙只测墙。只测中文 Top 91–100。未覆盖全球榜。未开始第 11 批。未回头复测 1–90。

证据目录：`rdc-awf-zh-batch10/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b10`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 91 | 12306.cn | https://www.12306.cn/index/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 91-12306-overlay.png；91-12306-complete.png | 铁路 12306。**未出验证码墙**。浅色首页。**没把地址贴进出发地/搜索框，未进购票。** 首访 f01 仍是上一站，f02 已是 12306。Reload 20 帧已是内容，无 `#121212`、无 gray=255 空 body。Console：font decode / CSP / Cat `content ready` / 站点 `Illegal return statement`。 |
| 92 | quark.cn | https://www.quark.cn/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 92-quark-overlay.png；92-quark-complete.png | 浅色营销首页「夸克 · 更强大的AI浏览器」，不是搜索框页。未点「下载夸克/下载专用Mac版」。首访 f03 `#121212`（gray=18 var=0）再浅蓝首页。Reload 已是内容。Console：Cat / quark 遥测 `ERR_CONNECTION_CLOSED`。 |
| 93 | v2ex.com | https://www.v2ex.com/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 93-v2ex-overlay.png；93-v2ex-complete.png | **未出整页登录墙**；浅色帖列表，登录/注册只是按钮。未点帖/「现在登录」。首访灰底(58)后出首页。Reload 已是内容，无 `#121212`。Console：rumstat/sentry `ERR_CONNECTION_CLOSED` / Cat。 |
| 94 | qidian.com | https://www.qidian.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 94-qidian-overlay.png；94-qidian-complete.png | **未出登录墙，未进章节**，没把地址贴进搜索。首访灰底 → `#121212`（gray=18 var=0，持续约 7s）→ 白空 body gray=255 var=0。浅色站不算白闪。站点 `game.iife.js` `TypeError: Reduce of empty array`，首页没渲染出来。Cat `content ready` 后遮罩会撤。Console：Cat / 站点 GameProbeTestType 警告。未改脚本。 |
| 95 | juejin.cn | https://juejin.cn/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 95-juejin-overlay.png；95-juejin-complete.png | 浅色掘金首页。**未点进文章**，没把地址贴进「搜索稀土掘金」。有登录/注册不是整页墙。首访白空壳 gray=255 var=0（浅色站不算白闪）→ 浅骨架 → 首页。Reload r02 浅骨架。Console：遥测 POST `ERR_CONNECTION_CLOSED`。 |
| 96 | xueqiu.com | https://xueqiu.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 96-xueqiu-overlay.png；96-xueqiu-complete.png | 浅色营销首页+账号密码/扫码登录墙，**只测墙**。未填账号，未点登录/热门话题，没把地址贴进搜索。首访 `#121212` 后出墙。Reload 已是内容。Console：Cat / Mixed Content / Manifest `start_url`。 |
| 97 | gamersky.com | https://www.gamersky.com/ | 浅色 | 混合 | 否 | 深 | 否 | 是 | 否 | 否 | 通过 | 97-gamersky-overlay.png；97-gamersky-complete.png | 深顶栏+浅色资讯/海报。**未进游戏专题**；站点「体验新版」弹层未点。没把地址贴进搜索。首访近黑空壳后出首页。Reload r02 `#121212`（gray=18 var=0）再混合首屏。Console：Mixed Content / Cat / 站点 `getHeaderDataIdOrDefault` ReferenceError / 遥测 `ERR_CONNECTION_CLOSED`。 |
| 98 | zaobao.com.sg | https://www.zaobao.com.sg/ | 浅色 | 浅色 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 98-zaobao-overlay.png；98-zaobao-complete.png | 联合早报，默认中文界面。浅色首页+「精选3版早报主页」地区墙，**只测墙**。未点确定选择，未点新闻。首访灰底(58)后出墙。Reload 已是内容，无 `#121212`。Console：zaobao 遥测 `ERR_CONNECTION_CLOSED` / ChunkLoadError / Hydration error。 |
| 99 | goofish.com | https://www.goofish.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 99-goofish-overlay.png；99-goofish-complete.png | 闲鱼网页版。浅色首页+短信/扫码登录墙，**只测墙**。未填手机号，未点登录/商品，没把地址贴进搜索。**未整页跳 App**（墙内有「闲鱼APP扫码」）。首访浅骨架后出墙。Reload r02 浅灰骨架。Console：Cat / mmstat `ERR_CONNECTION_CLOSED`。 |
| 100 | fanqienovel.com | https://fanqienovel.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 100-fanqie-overlay.png；100-fanqie-complete.png | 番茄小说。**未出整页登录墙**；浅色「番茄小说网」首页。未点书封/章节，没把地址贴进「请输入书名或作者」。首访灰底 → 浅遮罩 gray=246 var=0 → 首页。Reload 已是内容。Console：CSP / 遥测 `ERR_CONNECTION_CLOSED` / 站点 TypeError Network request failed。 |

## 复测

本批没有可复现的白闪失败。起点白空 body 是浅色站 + 站点 `game.iife.js` TypeError，不是 gray=255 空 body 且深色站。没有 bump、没有重装暴力猴。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准。V2EX / 12306 / 夸克 / 掘金 / 番茄预期可能是墙或 App 页，实际是浅色首页或营销页。游民星空预期浅色，实际深顶栏+浅色资讯，记混合。不要拿预期主题当失败条件。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（夸克 / 起点 / 雪球）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败。
- 浅色遮罩在白底上几乎看不见（掘金白空壳 gray=255；闲鱼浅骨架；番茄 gray=246 var=0）。gray=255 var=0 空 body **且** 深色站才算白闪失败。Helium 空标签灰底 (≈58) 不是白闪。
- 登录/地区墙只看墙：雪球/闲鱼是整页登录弹层；联合早报是「精选3版早报主页」地区墙；V2EX/掘金/番茄只有登录按钮。Cookie/下载/体验新版/确定选择未点。
- 点 Helium 顶栏 URL 再 `cmd+r`。命令面板/地址补全第一项可能是 Kagi 搜索，**Esc 关掉建议后再 Enter，以顶栏地址栏为准**。导航时 DevTools 会抢 `cmd+v`，用 `rdc type`。不要把地址贴进页面搜索框（12306 出发地 / 夸克 / 起点 / 掘金 / 雪球 / 游民 / 闲鱼 / 番茄）。
- Helium 从新站首屏有时会先停在空标签灰底再出内容（V2EX / 早报 / 闲鱼 / 番茄）。证据用仍停在目标域名的帧。
- DevTools Sources 若开着「暂停在调试程序语句」，雪球/番茄页面里的 `debugger;` 会把首屏冻在近黑帧。这是调试器不是脚本遮罩。关掉 DevTools 后雪球是浅蓝登录墙、番茄是浅色首页。
- Helium 权限框点不允许。本轮未再弹出通知/本地网络/位置框。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、GTM/广告、站点 TypeError/ReferenceError/ChunkLoadError/Hydration、Cat `content ready`、Mixed Content 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 不要长时间 Slow 4G。本轮 Network 开测时就是「已禁用节流模式」，全程未改。DevTools 设备模式不要开。证据图在桌面布局下拍。
- 社区/新闻/电商/小说不要点进帖、新闻正文、商品、章节、游戏专题。首页模块（游民海报、闲鱼商品卡、番茄书封、早报头图）不是点进详情。

## 脚本改动

无。1.0.1 已在暴力猴里。本批 10/10 通过，0 失败，0 跳过。没有可复现脚本问题，没有 bump。

## 中文 Top 100 收尾

- 10 批测完，未开第 11 批，未复测 1–90。
- 计数：**95 通过 / 1 失败 / 4 跳过**。失败仍是第 5 批 `missav.ws` 白空 body，复现不稳，未改脚本。跳过仍是 wantgoo / cmoney / xiaomi.com.cn / woa.com（Helium `ERR_CONNECTION_CLOSED`）。
- 脚本版本：`anti-white-flash.user.js` **1.0.1**。暴力猴未重装。
- 不要覆盖全球榜 `top-100-sites.md` / `top-100-batches.md` / `top-100-results.md`。中文结果已回填 `top-100-zh-results.md` 第 91–100 行。
