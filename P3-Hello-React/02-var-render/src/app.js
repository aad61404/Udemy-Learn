
console.log('App.js is running');
// src/app.js: Adjacent JSX elements must be wrapped in an enclosing tag (7:38)
// JSX - JavaScript XML


var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is JSX from.app.js!</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
      <li>item three</li>
    </ol>
  </div>
)
;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);