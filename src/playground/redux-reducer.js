import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const demoState = {
  expenses: [
    {
      id: "sdasdsd",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

/***************** ACTION GENERATORS ********************************************************************************************************************************** */

//ACTION GENERATOR FOR ADD EXPENSE
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//ACTION GENERATOR FOR REMOVE EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: {
    id
  }
});

//ACTION GENERATOR FOR REMOVE EXPENSE

const editExpense = ({ id, updates } = {}) => ({
  type: "EDIT_EXPENSE",
  expense: {
    id,
    updates
  }
});

//ACTIOM GENERATOR FOR EDIT TEXT FILTER

const setTextFilter = ({ text = "" }) => ({
  type: "SET_TEXT_FILTER",
  text
});

//ACTION GENERATOR FOR SORT BY DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//ACTION GENERATOR FOR SORT BY AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//ACTION GENERATOR FOR SET START DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//ACTION GENERATOR FOR SET END DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
/***************** ACTION GENERATORS ********************************************************************************************************************************** */

//THIS IS A DEFAULT STATE FOR EXPENSES REDUCER
const expenseReducerDefaultState = [];

//TO KEEP STATE CLEAN, WE CREATED A DEFAULT STATE FOR THE STATE IN THIS FUNCTION
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            //expense is the original state.
            ...expense,
            //action.updates is the incoming items that need to override the original state above.
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//THIS IS A DEFAULT STATE FOR FILTERS REDUCER
const filtersReducerDefaultState = { text: "", sortBy: "date", startDate: undefined, endDate: undefined };

//TO KEEP STATE CLEAN, WE CREATED A DEFAULT STATE FOR THE STATE IN THIS FUNCTION
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

/***************** FILTERING THROUGH REDUX DATA ************************************************************** */

//GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

/***************** ^^^^^^^^^^^^^^^FILTERING THROUGH REDUX DATA ^^^^^^^^^^^^^^^^************************************************************** */

// STORE CREATION

const store = createStore(
  combineReducers({
    expense: expenseReducer,
    filters: filtersReducer
  })
);

//THIS SUBSCRIBE WILL TRACK AND DISPLAY CHANGES IN THE STORE.
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 300, createdAt: -1000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense({ id: expenseTwo.expense.id, amount: 500 }));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125)); //startDate 125
store.dispatch(setStartDate()); //undefined
store.dispatch(setEndDate(1250)); //endDate 1250
