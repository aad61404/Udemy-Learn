/*
開發指令
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-serer public
*/

console.log('App.js is running');

const app = {
  title : 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

const onFormSumbit = (e) => {
  e.preventDefault();
  console.log('form submitted!');
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const appRoot = document.getElementById('app');
// create 'Remove all' button above list
// on click -> wipe the array -> rerender
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {/* <ol>
        <li>item one</li>
        <li>item two</li>
        <li>item three</li>
      </ol> */}
  
      <form onSubmit={onFormSumbit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

}

render();


