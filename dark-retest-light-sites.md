# 深色系统 · 浅色首屏站点复测

范围：全球榜 + 中文榜里，**实际首屏=浅色** 且原结论=通过 的站点，按首次出现去重。
共 124 站，13 批（每批最多 10 站）。脚本 **1.0.3**。系统必须深色。
不要覆盖 `top-100-*.md` / `top-100-zh-*.md`。

判定：系统深色时脚本应工作，不应 `return`。浅站先 `#121212` 再露白 = 错色/二次闪，遮罩会撤就算通过。完全不建遮罩且 `prefers-color-scheme: dark` 为 false，视为没切到深色或误跳过。

## 批次 1（L001–L010）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | global | 3 | facebook.com | https://www.facebook.com/ | 无 | 否 |
| 2 | global | 7 | reddit.com | https://www.reddit.com/ | 无 | 是 |
| 3 | global | 9 | whatsapp.com | https://www.whatsapp.com/ | 浅 | 否 |
| 4 | global | 12 | yahoo.co.jp | https://www.yahoo.co.jp/ | 错色 | 是 |
| 5 | global | 14 | yandex.ru | https://yandex.ru/ | 浅 | 否 |
| 6 | global | 15 | amazon.com | https://www.amazon.com/ | 错色 | 是 |
| 7 | global | 17 | linkedin.com | https://www.linkedin.com/ | 错色 | 是 |
| 8 | global | 18 | cloud.microsoft | https://cloud.microsoft/ | 错色 | 是 |
| 9 | global | 19 | baidu.com | https://www.baidu.com/ | 错色 | 是 |
| 10 | global | 20 | pinterest.com | https://www.pinterest.com/ | 错色 | 是 |

```
https://www.facebook.com/
https://www.reddit.com/
https://www.whatsapp.com/
https://www.yahoo.co.jp/
https://yandex.ru/
https://www.amazon.com/
https://www.linkedin.com/
https://cloud.microsoft/
https://www.baidu.com/
https://www.pinterest.com/
```

## 批次 2（L011–L020）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 11 | global | 21 | naver.com | https://www.naver.com/ | 错色 | 是 |
| 12 | global | 23 | live.com | https://outlook.live.com/ | 错色 | 是 |
| 13 | global | 24 | bilibili.com | https://www.bilibili.com/ | 错色 | 是 |
| 14 | global | 26 | microsoft.com | https://www.microsoft.com/ | 错色 | 是 |
| 15 | global | 29 | temu.com | https://www.temu.com/ | 错色 | 是 |
| 16 | global | 30 | dzen.ru | https://dzen.ru/ | 浅 | 否 |
| 17 | global | 33 | canva.com | https://www.canva.com/ | 浅 | 否 |
| 18 | global | 34 | weather.com | https://weather.com/ | 错色 | 是 |
| 19 | global | 36 | xvideos.com | https://www.xvideos.com/ | 错色 | 是 |
| 20 | global | 37 | news.yahoo.co.jp | https://news.yahoo.co.jp/ | 错色 | 是 |

```
https://www.naver.com/
https://outlook.live.com/
https://www.bilibili.com/
https://www.microsoft.com/
https://www.temu.com/
https://dzen.ru/
https://www.canva.com/
https://weather.com/
https://www.xvideos.com/
https://news.yahoo.co.jp/
```

## 批次 3（L021–L030）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 21 | global | 38 | samsung.com | https://www.samsung.com/ | 错色 | 是 |
| 22 | global | 40 | fandom.com | https://www.fandom.com/ | 浅 | 否 |
| 23 | global | 41 | globo.com | https://www.globo.com/ | 错色 | 是 |
| 24 | global | 46 | brave.com | https://brave.com/ | 浅 | 否 |
| 25 | global | 48 | t.me | https://t.me/ | 浅 | 否 |
| 26 | global | 50 | ebay.com | https://www.ebay.com/ | 错色 | 是 |
| 27 | global | 55 | nytimes.com | https://www.nytimes.com/ | 浅 | 否 |
| 28 | global | 56 | aliexpress.com | https://www.aliexpress.com/ | 错色 | 是 |
| 29 | global | 57 | booking.com | https://www.booking.com/ | 错色 | 是 |
| 30 | global | 58 | ozon.ru | https://www.ozon.ru/ | 错色 | 是 |

