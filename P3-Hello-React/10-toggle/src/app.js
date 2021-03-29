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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const randomNum2 = Math.random() * app.options.length;
  const option = app.options[randomNum];
  console.log(randomNum);
  console.log('randomNum2:', randomNum2)
  alert(option)
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
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
      <button onClick={onRemoveAll}>Remove All</button>

      
      <ol>
        {/* map over app.options getting back an array of lis (set key and text) */}
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>

      <form onSubmit={onFormSumbit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

}

render();


