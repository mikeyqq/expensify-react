import filtersReducer from "../../reducers/filters";
import moment from "moment";
import filters from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@DEFAULTSTATEVIEW" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set by text filter", () => {
  const text = "new text";
  const action = { type: "SET_TEXT_FILTER", text: text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("new text");
});

test("should set start date filter", () => {
  const startDate = moment();
  const action = { type: "SET_START_DATE", startDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("should set start date filter", () => {
  const endDate = moment();
  const action = { type: "SET_END_DATE", endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