```
https://www.samsung.com/
https://www.fandom.com/
https://www.globo.com/
https://brave.com/
https://t.me/
https://www.ebay.com/
https://www.nytimes.com/
https://www.aliexpress.com/
https://www.booking.com/
https://www.ozon.ru/
```

## 批次 4（L031–L040）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 31 | global | 60 | instructure.com | https://www.instructure.com/ | 错色 | 是 |
| 32 | global | 62 | walmart.com | https://www.walmart.com/ | 错色 | 是 |
| 33 | global | 63 | amazon.in | https://www.amazon.in/ | 错色 | 是 |
| 34 | global | 65 | office.com | https://www.office.com/ | 错色 | 是 |
| 35 | global | 66 | bbc.co.uk | https://www.bbc.co.uk/ | 无 | 否 |
| 36 | global | 67 | docomo.ne.jp | https://www.docomo.ne.jp/ | 错色 | 是 |
| 37 | global | 69 | amazon.co.jp | https://www.amazon.co.jp/ | 错色 | 是 |
| 38 | global | 70 | paypal.com | https://www.paypal.com/ | 错色 | 是 |
| 39 | global | 72 | etsy.com | https://www.etsy.com/ | 错色 | 是 |
| 40 | global | 74 | adobe.com | https://www.adobe.com/ | 无 | 否 |

```
https://www.instructure.com/
https://www.walmart.com/
https://www.amazon.in/
https://www.office.com/
https://www.bbc.co.uk/
https://www.docomo.ne.jp/
https://www.amazon.co.jp/
https://www.paypal.com/
https://www.etsy.com/
https://www.adobe.com/
```

## 批次 5（L041–L050）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 41 | global | 76 | bbc.com | https://www.bbc.com/ | 错色 | 是 |
| 42 | global | 77 | chaturbate.com | https://chaturbate.com/ | 错色 | 是 |
| 43 | global | 79 | amazon.de | https://www.amazon.de/ | 错色 | 是 |
| 44 | global | 81 | rakuten.co.jp | https://www.rakuten.co.jp/ | 错色 | 是 |
| 45 | global | 82 | onlyfans.com | https://onlyfans.com/ | 错色 | 是 |
| 46 | global | 83 | telegram.org | https://telegram.org/ | 浅 | 否 |
| 47 | global | 84 | ok.ru | https://ok.ru/ | 浅 | 否 |
| 48 | global | 85 | deepseek.com | https://www.deepseek.com/ | 无 | 否 |
| 49 | global | 87 | usps.com | https://www.usps.com/ | 错色 | 是 |
| 50 | global | 90 | scribd.com | https://www.scribd.com/ | 错色 | 是 |

```
https://www.bbc.com/
https://chaturbate.com/
https://www.amazon.de/
https://www.rakuten.co.jp/
https://onlyfans.com/
https://telegram.org/
https://ok.ru/
https://www.deepseek.com/
https://www.usps.com/
https://www.scribd.com/
```

## 批次 6（L051–L060）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 51 | global | 91 | amazon.co.uk | https://www.amazon.co.uk/ | 错色 | 是 |
| 52 | global | 95 | dcinside.com | https://www.dcinside.com/ | 无 | 否 |
| 53 | global | 96 | zillow.com | https://www.zillow.com/ | 错色 | 是 |
| 54 | global | 99 | messenger.com | https://www.messenger.com/ | 错色 | 是 |
| 55 | global | 100 | shop.app | https://shop.app/ | 错色 | 是 |
| 56 | zh | 8 | taobao.com | https://www.taobao.com/ | 浅 | 否 |
| 57 | zh | 9 | zhihu.com | https://www.zhihu.com/ | 浅 | 否 |
| 58 | zh | 11 | doubao.com | https://www.doubao.com/ | 浅 | 否 |
| 59 | zh | 12 | 163.com | https://www.163.com/ | 浅 | 否 |
| 60 | zh | 13 | jd.com | https://www.jd.com/ | 浅 | 否 |

```
https://www.amazon.co.uk/
https://www.dcinside.com/
https://www.zillow.com/
https://www.messenger.com/
https://shop.app/
https://www.taobao.com/
https://www.zhihu.com/
https://www.doubao.com/
https://www.163.com/
https://www.jd.com/
```

