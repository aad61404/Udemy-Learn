/*
babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch
*/

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'Julie'
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
    
        if (!isNaN(count)) {
          this.setState(() => ({ count }));
        }
      }
    componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
    }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
        console.log('handleAddOne');
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        });
        console.log('handleMinusOne');
    }
    handleReset() {
        /* 狀況1 */
        this.setState(() => {
            return {
                count: 0,
            };
        });
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1 // asynchronous , 1 , 1 , 1
        //     }
        // })
        /* 狀況2 */
        /*
        this.setState({
            count: 0 
        })
        this.setState({
            count: this.state.count + 1 // 9 , 10 ,11... asychrous
        })
        */
        console.log('handleReset')
    }
    render() {
        return (
            <div>
                {this.state.name}
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Create three methods: handleAddOne, handleMinueOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor


ReactDOM.render(<Counter />, document.getElementById('app'));