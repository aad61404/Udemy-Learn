/*
babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
*/
let isShow = true;
const appRoot = document.getElementById('app');

const changeIsShow = () => {
    isShow = !isShow
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
             <button onClick={changeIsShow}>{isShow ? 'Show details' : 'Hidden'}</button>
            <p>{isShow ?
            'Hey. These are some details you can see now!':
            ''
            }
            </p>
        </div>
    )
    ReactDOM.render(jsx, appRoot)
}

render()


