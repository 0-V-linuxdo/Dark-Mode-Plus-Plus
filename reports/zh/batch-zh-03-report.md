# Dark Mode++ 中文批次 3（21–30）测试报告

环境：Mac Mini Helium + 暴力猴 2.49.0，脚本「通用防白闪」`@version 1.0.1`（28k，已启用，未重装）。系统深色。DevTools Disable cache 开，**No throttling / 已禁用节流模式**（测完仍是 No throttling）。登录墙只测未登录首屏。未测第 31 名及以后。未覆盖全球榜。

证据目录：`../../evidence/zh/batch03/`。每站最多 2 张证据图，`--max 700`。连拍只写 `/tmp/zh-b03`，用 ImageStat（gray/var）判断纯色遮罩。回复里不贴原图。

取值：实际首屏 `浅色/深色/混合`；白闪 / 遮罩卡住 / 二次闪 / 挡住交互 / 脚本报错 `是/否`；遮罩颜色 `浅/深/错色/无`；结论 `通过/失败/跳过`。

## 结果

| # | 站点 | URL | 预期主题 | 实际首屏 | 白闪 | 遮罩颜色 | 遮罩卡住 | 二次闪 | 挡住交互 | 脚本报错 | 结论 | 截图 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | alipay.com | https://www.alipay.com/ | 浅色 | 混合 | 否 | 无 | 否 | 否 | 否 | 否 | 通过 | 21-alipay-overlay.png；21-alipay-complete.png | 未出整页登录墙。首屏是全幅摄影英雄图（夜空/山脉轮播）+ 白页脚 + 青色「我是服务商/开发者/…」入口，右上仅「我已有支付宝账户 快速登录」链接。Reload 20 帧 page gray≈73–116、var>2000，无 `#121212`、无 gray=255 var=0 空 body。英雄图轮播是站点，不是遮罩。Console：`collect.alipay.com` / `video.alicdn.com ERR_CONNECTION_CLOSED`。 |
| 22 | aliyun.com | https://www.aliyun.com/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 22-aliyun-overlay.png；22-aliyun-complete.png | 浅色「Token Plan 全面升级」首页 + 阿里云 APP 顶栏。Reload r02 洗白骨架（APP 条消失、文案变淡，center gray≈225）后淡出彩色首页。未点立即订阅 / 小蜜。Console：tracker `ERR_CONNECTION_CLOSED`。 |
| 23 | toutiao.com | https://www.toutiao.com/ | 浅色 | 混合 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 23-toutiao-overlay.png；23-toutiao-complete.png | 落地 `toutiao.com/?wid=`。深色地球头图「今日头条」+ 浅色信息流 + 扫码登录弹层「登录后，头条更好玩」，按登录墙只测墙。**SPA**：首访约 3s 整页白空壳后出内容；reload r04 浅色洗白淡出（头图变灰）再回到混合首屏。白空壳在混合/浅色站不算 TikTok 那种深站白闪失败。未点登录/新闻。Console：字节遥测 `ERR_CONNECTION_CLOSED`。 |
| 24 | ifeng.com | https://www.ifeng.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 24-ifeng-overlay.png；24-ifeng-complete.png | 浅色凤凰网门户。Reload r01 整页 `#121212`（gray≈19.9, mid=(18,18,18)），r02 起浅色首页。系统深遮罩盖浅色站，一帧后撤。未点新闻。Console：站点/遥测 `ERR_CONNECTION_CLOSED`。 |
| 25 | iqiyi.com | https://www.iqiyi.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 25-iqiyi-overlay.png；25-iqiyi-complete.png | 预期浅色营销页，Helium 系统深色下实际是深色点播首页「小城良人」。**未进播放页**。Reload r02 深色骨架（侧栏+空内容，mid≈(17,18,20)），随后深色卡片；16 帧无 gray=255。首访有「登录会员特惠」弹层，按登录墙只看墙。Helium 通知权限点了「屏蔽」。Console：web-push / `ERR_CONNECTION_CLOSED`，是站点。 |
| 26 | lihkg.com | https://lihkg.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 26-lihkg-overlay.png；26-lihkg-complete.png | 落地 `/category/1` 吹水台。系统深色下实际深色帖列表；顶栏有「登入」但不是整页墙。首访整页近黑空壳后出帖（overlay 图）；reload 16 帧全程 gray≈37、mid=(29,29,29)，已是深色列表，无白帧。未点登入/帖子。Console：站点 `STOP! 唔好输入任何字` 警告、Cat `content ready`，无脚本异常。 |
| 27 | sina.com.cn | https://www.sina.com.cn/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 27-sina-overlay.png；27-sina-complete.png | **测的是 sina.com.cn，不是 sina.com**。浅色新浪首页。Reload r02 整页 `#121212`（gray≈19.9, mid=(18,18,18)），随后浅色门户。Console：站点 `performanceObserver is not defined`、`net::ERR_FAILED`、遥测 `ERR_CONNECTION_CLOSED`，不是脚本。未点新闻。 |
| 28 | udn.com | https://udn.com/ | 浅色 | 浅色 | 否 | 错色 | 否 | 是 | 否 | 否 | 通过 | 28-udn-overlay.png；28-udn-complete.png | 浅色联合新闻网（首页自带大视频，未点进去）。Reload r03 整页 `#121212` → r04 白骨架 gray≈227 mid=(250,250,250) → 浅色首页。深遮罩盖浅色站后再露白底，是错色二次闪，遮罩会撤。浅色站白骨架不算深站白闪。通知权限点了「屏蔽」。Console：`ERR_CONNECTION_CLOSED`。 |
| 29 | csdn.net | https://www.csdn.net/ | 浅色 | 浅色 | 否 | 浅 | 否 | 否 | 否 | 否 | 通过 | 29-csdn-overlay.png；29-csdn-complete.png | 浅色 CSDN 社区首页。首访有「登录后你可以 / 立即登录」弹层，按登录墙只测墙，未点登录。Reload r03 浅色洗白（登录弹层暂时没了）后出内容。Console：站点/遥测 `ERR_CONNECTION_CLOSED`。 |
| 30 | kimi.com | https://www.kimi.com/ | 浅色 | 深色 | 否 | 深 | 否 | 否 | 否 | 否 | 通过 | 30-kimi-overlay.png；30-kimi-complete.png | **本批 SPA 深色对照**。预期浅色，Helium 系统深色下是深色 KIMI 聊天 UI（Ask anything + Log in，不是整页登录墙）。Reload r04 整页 `#121212`（gray≈19.9, mid=(18,18,18)），随后深色首屏；18 帧全程 gray≈20–26，**没有 gray=255 空 body**。1.0.1 `hasSubstantialContent()` 有效。点的是 Helium 顶栏 URL，没有把地址贴进对话框。Console：遥测 `ERR_CONNECTION_CLOSED`。 |

