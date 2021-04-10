import { createStore } from 'redux';

function counterReducer(state = 0 , action) {
    switch(action.type) {
        case 'ADD':
            return state + 1
        case 'DECREASE':
            return state - 1
        default :
            return state
    }
}

var store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))


store.dispatch({ type: 'ADD'})
store.dispatch({ type: 'ADD'})
store.dispatch({ type: 'DECREASE'})
