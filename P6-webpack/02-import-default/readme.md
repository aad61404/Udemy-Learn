    "serve": "live-server public/",
    "build": "webpack --watch",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"


yarn add react@16.14.0 react-dom@16.140.
yarn add babel-core@6.25.0 babel-loader@7.1.1

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
    