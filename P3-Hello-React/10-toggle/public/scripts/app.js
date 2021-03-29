'use strict';

/*
babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
*/
var isShow = true;
var appRoot = document.getElementById('app');

var changeIsShow = function changeIsShow() {
    isShow = !isShow;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: changeIsShow },
            isShow ? 'Show details' : 'Hidden'
        ),
        React.createElement(
            'p',
            null,
            isShow ? 'Hey. These are some details you can see now!' : ''
        )
    );
    ReactDOM.render(jsx, appRoot);
};

render();
