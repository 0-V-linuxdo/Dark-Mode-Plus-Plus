# Agent Notes

## For Browsers
- Arc
- Zen
- Firefox Nightly
- Dia
- Tabbit
- Helium（本项目：Mac Mini + 暴力猴）

## Guidelines
- **No Bookmarklets:** The listed browsers do not support `javascript:` bookmarklets for page inspection or verification. Please do not attempt to use them.
- **Use DevTools:** Avoid using `osascript`; rely on DevTools instead.

## 角色：调度
- 本项目里带「调度 / leader」的 chat **只负责分派**，不自己改脚本、不自己操作 Mac Mini、不用 rdc。
- 实机验收、装脚本、点 Helium / 暴力猴 / Dark Reader，一律 `create_thread` 到本项目（Dark Mode Userscript，local）让新 chat 干。
- 同一时间只让一个 chat 用 Mini。开新验收前，先确认上一个 Mini chat 已停。
- 成功创建后在回复里发 `::created-thread{threadId="..."}`。
- 不要因为「自己会点」就越权；被要求验收时也是调度，不是上手。

## 更新脚本
- 更新脚本后，顺手把为此打开的网页和暴力猴页关掉（编辑器、仪表盘、安装确认页、测试页）。不要留着。
