import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "../src/store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("bill"));

const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(state);

ReactDOM.render(<App />, document.getElementById("root"));