## 批次 7（L061–L070）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 61 | zh | 14 | tmall.com | https://www.tmall.com/ | 浅 | 否 |
| 62 | zh | 15 | gamer.com.tw | https://www.gamer.com.tw/ | 浅 | 否 |
| 63 | zh | 16 | eastmoney.com | https://www.eastmoney.com/ | 错色 | 是 |
| 64 | zh | 17 | douban.com | https://www.douban.com/ | 浅 | 否 |
| 65 | zh | 18 | sohu.com | https://www.sohu.com/ | 浅 | 否 |
| 66 | zh | 19 | hao123.com | https://www.hao123.com/ | 浅 | 否 |
| 67 | zh | 20 | 1688.com | https://www.1688.com/ | 浅 | 否 |
| 68 | zh | 22 | aliyun.com | https://www.aliyun.com/ | 浅 | 否 |
| 69 | zh | 24 | ifeng.com | https://www.ifeng.com/ | 错色 | 是 |
| 70 | zh | 27 | sina.com.cn | https://www.sina.com.cn/ | 错色 | 是 |

```
https://www.tmall.com/
https://www.gamer.com.tw/
https://www.eastmoney.com/
https://www.douban.com/
https://www.sohu.com/
https://www.hao123.com/
https://www.1688.com/
https://www.aliyun.com/
https://www.ifeng.com/
https://www.sina.com.cn/
```

## 批次 8（L071–L080）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 71 | zh | 28 | udn.com | https://udn.com/ | 错色 | 是 |
| 72 | zh | 29 | csdn.net | https://www.csdn.net/ | 浅 | 否 |
| 73 | zh | 31 | pinduoduo.com | https://www.pinduoduo.com/ | 浅 | 否 |
| 74 | zh | 32 | hk01.com | https://www.hk01.com/ | 无 | 否 |
| 75 | zh | 33 | ettoday.net | https://www.ettoday.net/ | 错色 | 是 |
| 76 | zh | 35 | ctrip.com | https://www.ctrip.com/ | 浅 | 否 |
| 77 | zh | 37 | 360.cn | https://www.360.cn/ | 无 | 否 |
| 78 | zh | 38 | sogou.com | https://www.sogou.com/ | 浅 | 否 |
| 79 | zh | 39 | meituan.com | https://www.meituan.com/ | 无 | 否 |
| 80 | zh | 43 | so.com | https://www.so.com/ | 错色 | 是 |

```
https://udn.com/
https://www.csdn.net/
https://www.pinduoduo.com/
https://www.hk01.com/
https://www.ettoday.net/
https://www.ctrip.com/
https://www.360.cn/
https://www.sogou.com/
https://www.meituan.com/
https://www.so.com/
```

## 批次 9（L081–L090）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 81 | zh | 47 | 104.com.tw | https://www.104.com.tw/ | 浅 | 否 |
| 82 | zh | 48 | nga.cn | https://bbs.nga.cn/ | 浅 | 否 |
| 83 | zh | 50 | shopee.tw | https://shopee.tw/ | 浅 | 否 |
| 84 | zh | 52 | dcard.tw | https://www.dcard.tw/ | 浅 | 否 |
| 85 | zh | 53 | momoshop.com.tw | https://www.momoshop.com.tw/ | 错色 | 是 |
| 86 | zh | 54 | setn.com | https://www.setn.com/ | 错色 | 是 |
| 87 | zh | 55 | hkjc.com | https://www.hkjc.com/ | 无 | 否 |
| 88 | zh | 56 | ltn.com.tw | https://www.ltn.com.tw/ | 错色 | 是 |
| 89 | zh | 57 | stheadline.com | https://www.stheadline.com/ | 浅 | 否 |
| 90 | zh | 60 | cwa.gov.tw | https://www.cwa.gov.tw/ | 错色 | 是 |

```
https://www.104.com.tw/
https://bbs.nga.cn/
https://shopee.tw/
https://www.dcard.tw/
https://www.momoshop.com.tw/
https://www.setn.com/
https://www.hkjc.com/
https://www.ltn.com.tw/
https://www.stheadline.com/
https://www.cwa.gov.tw/
```

