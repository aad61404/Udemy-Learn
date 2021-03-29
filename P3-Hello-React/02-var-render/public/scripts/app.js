'use strict';

console.log('App.js is running');
// src/app.js: Adjacent JSX elements must be wrapped in an enclosing tag (7:38)
// JSX - JavaScript XML


var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is JSX from.app.js!'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item one'
    ),
    React.createElement(
      'li',
      null,
      'item two'
    ),
    React.createElement(
      'li',
      null,
      'item three'
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
