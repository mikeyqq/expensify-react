import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  //YOU CAN USE SWITCH STATEMENT OR IF STATEMENT FOR THE ACTIONS COMING IN FROM DISPATCH
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
});

//This will run everytime there is an change to the store.
//This will log out all 4 dispatch everytime the dispatch runs.
//This is kind of like useEFFECT
store.subscribe(() => {
  console.log(store.getState());
});

//logging the info in the state.
console.log(store.getState());

//CONVENTION TO USE ALL CAPS
//dispatch will send this to the store to change the state.
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "SET",
  count: 101
});
