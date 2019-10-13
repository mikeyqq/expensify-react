//THIS IS A DEFAULT STATE FOR EXPENSES REDUCER
const expenseReducerDefaultState = [];

//TO KEEP STATE CLEAN, WE CREATED A DEFAULT STATE FOR THE STATE IN THIS FUNCTION
export default (state = expenseReducerDefaultState, action) => {
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
