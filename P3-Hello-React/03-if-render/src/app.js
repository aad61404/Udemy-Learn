
console.log('App.js is running');
// src/app.js: Adjacent JSX elements must be wrapped in an enclosing tag (7:38)
// JSX - JavaScript XML

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 'Here are your options" "No optionsj"

var app = {
  title : 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}
var template = (
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

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    {(user.age &&  user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    {/* <p>Location: {user.location}</p> */}
  </div>
)

var appRoot = document.getElementById('app');

// change template -> templateTwo
ReactDOM.render(template, appRoot);