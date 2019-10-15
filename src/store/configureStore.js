import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

// STORE CREATION

export default () => {
  const store = createStore(
    combineReducers({
      expense: expenseReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
