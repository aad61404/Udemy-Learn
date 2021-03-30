// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));





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

