# Dark Mode++ 中文站 Top 100

给 `anti-white-flash.user.js` 首屏测试用。本文件只做榜单聚合，不测脚本、不改 userscript。

面向**中文用户**的站点：总部在中国大陆 / 香港 / 台湾，或未登录默认界面为中文。按**全球访问量**排，不是「中国境内用户访问榜」。

## 规则

- 恰好 100 个不重复域名，10 批 × 10。
- 批次 1（1–10）= 已核实 Similarweb 站点全球名次最高的 10 个中文站：`baidu.com` → `weibo.com`。
- 1–40：Similarweb 站点页 **Global Rank**（快照 **2026-09-01**）。全表只用这一套全球名次排序，不把 Semrush / NetAPI 中国榜混进排序键。
- 41–100：没有可用的 Sep 站点 Global Rank，**来源一律写「估算」**，不假装有精确全球名次。
- 排除：CDN（`cloudfront.net`、`douyincdn.com`）、英文国际站（`tiktok.com`、`temu.com`、`aliexpress.com`、`trip.com`、`alibaba.com`）、韩日站、`google.com` / `apple.com` / `facebook.com`。
- 保留：百度 / 腾讯 / 阿里中国站 / 字节中国站 / B 站 / 微博 / 京东 / 网易 / 抖音 / 小红书 / 知乎；港台中文站（连登、Mobile01、PChome、udn 等）。NSFW / 博彩若能上榜则保留并标明。
- `deepseek.com` 与 `chat.deepseek.com`、`missav.ws` / `missav.ai` / `missav.live` 都保留，分开测。
- 预期主题 = **未登录默认首屏**，不是系统深浅色，也不是登录后偏好。

## 来源与日期

