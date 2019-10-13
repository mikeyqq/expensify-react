import uuid from "uuid";

//ACTION GENERATOR FOR ADD EXPENSE
export const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
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

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: {
    id
  }
});

//ACTION GENERATOR FOR REMOVE EXPENSE

export const editExpense = ({ id, updates } = {}) => ({
  type: "EDIT_EXPENSE",
  expense: {
    id,
    updates
  }
});
