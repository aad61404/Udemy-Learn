/*
babel src/playground/class-build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
*/

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true,
        }
        this.changeToggle = this.changeToggle.bind(this);
    }
    changeToggle() {
        this.setState((prevState) =>{
            return {
                toggle: !prevState.toggle
            }
        })
        // this.setState({
        //     toggle: !this.state.toggle
        // })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.changeToggle}>
                {this.state.toggle ? 'Show details' : 'Hidden'}
                </button>

                    {
                        this.state.toggle && (
                            <div>
                                <p>Hey. These are some details you can see now!</p>
                            </div>
                        )
                    }
                <p>
                    {/* {
                        this.state.toggle ?
                        'Hey. These are some details you can see now!' :
                        ''
                    } */}
                </p>
            </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));