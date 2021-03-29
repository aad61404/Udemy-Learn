/*
開發指令
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-serer public
*/

console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
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

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>

      
      <ol>
        {/* map over app.options getting back an array of lis (set key and text) */}
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>

      {/* {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>;
        })
      } */}
      {/* {
        [<p>a</p>, <p>b</p>, <p>c</p>]
      } */}
      {/* react.development.js:245 Warning: Each child in a list should have a unique "key" prop.
 */}
      {/* {
        [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
      } */}

      <form onSubmit={onFormSumbit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

}

render();


