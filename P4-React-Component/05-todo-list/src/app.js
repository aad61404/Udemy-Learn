// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } else {
      this.setState((prevState) => {
        // prevState.options.push(option)
        return {
          options : prevState.options.concat(option),
        }
      })
    }

  }


  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a compouter';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
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
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do ?
        </button>
      </div>
    )
  }
}

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup OnCllick to fire the method

class Options extends React.Component {

  render() {
    return (
      <div>
        {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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
