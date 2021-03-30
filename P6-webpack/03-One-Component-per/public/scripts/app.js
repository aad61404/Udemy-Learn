'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById('app'));

// const template = <p>This is JS from webpack</p>
// ReactDOM.render(template, document.getElementById('app'));

// import validator from 'validator';
// console.log(validator.isEmail('test'));
// console.log(validator.isEmail('asd@gmail.com'));


// import subtract , { square, add } from './utils.js';
// import isSenior , { isAdult, canDrink } from './person.js';

// console.log('app.js is running');
// console.log(square(2));
// console.log(add(2,3));
// console.log(isAdult(15))
// console.log(isAdult(18))
// console.log(canDrink(20))
// console.log(canDrink(21))
// console.log(subtract(100, 81));
// console.log(isSenior(50))
// console.log(isSenior(65))
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