## 批次 10（L091–L100）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 91 | zh | 61 | pchome.com.tw | https://www.pchome.com.tw/ | 错色 | 是 |
| 92 | zh | 62 | czbooks.net | https://czbooks.net/ | 错色 | 是 |
| 93 | zh | 63 | tvbs.com.tw | https://www.tvbs.com.tw/ | 错色 | 是 |
| 94 | zh | 64 | chinatimes.com | https://www.chinatimes.com/ | 错色 | 是 |
| 95 | zh | 66 | openrice.com | https://www.openrice.com/ | 错色 | 是 |
| 96 | zh | 67 | twkan.com | https://twkan.com/ | 错色 | 是 |
| 97 | zh | 68 | xbanxia.cc | https://xbanxia.cc/ | 浅 | 否 |
| 98 | zh | 69 | 7-11.com.tw | https://www.7-11.com.tw/ | 错色 | 是 |
| 99 | zh | 70 | pixnet.net | https://www.pixnet.net/ | 浅 | 否 |
| 100 | zh | 72 | on.cc | https://www.on.cc/ | 无 | 否 |

```
https://www.pchome.com.tw/
https://czbooks.net/
https://www.tvbs.com.tw/
https://www.chinatimes.com/
https://www.openrice.com/
https://twkan.com/
https://xbanxia.cc/
https://www.7-11.com.tw/
https://www.pixnet.net/
https://www.on.cc/
```

## 批次 11（L101–L110）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 101 | zh | 73 | nownews.com | https://www.nownews.com/ | 浅 | 否 |
| 102 | zh | 74 | hko.gov.hk | https://www.hko.gov.hk/ | 错色 | 是 |
| 103 | zh | 75 | tencent.com | https://www.tencent.com/ | 错色 | 是 |
| 104 | zh | 77 | huawei.com | https://www.huawei.com/ | 错色 | 是 |
| 105 | zh | 78 | cctv.com | https://www.cctv.com/ | 错色 | 是 |
| 106 | zh | 79 | netease.com | https://www.netease.com/ | 浅 | 否 |
| 107 | zh | 80 | chsi.com.cn | https://www.chsi.com.cn/ | 无 | 否 |
| 108 | zh | 81 | dingtalk.com | https://www.dingtalk.com/ | 错色 | 是 |
| 109 | zh | 83 | cnki.net | https://www.cnki.net/ | 错色 | 是 |
| 110 | zh | 85 | hupu.com | https://www.hupu.com/ | 错色 | 是 |

```
https://www.nownews.com/
https://www.hko.gov.hk/
https://www.tencent.com/
https://www.huawei.com/
https://www.cctv.com/
https://www.netease.com/
https://www.chsi.com.cn/
https://www.dingtalk.com/
https://www.cnki.net/
https://www.hupu.com/
```

## 批次 12（L111–L120）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 111 | zh | 86 | gitee.com | https://gitee.com/ | 错色 | 是 |
| 112 | zh | 87 | 51job.com | https://www.51job.com/ | 无 | 否 |
| 113 | zh | 88 | autohome.com.cn | https://www.autohome.com.cn/ | 无 | 否 |
| 114 | zh | 89 | zhibo8.com | https://www.zhibo8.com/ | 浅 | 否 |
| 115 | zh | 90 | zhipin.com | https://www.zhipin.com/ | 错色 | 是 |
| 116 | zh | 91 | 12306.cn | https://www.12306.cn/index/ | 无 | 否 |
| 117 | zh | 92 | quark.cn | https://www.quark.cn/ | 错色 | 是 |
| 118 | zh | 93 | v2ex.com | https://www.v2ex.com/ | 无 | 否 |
| 119 | zh | 94 | qidian.com | https://www.qidian.com/ | 错色 | 是 |
| 120 | zh | 95 | juejin.cn | https://juejin.cn/ | 浅 | 否 |

```
https://gitee.com/
https://www.51job.com/
https://www.autohome.com.cn/
https://www.zhibo8.com/
https://www.zhipin.com/
https://www.12306.cn/index/
https://www.quark.cn/
https://www.v2ex.com/
https://www.qidian.com/
https://juejin.cn/
```

## 批次 13（L121–L124）

| L# | 来源 | 原# | 站点 | URL | 原遮罩 | 原二次闪 |
| --- | --- | --- | --- | --- | --- | --- |
| 121 | zh | 96 | xueqiu.com | https://xueqiu.com/ | 错色 | 是 |
| 122 | zh | 98 | zaobao.com.sg | https://www.zaobao.com.sg/ | 无 | 否 |
| 123 | zh | 99 | goofish.com | https://www.goofish.com/ | 浅 | 否 |
| 124 | zh | 100 | fanqienovel.com | https://fanqienovel.com/ | 浅 | 否 |

```
https://xueqiu.com/
https://www.zaobao.com.sg/
https://www.goofish.com/
https://fanqienovel.com/
```

