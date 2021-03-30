    "serve": "live-server public/",
    "build": "webpack --watch",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"

刪除全遇
安裝local

執行
npm run build-babel
npm run serve

webpack 使用
yarn add webpack@3.1.0
npm run build

index.html
```
<div id="app"></div>
<script src="./bundle.js"></script>
```
    