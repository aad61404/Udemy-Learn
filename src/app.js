const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
};

const func = function() {
  console.log(this)
}
func(); // undefined

// const getName = obj.getName.bind(obj);
const getName = obj.getName.bind({ name: 'Andrew'});
console.log(getName()); // can't read property 'name' of undefined
// the problem is the context its ran in is very different

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a compouter';
    const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    // return <p>This is from Header</p>;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.subtitle}</h1>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do ?</button>
      </div>
    )
  }
}

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup OnCllick to fire the method

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this); // 不寫在render 比較efficient
  }
  handleRemoveAll() { // 測試RemoveAll 功能
    console.log(this.props.options);
    // alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
        <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
        { 
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

// 1. Setup the form with ext input and submit button
// 2. Wire up on Submit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// Options -> Options componet here
// AddOption -> AddOption component here

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));