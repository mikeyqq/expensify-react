//ACTIOM GENERATOR FOR EDIT TEXT FILTER

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//ACTION GENERATOR FOR SORT BY DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//ACTION GENERATOR FOR SORT BY AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//ACTION GENERATOR FOR SET START DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//ACTION GENERATOR FOR SET END DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
