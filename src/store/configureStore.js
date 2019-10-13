import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

// STORE CREATION

export default () => {
  const store = createStore(
    combineReducers({
      expense: expenseReducer,
      filters: filtersReducer
    })
  );
  return store;
};