| 来源 | 数据月 | 页面/发布 | 覆盖 |
| --- | --- | --- | --- |
| [Similarweb Top Websites](https://www.similarweb.com/top-websites/) | 2026-09（快照 2026-09-01） | Last updated 2026-10-01 | 公开全球 1–50；中文站 `baidu.com` #19、`bilibili.com` #24 |
| [Similarweb: Top 100 Most Visited Websites Worldwide (August 2026)](https://www.similarweb.com/blog/research/market-research/most-visited-websites/) | 2026-08 | 约 2026-09-17 | 完整全球 1–100：`baidu` #18、`bilibili` #24、`douyin` #87、`deepseek` #89、`qq` #95 |
| [Similarweb Top Trending Websites](https://www.similarweb.com/top-websites/trending/) | 2026-09 | Last updated 2026-10-01 | `deepseek.com` 公开访问量#85、`chat.deepseek.com` #97、`douyin.com` #98 |
| Similarweb `/api/website/{domain}` | 2026-09（snapshotDate 2026-09-01） | 本表核实窗口 | 1–40 的 `ranking.globalRank` |
| Similarweb `/api/gettopwebsites?country=taiwan` / `hong-kong` | 2026-09 | 国家榜 Top 50 | 仅候选池；国家名次不是全球名次 |
| Similarweb 分类 Top 50（新闻/市场/搜索/AI/成人/财经/游戏/招聘/旅行） | 2026-09 | 分类榜 | 候选池 + 备注里的分类名次 |
| Similarweb `?country=china` | — | API 400 | 无法使用 |
| NetAPI / Semrush 中国受众榜 | — | 仅候选池 | **不进入排序键** |

公开 Similarweb 全球榜只给 50 条；中国国家榜接口不可用。因此 **41–100 不是官方全球名次**。

## 怎么排

**已核实站点 Global Rank（用于 1–40 排序）：**

公开月访问量名次和站点 Global Rank 不一致时，全表跟站点 GR，公开名次写在备注：

| 域名 | 站点 GR | 公开月访问量名次 | 说明 |
| --- | --- | --- | --- |
| `douyin.com` | 75 | Sep #98 | 站点 GR 更靠前 |
| `deepseek.com` | 115 | Sep #85 | 公开访问量更靠前 |
| `chat.deepseek.com` | 138 | Sep #97 | 公开访问量更靠前 |
| `qq.com` | 102 | Aug #95 | 站点 GR 略后 |

其余 1–40 的站点 GR 与公开榜方向一致（`baidu.com` GR#18 / 公开#19，`bilibili.com` GR#25 / 公开#24）。

**41–100 估算补位（仍按「更可能的全球流量」粗排，但没有 GR）：**

1. Sep 全球分类榜上的中文站（AI / 成人 / 搜索 / 游戏 / 招聘），按分类名次强弱排列。
2. Sep 台湾、香港 Top 50 里尚未入表的中文站，按该地榜名次合并插入。
3. 其余总部在中国、默认中文的常用站，只用候选池补满 100，不引用中国受众名次当全球名次。

未采用：华为 Autobound **Aug** GR#412（月份不对，不写入排序键）；腾讯 Autobound Mar 2026 GR（过旧）。Similarweb 站点 API 在约 15 次请求后 WAF 403，所以停止继续打站点 GR。

## 全表

| # | 域名 | 测试 URL | 分类 | 预期主题 | 来源 | 批次 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `baidu.com` | https://www.baidu.com/ | 搜索 | 浅色 | SW 站点 GR#18 | 1 | Sep 公开访问量全球#19；分类榜 搜索#4。未登录首页浅色。 |
| 2 | `bilibili.com` | https://www.bilibili.com/ | 视频 | 浅色 | SW 站点 GR#25 | 1 | Sep 公开访问量全球#24。首页粉白浅色；分区页另测。 |
| 3 | `douyin.com` | https://www.douyin.com/ | 短视频 | 深色 | SW 站点 GR#75 | 1 | Sep 公开访问量全球#98（站点 GR 更靠前）。未登录偏深；可能登录墙/地区限制。 |
| 4 | `qq.com` | https://www.qq.com/ | 门户 | 浅色 | SW 站点 GR#102 | 1 | Aug 公开访问量全球#95；分类榜 新闻#9。浅色门户。 |
| 5 | `deepseek.com` | https://www.deepseek.com/ | AI 聊天 | 未知 | SW 站点 GR#115 | 1 | Sep 公开访问量全球#85。落地页；与 chat.deepseek.com 分开测。 |
| 6 | `chat.deepseek.com` | https://chat.deepseek.com/ | AI 聊天 | 未知 | SW 站点 GR#138 | 1 | Sep 公开访问量全球#97；分类榜 AI#4。聊天 UI；可能登录墙。 |
| 7 | `xiaohongshu.com` | https://www.xiaohongshu.com/ | 社交 | 浅色 | SW 站点 GR#140 | 1 | 未登录偏浅；常登录墙。 |
| 8 | `taobao.com` | https://www.taobao.com/ | 电商 | 浅色 | SW 站点 GR#143 | 1 | 分类榜 市场#23。浅色；可能登录墙。 |
| 9 | `zhihu.com` | https://www.zhihu.com/ | 社区 | 浅色 | SW 站点 GR#253 | 1 | 未登录首页浅色；可能登录墙。 |
| 10 | `weibo.com` | https://weibo.com/ | 社交 | 浅色 | SW 站点 GR#301 | 1 | 浅色；常登录墙。不要测 weibo.cn。 |
| 11 | `doubao.com` | https://www.doubao.com/ | AI 聊天 | 浅色 | SW 站点 GR#322 | 2 | 豆包。未登录偏浅；可能登录墙。 |
| 12 | `163.com` | https://www.163.com/ | 新闻 | 浅色 | SW 站点 GR#329 | 2 | 分类榜 新闻#42。网易门户浅色。与 netease.com 分开测。 |
| 13 | `jd.com` | https://www.jd.com/ | 电商 | 浅色 | SW 站点 GR#332 | 2 | 分类榜 市场#45。浅色；可能登录墙。 |
| 14 | `tmall.com` | https://www.tmall.com/ | 电商 | 浅色 | SW 站点 GR#439 | 2 | 天猫浅色；可能跳登录/淘宝。 |
| 15 | `gamer.com.tw` | https://www.gamer.com.tw/ | 游戏 | 浅色 | SW 站点 GR#450 | 2 | 巴哈姆特。Sep 台湾#7；分类榜 游戏#9。浅色。 |
| 16 | `eastmoney.com` | https://www.eastmoney.com/ | 财经 | 浅色 | SW 站点 GR#514 | 2 | 分类榜 财经#26。浅色行情门户。 |
| 17 | `douban.com` | https://www.douban.com/ | 社区 | 浅色 | SW 站点 GR#536 | 2 | 浅色；可能登录墙。 |
| 18 | `sohu.com` | https://www.sohu.com/ | 新闻 | 浅色 | SW 站点 GR#956 | 2 | 搜狐门户浅色。 |
| 19 | `hao123.com` | https://www.hao123.com/ | 导航 | 浅色 | SW 站点 GR#1033 | 2 | 分类榜 搜索#23。浅色导航。 |
| 20 | `1688.com` | https://www.1688.com/ | 电商 | 浅色 | SW 站点 GR#1072 | 2 | 阿里巴巴国内批发。浅色；可能登录墙。不要测 alibaba.com。 |
| 21 | `alipay.com` | https://www.alipay.com/ | 支付 | 浅色 | SW 站点 GR#1090 | 3 | 分类榜 财经#48。浅色；登录墙。 |
| 22 | `aliyun.com` | https://www.aliyun.com/ | 云计算 | 浅色 | SW 站点 GR#1324 | 3 | 浅色营销/控制台入口。 |
| 23 | `toutiao.com` | https://www.toutiao.com/ | 新闻 | 浅色 | SW 站点 GR#1359 | 3 | 今日头条网页版浅色。 |
| 24 | `ifeng.com` | https://www.ifeng.com/ | 新闻 | 浅色 | SW 站点 GR#1379 | 3 | 凤凰网浅色。 |
| 25 | `iqiyi.com` | https://www.iqiyi.com/ | 视频 | 浅色 | SW 站点 GR#1754 | 3 | 爱奇艺营销/首页偏浅；播放页另测。 |
| 26 | `lihkg.com` | https://lihkg.com/ | 论坛 | 浅色 | SW 站点 GR#1784 | 3 | 连登。Sep 香港#9。浅色；可能登录墙。 |
| 27 | `sina.com.cn` | https://www.sina.com.cn/ | 新闻 | 浅色 | SW 站点 GR#1817 | 3 | 新浪门户。测 .com.cn，不要测 sina.com。 |
| 28 | `udn.com` | https://udn.com/ | 新闻 | 浅色 | SW 站点 GR#1858 | 3 | 联合新闻网。Sep 台湾#19。浅色。 |
| 29 | `csdn.net` | https://www.csdn.net/ | 技术 | 浅色 | SW 站点 GR#2136 | 3 | 浅色技术社区；可能登录墙。 |
| 30 | `kimi.com` | https://www.kimi.com/ | AI 聊天 | 浅色 | SW 站点 GR#2198 | 3 | 分类榜 AI#16。未登录偏浅；可能登录墙。 |
| 31 | `pinduoduo.com` | https://www.pinduoduo.com/ | 电商 | 浅色 | SW 站点 GR#2200 | 4 | 浅色橙白；可能跳 App。不要测 yangkeduo.com。 |
| 32 | `hk01.com` | https://www.hk01.com/ | 新闻 | 浅色 | SW 站点 GR#2262 | 4 | 香港01。Sep 香港#12。浅色。 |
| 33 | `ettoday.net` | https://www.ettoday.net/ | 新闻 | 浅色 | SW 站点 GR#2303 | 4 | ETtoday。Sep 台湾#20。浅色。 |
| 34 | `mobile01.com` | https://www.mobile01.com/ | 论坛 | 浅色 | SW 站点 GR#2483 | 4 | Sep 台湾#26。浅色论坛。 |
| 35 | `ctrip.com` | https://www.ctrip.com/ | 旅行 | 浅色 | SW 站点 GR#2871 | 4 | 携程中文站。不要测 trip.com。浅色；可能登录墙。 |
| 36 | `youku.com` | https://www.youku.com/ | 视频 | 浅色 | SW 站点 GR#3213 | 4 | 优酷首页偏浅；播放页另测。 |
| 37 | `360.cn` | https://www.360.cn/ | 安全 | 浅色 | SW 站点 GR#3721 | 4 | 360 官网。测 .cn，不要测 360.com。 |
| 38 | `sogou.com` | https://www.sogou.com/ | 搜索 | 浅色 | SW 站点 GR#3727 | 4 | 搜狗搜索首页浅色。 |
| 39 | `meituan.com` | https://www.meituan.com/ | 本地生活 | 浅色 | SW 站点 GR#5460 | 4 | 美团网页浅色；App 流量为主。 |
| 40 | `kuaishou.com` | https://www.kuaishou.com/ | 短视频 | 深色 | SW 站点 GR#6083 | 4 | 网页偏深；App 流量为主。可能登录墙。 |
| 41 | `chat.qwen.ai` | https://chat.qwen.ai/ | AI 聊天 | 未知 | 估算 | 5 | Sep 分类榜 AI#11（kimi 为 AI#16、GR#2198）。通义千问聊天 UI，默认中文；可能登录墙。无站点 GR。 |
| 42 | `missav.ws` | https://missav.ws/ | NSFW | 深色 | 估算 | 5 | NSFW。Sep 分类榜 成人#27；台湾#36、香港#36。与 missav.ai / missav.live 分开测。 |
| 43 | `so.com` | https://www.so.com/ | 搜索 | 浅色 | 估算 | 5 | 360 搜索。Sep 分类榜 搜索#32（hao123 为搜索#23、GR#1033）。无站点 GR。 |
| 44 | `douyu.com` | https://www.douyu.com/ | 直播 | 深色 | 估算 | 5 | 斗鱼。Sep 分类榜 游戏#27。未登录偏深；可能登录墙。 |
| 45 | `missav.ai` | https://missav.ai/ | NSFW | 深色 | 估算 | 5 | NSFW。Sep 分类榜 成人#40；台湾#42。与 .ws / .live 分开测。 |
| 46 | `missav.live` | https://missav.live/ | NSFW | 深色 | 估算 | 5 | NSFW。Sep 分类榜 成人#43。与 .ws / .ai 分开测。 |
| 47 | `104.com.tw` | https://www.104.com.tw/ | 招聘 | 浅色 | 估算 | 5 | Sep 分类榜 招聘#36；台湾#41。浅色。 |
| 48 | `nga.cn` | https://bbs.nga.cn/ | 论坛 | 浅色 | 估算 | 5 | NGA 玩家社区。Sep 分类榜 游戏#46。域名 nga.cn，测论坛首页。 |
| 49 | `huya.com` | https://www.huya.com/ | 直播 | 深色 | 估算 | 5 | 虎牙。Sep 分类榜 游戏#49。未登录偏深。 |
| 50 | `shopee.tw` | https://shopee.tw/ | 电商 | 浅色 | 估算 | 5 | Sep 台湾#9。虾皮台湾站，默认中文。不要测 shopee.com。 |
| 51 | `ptt.cc` | https://www.ptt.cc/ | 论坛 | 浅色 | 估算 | 6 | PTT。Sep 台湾#14。浅色；可能年龄/警告墙。 |
| 52 | `dcard.tw` | https://www.dcard.tw/ | 社交 | 浅色 | 估算 | 6 | Sep 台湾#15。浅色；可能登录墙。 |
| 53 | `momoshop.com.tw` | https://www.momoshop.com.tw/ | 电商 | 浅色 | 估算 | 6 | momo 购物。Sep 台湾#21。浅色。 |
| 54 | `setn.com` | https://www.setn.com/ | 新闻 | 浅色 | 估算 | 6 | 三立新闻。Sep 台湾#22。浅色。 |
| 55 | `hkjc.com` | https://www.hkjc.com/ | 博彩 | 浅色 | 估算 | 6 | 香港赛马会。Sep 香港#23。博彩；可能地区限制。 |
| 56 | `ltn.com.tw` | https://www.ltn.com.tw/ | 新闻 | 浅色 | 估算 | 6 | 自由时报。Sep 台湾#24。浅色。 |
| 57 | `stheadline.com` | https://www.stheadline.com/ | 新闻 | 浅色 | 估算 | 6 | 星岛头条。Sep 香港#24。浅色。 |
| 58 | `jable.tv` | https://jable.tv/ | NSFW | 深色 | 估算 | 6 | NSFW。Sep 台湾#27、香港#32。未进全球成人 Top 50。 |
| 59 | `wantgoo.com` | https://www.wantgoo.com/ | 财经 | 浅色 | 估算 | 6 | 玩股网。Sep 台湾#29。浅色。 |
| 60 | `cwa.gov.tw` | https://www.cwa.gov.tw/ | 天气 | 浅色 | 估算 | 6 | 交通部气象署。Sep 台湾#30。浅色政务。 |
| 61 | `pchome.com.tw` | https://www.pchome.com.tw/ | 电商 | 浅色 | 估算 | 7 | Sep 台湾#31。浅色。 |
| 62 | `czbooks.net` | https://czbooks.net/ | 小说 | 浅色 | 估算 | 7 | 小说站。Sep 台湾#32。浅色。 |
| 63 | `tvbs.com.tw` | https://www.tvbs.com.tw/ | 新闻 | 浅色 | 估算 | 7 | TVBS。Sep 台湾#33。不要另测 news.tvbs.com.tw。 |
| 64 | `chinatimes.com` | https://www.chinatimes.com/ | 新闻 | 浅色 | 估算 | 7 | 中时。Sep 台湾#34。浅色。 |
| 65 | `cmoney.tw` | https://www.cmoney.tw/ | 财经 | 浅色 | 估算 | 7 | Sep 台湾#35。浅色。 |
| 66 | `openrice.com` | https://www.openrice.com/ | 餐饮 | 浅色 | 估算 | 7 | 开饭喇。Sep 香港#35。可能跳地区站。 |
| 67 | `twkan.com` | https://twkan.com/ | 小说 | 浅色 | 估算 | 7 | 小说站。Sep 台湾#37。浅色。 |
| 68 | `xbanxia.cc` | https://xbanxia.cc/ | 小说 | 浅色 | 估算 | 7 | 小说站。Sep 台湾#38。浅色。 |
| 69 | `7-11.com.tw` | https://www.7-11.com.tw/ | 零售 | 浅色 | 估算 | 7 | 统一超商。Sep 台湾#39。浅色。 |
| 70 | `pixnet.net` | https://www.pixnet.net/ | 博客 | 浅色 | 估算 | 7 | 痞客邦。Sep 台湾#40。浅色。 |
| 71 | `hanime1.me` | https://hanime1.me/ | NSFW | 深色 | 估算 | 8 | NSFW。Sep 香港#40。未进全球成人 Top 50。 |
| 72 | `on.cc` | https://www.on.cc/ | 新闻 | 浅色 | 估算 | 8 | 东网。Sep 香港#41。浅色。 |
| 73 | `nownews.com` | https://www.nownews.com/ | 新闻 | 浅色 | 估算 | 8 | NOWnews。Sep 台湾#43。浅色。 |
| 74 | `hko.gov.hk` | https://www.hko.gov.hk/ | 天气 | 浅色 | 估算 | 8 | 香港天文台。Sep 香港#48。浅色政务。 |
| 75 | `tencent.com` | https://www.tencent.com/ | 公司 | 未知 | 估算 | 8 | 腾讯公司站，总部中国；国际页可能英文。无 Sep 站点 GR。 |
| 76 | `feishu.cn` | https://www.feishu.cn/ | 办公 | 浅色 | 估算 | 8 | 飞书中文站。浅色；登录墙。不要测 larkoffice.com。 |
| 77 | `huawei.com` | https://www.huawei.com/ | 公司 | 未知 | 估算 | 8 | 总部中国，故收录。国际站常英文。Autobound Aug GR#412 未当作 Sep 核实。 |
| 78 | `cctv.com` | https://www.cctv.com/ | 新闻 | 浅色 | 估算 | 8 | 央视网。浅色。无 Sep 站点 GR。 |
| 79 | `netease.com` | https://www.netease.com/ | 公司 | 未知 | 估算 | 8 | 网易公司站，可能英文。中文门户已测 163.com。 |
| 80 | `chsi.com.cn` | https://www.chsi.com.cn/ | 教育 | 浅色 | 估算 | 8 | 学信网。浅色政务。 |
| 81 | `dingtalk.com` | https://www.dingtalk.com/ | 办公 | 浅色 | 估算 | 9 | 钉钉。浅色；登录墙。 |
| 82 | `xiaomi.com.cn` | https://www.xiaomi.com.cn/ | 电商 | 浅色 | 估算 | 9 | 小米中国站。不要测 mi.com（国际商店常英文）。 |
| 83 | `cnki.net` | https://www.cnki.net/ | 学术 | 浅色 | 估算 | 9 | 中国知网。浅色；可能登录/机构墙。 |
| 84 | `woa.com` | https://woa.com/ | 办公 | 未知 | 估算 | 9 | 企业微信相关域；可能跳 work.weixin.qq.com。weixin.qq.com 无 Similarweb 数据，不单列。 |
| 85 | `hupu.com` | https://www.hupu.com/ | 体育 | 浅色 | 估算 | 9 | 虎扑。浅色社区。 |
| 86 | `gitee.com` | https://gitee.com/ | 开发 | 浅色 | 估算 | 9 | 浅色；可能登录墙。 |
| 87 | `51job.com` | https://www.51job.com/ | 招聘 | 浅色 | 估算 | 9 | 前程无忧。浅色。 |
| 88 | `autohome.com.cn` | https://www.autohome.com.cn/ | 汽车 | 浅色 | 估算 | 9 | 汽车之家。浅色。 |
| 89 | `zhibo8.com` | https://www.zhibo8.com/ | 体育 | 浅色 | 估算 | 9 | 直播吧。浅色。 |
| 90 | `zhipin.com` | https://www.zhipin.com/ | 招聘 | 浅色 | 估算 | 9 | BOSS 直聘。浅色；可能登录墙。 |
| 91 | `12306.cn` | https://www.12306.cn/index/ | 旅行 | 浅色 | 估算 | 10 | 铁路 12306。浅色；高峰可能慢/验证码。 |
| 92 | `quark.cn` | https://www.quark.cn/ | 搜索 | 浅色 | 估算 | 10 | 夸克。浅色；可能偏 App/营销页。 |
| 93 | `v2ex.com` | https://www.v2ex.com/ | 论坛 | 浅色 | 估算 | 10 | 浅色；可能登录墙。 |
| 94 | `qidian.com` | https://www.qidian.com/ | 小说 | 浅色 | 估算 | 10 | 起点中文网。浅色；可能登录墙。 |
| 95 | `juejin.cn` | https://juejin.cn/ | 技术 | 浅色 | 估算 | 10 | 掘金。浅色。 |
| 96 | `xueqiu.com` | https://xueqiu.com/ | 财经 | 浅色 | 估算 | 10 | 雪球。浅色；可能登录墙。 |
| 97 | `gamersky.com` | https://www.gamersky.com/ | 游戏 | 浅色 | 估算 | 10 | 游民星空。浅色。 |
| 98 | `zaobao.com.sg` | https://www.zaobao.com.sg/ | 新闻 | 浅色 | 估算 | 10 | 联合早报。总部新加坡，默认中文界面所以收录。浅色。 |
| 99 | `goofish.com` | https://www.goofish.com/ | 闲置 | 浅色 | 估算 | 10 | 闲鱼网页版。浅色；可能登录墙/跳 App。 |
| 100 | `fanqienovel.com` | https://fanqienovel.com/ | 小说 | 浅色 | 估算 | 10 | 番茄小说。浅色；可能登录墙/跳 App。 |

## 特殊域名

| 域名 | 说明 |
| --- | --- |
| `deepseek.com` / `chat.deepseek.com` | 落地页 vs 聊天 UI，分开测。 |
| `chat.qwen.ai` | 通义千问聊天；分类榜有、站点 GR 无，故为估算。 |
| `missav.ws` / `missav.ai` / `missav.live` | 三个 NSFW 域名都在分类榜/地区榜上，分开测。 |
| `ctrip.com` | 携程中文站。不要测 `trip.com`。 |
| `1688.com` | 阿里国内批发。不要测 `alibaba.com` / `aliexpress.com`。 |
| `shopee.tw` | 台湾中文站。不要测 `shopee.com`。 |
| `sina.com.cn` | 新浪门户。不要测 `sina.com`。 |
| `360.cn` | 360 中国站。不要测 `360.com`。 |
| `xiaomi.com.cn` | 小米中国站。不要测 `mi.com`。 |
| `163.com` / `netease.com` | 门户 vs 公司站，分开测。 |
| `weibo.com` | 不要测 `weibo.cn`。 |
| `nga.cn` | 表内域名跟分类榜；测试 URL 用 `https://bbs.nga.cn/`。 |
| `pinduoduo.com` | 不要测 `yangkeduo.com`。 |
| `woa.com` | 企业微信相关域，可能跳转。`weixin.qq.com` 无 Similarweb 数据，不单列。 |
| `zaobao.com.sg` | 联合早报。总部新加坡，但默认中文界面。 |
| `huawei.com` | 总部中国所以收录；国际首页常英文。 |

## NSFW / 博彩

- NSFW：missav.ws, missav.ai, missav.live, jable.tv, hanime1.me
- 博彩：hkjc.com（香港赛马会）

## 校验

- 行数：100
- 唯一域名：100
- 批次：1–10, 11–20, …, 91–100，每批 10 个
- 批次 1：全球名次已核实的前 10 个中文站（不是口诀里的百度→知乎手排）
- 1–40 来源均为 `SW 站点 GR#…`；41–100 来源均为 `估算`
