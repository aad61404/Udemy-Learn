/*
開發指令
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-serer public
*/
console.log('App.js is running');
// src/app.js: Adjacent JSX elements must be wrapped in an enclosing tag (7:38)
// JSX - JavaScript XML

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 'Here are your options" "No optionsj"

const app = {
  title : 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
      <li>item three</li>
    </ol>
  </div>
);

const user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}
const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    {(user.age &&  user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    {/* <p>Location: {user.location}</p> */}
  </div>
)

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}
const minusOne = () => {
  count--;
  renderCounterApp();
}
const reset = () => {
  count = 0;
  renderCounterApp();
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateThree, appRoot);
}

renderCounterApp()

// change template -> templateTwo -> templateThree for test
// ReactDOM.render(templateThree, appRoot);