## 复测

无失败站，**没有改** `anti-white-flash.user.js`，没有 bump，没有重新粘贴暴力猴。脚本仍是 1.0.1。

## 共性问题

- 以实际首屏为准：名单写浅色的站，系统深色下爱奇艺 / 连登 / Kimi 跟系统变深；支付宝是摄影英雄图混合页；头条是深头图+浅信息流。不要拿预期主题当失败条件。
- 系统深色 + 无早期主题信号时，脚本先盖 `#121212`。浅色站（凤凰、新浪.com.cn、联合新闻网）会看到一帧深遮罩再露浅色首屏。记 遮罩颜色=错色、二次闪=是，遮罩会撤就不算失败（同批次 2 东方财富）。
- 浅色遮罩在白底上几乎看不见（阿里云洗白、头条 r04、CSDN）。要用 gray/var，不要只靠肉眼。gray=255 var=0 空 body **且** 深色站才算白闪失败。
- SPA：头条首访白空壳约 3s 后出混合首屏，站点本身浅/混合，不按 TikTok 深站白闪失败。Kimi 深色 SPA 空壳阶段是 `#121212`/近黑，没有白帧，1.0.1 有效。
- 登录墙只看墙：头条扫码弹层、爱奇艺会员特惠、CSDN「立即登录」。支付宝 / 连登 / Kimi 只有登录入口，不是整页墙。不要点进去。
- 爱奇艺测的是首页点播台，不要进播放页。联合新闻网首页自带大视频，也不要点。
- 测 `sina.com.cn`，不要测 sina.com。
- Console 里 CSP、遥测 `ERR_CONNECTION_CLOSED`、站点 `performanceObserver` / `ERR_FAILED` / web-push 不算脚本报错。遮罩 `pointer-events: none`，本批没有挡住输入。
- 必须点 **Helium 顶栏 URL** 再回车 / `cmd+r`。不要把地址贴进页面输入框（Kimi 对话框、站点搜索）。Cat 侧栏搜索也会抢粘贴。
- Helium「显示通知」权限框点「屏蔽」。本批爱奇艺 / 连登 / 联合新闻网 / CSDN 都弹过。本地网络权限框点「不允许」（本轮未再弹出）。
- 不要长时间 Slow 4G。浅色遮罩抓不到就记 浅/无，不要为了拍遮罩开节流。测完保持 No throttling。
- DevTools 设备模式（Responsive）不要开。本轮一直是桌面布局。

## 脚本改动

无。1.0.1 已在暴力猴里，本批 10/10 通过，没有可复现的空 body 白闪需要再改通用逻辑。Kimi 深色 SPA 对照通过。

## 给中文第 4 批（31–40）的规则

- 站点：拼多多 / 香港01 / ETtoday / Mobile01 / 携程 / 优酷 / 360.cn / 搜狗 / 美团 / 快手。不要开始第 4 批，直到本报告被接手。
- 每站最多 2 张证据图，连拍只写 `/tmp`，ImageStat gray/var 判断纯色遮罩。回复里不要贴原图。新图 `--max 700`。
- 先确认 No throttling 和桌面布局（不要 Responsive 设备模式）。只在遮罩实在抓不到时短开 Slow 4G，测完立刻改回；浅色遮罩看不见不算失败。
- 预期主题只作对照。系统深色时门户/视频/AI/论坛仍可能跟系统，以实际首屏为准。快手名单是深色。
- 登录墙只测墙。拼多多可能跳 App。优酷首页偏浅，播放页另测。测 `360.cn`，不要测 360.com。携程测 ctrip.com，不要测 trip.com。
- 点 Helium 顶栏 URL 再 reload，不要把地址贴进页面搜索框。Helium 通知/本地网络权限框点屏蔽/不允许。
- 浅色站出现一帧 `#121212` 再露白底：记 错色 + 二次闪，遮罩会撤就不算失败。
- 不要覆盖全球榜 `top-100-results.md`。只回填 `top-100-zh-results.md` 对应行。
