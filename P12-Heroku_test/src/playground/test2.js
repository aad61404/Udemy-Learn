import { createStore } from "redux";


function reducer(state = { value : 0}, action) {
    switch (action.type) {
        case "ADD":
            return { value: state.value + action.value};
        case "SUBTRACT":
            return { value: state.value - action.value};
        case "MULTIPLY":
            return { value: state.value * action.value};
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));



// store = 1
store.dispatch({
    type: "ADD",
    value: 4
  });
  // store = 5
  store.dispatch({
    type: "MULTIPLY",
    value: 3
  });
  // store = 15
  store.dispatch({
    type: "SUBTRACT",
    value: 5
  });
  // store = 10
  
  // for unknown types, the current state is returned
  store.dispatch({
    type: "UNKNOWN"
  });
  // store = 10