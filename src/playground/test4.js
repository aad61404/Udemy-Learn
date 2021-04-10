import { createStore } from 'redux';

function counterReducer(state = 0 , action) {
    switch (action.type) {
        case "SET_NAME":
            return Object.assign({}, state, {
                name: action.name
            });
        default:
            return state;
    }
}

var store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))


store.dispatch({ type: 'ADD'})
store.dispatch({ type: 'ADD'})
store.dispatch({ type: 'DECREASE'})
