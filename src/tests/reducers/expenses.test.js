import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should generate expense default state", () => {
  const state = expensesReducer(undefined, { type: "@DEFAULTSTATEVIEW" });
  expect(state).toEqual([]);
});

test("should add expense", () => {
  const expense = {
    id: "8888",
    description: "test888",
    note: "8888",
    amount: 88888,
    createdAt: 0
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should edit expense with value", () => {
  const amount = 2000000;
  const action = { type: "EDIT_EXPENSE", id: expenses[0].id, updates: { amount } };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test("should not edit expense if expense not found", () => {
  const amount = 99999999999;
  const action = { type: "EDIT_EXPENSE", id: "999999", updates: { amount } };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
