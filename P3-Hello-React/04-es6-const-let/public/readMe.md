使用
將./public/index-xxxxx改為index.html
使用下列指令即可測試
{}代表變數
babel src/ {xxxx.js} --out-file=public/scripts/app.js --presets=env,react --watch
live-server public