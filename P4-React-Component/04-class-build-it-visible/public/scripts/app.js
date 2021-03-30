'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
babel src/playground/class-build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
*/

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.state = {
            toggle: true
        };
        _this.changeToggle = _this.changeToggle.bind(_this);
        return _this;
    }

    _createClass(Toggle, [{
        key: 'changeToggle',
        value: function changeToggle() {
            this.setState(function (prevState) {
                return {
                    toggle: !prevState.toggle
                };
            });
            // this.setState({
            //     toggle: !this.state.toggle
            // })
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.changeToggle },
                    this.state.toggle ? 'Show details' : 'Hidden'
                ),
                this.state.toggle && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Hey. These are some details you can see now!'
                    )
                ),
                React.createElement('p', null)
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('app'));
