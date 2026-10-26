# Dark Mode++ 中文批次 1（1–10）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（28k，已启用）。系统深色。DevTools Disable cache 开，**No throttling**（测完仍是 No throttling）。登录墙只测未登录首屏。未重装脚本，未测第 11 名及以后。

证据目录：`rdc-awf-zh-batch01/`。连拍只写 `/tmp/zh-b01`，用 ImageStat（gray/var）判断纯色遮罩。每站最多 2 张证据图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | baidu.com | https://www.baidu.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 01-baidu-overlay.png；01-baidu-complete.png | 未登录浅色首页。Reload 连拍 r01 整页 `#121212`（gray=18, var=0），r02 起白底首页 gray≈249。系统深色遮罩盖浅色站，约一帧后撤走。Console：`so1/so2.baidu.com ERR_CONNECTION_CLOSED`，无脚本异常。遮罩 `pointer-events: none`。 |
| 2 | bilibili.com | https://www.bilibili.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 02-bilibili-overlay.png；02-bilibili-complete.png | 粉绿首页 + 白色登录气泡，不是整页登录墙。首页连拍没抓到 `#121212`，抓到浅色遮罩淡出（washed-out 一帧）。Console：hydration mismatch / CSP / 站点「白屏检测上报」/ deprecated，无脚本异常。误点过 `/blackboard/era/` 活动页，不计入本行。 |
| 3 | douyin.com | https://www.douyin.com/ | 深色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 03-douyin-overlay.png；03-douyin-complete.png | **本批 TikTok 对照点**。首访是深色「精选」信息流（`/jingxuan`），仅有登录按钮。Reload：r03 整页深蓝灰 (22,24,35) var=0，随后深色卡片。**没有 gray=255 空 body 白闪**。1.0.1 `hasSubstantialContent()` 把空壳按未就绪处理。Reload 后出现白色登录弹层，按登录墙计，不改首屏深色结论。Console：站点 uncaught promise + SW 注册失败。 |
| 4 | qq.com | https://www.qq.com/ | 浅色 | 混合 | 否 | 深 | 否 | 是 | 否 | 否 | 通过 | 04-qq-overlay.png；04-qq-complete.png | 腾讯网深色顶栏 + 浅色正文。Reload r02 深遮罩（Helium Helper 本地网络权限框叠在上面，已点「不允许」），随后浅色正文。Console：`h.trace.qq.com ERR_CONNECTION_CLOSED`。 |
| 5 | deepseek.com | https://www.deepseek.com/ | 未知 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 05-deepseek-overlay.png；05-deepseek-complete.png | 营销落地页「探索未至之境」，淡蓝白。12 帧全是 gray≈228 浅底，浅色遮罩与页面分不开。Console：`collect-rangers ERR_CONNECTION_CLOSED`。 |
| 6 | chat.deepseek.com | https://chat.deepseek.com/ | 未知 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 06-chat-deepseek-overlay.png；06-chat-deepseek-complete.png | 跳 `/sign_in` 深色登录墙（手机号/微信）。连拍全程 tl/mid≈(21,21,23)，无白帧。Console：`color_scheme=dark`、rangers 遥测。只测登录前。 |
| 7 | xiaohongshu.com | https://www.xiaohongshu.com/ | 浅色 | 混合 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 07-xiaohongshu-overlay.png；07-xiaohongshu-complete.png | `/explore` 浅色瀑布流 + 深色登录弹层。Reload r02 `#121212`（gray=18, var=0），r03 站点近黑 (10,10,10)，随后弹层+内容。无白闪。Console：`chrome-extension://invalid ERR_FAILED`，不是脚本。 |
| 8 | taobao.com | https://www.taobao.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 08-taobao-overlay.png；08-taobao-complete.png | 未出登录墙。橙红浅色首页。连拍 tl 一直是顶栏红 (255,0,2)，gray≈199，没抓到深遮罩。Console：`log.mmstat.com ERR_CONNECTION_CLOSED`。 |
| 9 | zhihu.com | https://www.zhihu.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 09-zhihu-overlay.png；09-zhihu-complete.png | 跳 `/signin?next=%2F` 浅色插画登录墙。Reload r03 纯白 `#fff` gray=255 var=0，是浅色遮罩/白底，不是深站白闪。Console：`MMV not available, fallback`。 |
| 10 | weibo.com | https://weibo.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 10-weibo-overlay.png；10-weibo-complete.png | 测的是 **weibo.com**，不是 weibo.cn。落地 `weibo.com/newlogin?...`，夜间地球头图 + 深色信息流，Helium 系统深色下实际首屏是深色。连拍 gray≈42–53，无白帧。Console：Elastic APM / CSP / PerformanceObserver，无脚本异常。测完 DevTools 仍是 **No throttling**。 |

## 复测

无失败站，**没有改** `anti-white-flash.user.js`，没有 bump，没有重新粘贴暴力猴。

## 共性问题

- 以实际首屏为准：Weibo 名单写浅色，Helium 系统深色下是深色信息流；QQ 是深顶栏+浅正文；DeepSeek 营销页浅、chat 登录墙深。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色中文站（百度、小红书、腾讯网）会看到一帧深遮罩再露浅色首屏。这是防白闪的保守代价，不是空 body 撤早。空白 body 仍然不能拿来改遮罩色（1.0.1 的 TikTok 修复）。
- **抖音没有复现 TikTok 失败**：空壳阶段是深蓝灰，不是 gray=255。1.0.1 `hasSubstantialContent()` 有效。
- 浅色遮罩在白底上几乎看不见（DeepSeek / 淘宝 / 知乎白帧）。要用 gray/var，不要只靠肉眼。
- 登录墙只看墙本身：抖音/小红书弹层、chat.deepseek / 知乎跳转登录。不要点进去登录。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 hydration、`chrome-extension://invalid` 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- Helium 可能弹出「查找本地网络设备」权限框，会污染连拍，点「不允许」。
- 不要点首页大图/活动位，B 站会进 `/blackboard/era/`。连拍前点 Cat URL 栏再 `cmd+r`。
- 测完保持 No throttling。本轮未开 Slow 4G。

## 脚本改动

无。1.0.1 已在暴力猴里，抖音对照通过，没有可复现的空 body 白闪需要再改通用逻辑。

## 给中文第 2 批（11–20）的规则

- 站点：豆包 / 网易 / 京东 / 天猫 / 巴哈 / 东方财富 / 豆瓣 / 搜狐 / hao123 / 1688。不要开始第 2 批，直到本报告被接手。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。
- 先确认 No throttling；只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回。
- 预期主题只作对照。系统深色时门户/微博/AI 站都可能跟系统。
- SPA / 信息流（豆包、可能的京东/天猫）：盯空 `#root` / 空 body 会不会提前撤遮罩。抖音这批已通过，若再出现 gray=255 var=0 才算失败。
- 浅色站出现一帧 `#121212` 再露白底：记 遮罩颜色=错色、二次闪=是，但不要当成 TikTok 那种白闪失败，除非遮罩卡住或挡住交互。
- 登录墙只测墙。巴哈是繁中浅色；1688 不要测 alibaba.com。
- 点 URL 栏再 reload，不要点运营大图。Helium 本地网络权限框点不允许。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
