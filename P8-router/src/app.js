// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashbaord component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add component
    </div>
)

const EditExpensePage = () => {
    <div>
        This is from my edit expense component
    </div>
}

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
)

const NotFoundPage = () => (
    <div>
        404
    </div>
)

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/eidt" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes , document.getElementById('app'));


// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi. My name is ${this.name}.`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi. My name is ${this.name}.`;
//   }
// }
// const newSyntax = new NewSyntax()
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
// const template = <p>This is JS from webpack</p>
// ReactDOM.render(template, document.getElementById('app'));

// import validator from 'validator';
// console.log(validator.isEmail('test'));
// console.log(validator.isEmail('asd@gmail.com'));


// import subtract , { square, add } from './utils.js';
// import isSenior , { isAdult, canDrink } from './person.js';

// console.log('app.js is running');
// console.log(square(2));
// console.log(add(2,3));
// console.log(isAdult(15))
// console.log(isAdult(18))
// console.log(canDrink(20))
// console.log(canDrink(21))
// console.log(subtract(100, 81));
// console.log(isSenior(50))
// console.log(isSenior(65))

