import moment from "moment";

/***************** FILTERING THROUGH REDUX DATA ************************************************************** */

//GET VISIBLE EXPENSES

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else {
        return 0;
      }
    });
};

// export default (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses
//     .filter(expense => {
//       const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
//       const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
//       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//       return startDateMatch && endDateMatch && textMatch;
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") {
//         return a.createdAt < b.createdAt ? 1 : -1;
//       } else if (sortBy === "amount") {
//         return a.amount < b.amount ? 1 : -1;
//       } else {
//         return 0;
//       }
//     });
// };

/***************** ^^^^^^^^^^^^^^^FILTERING THROUGH REDUX DATA ^^^^^^^^^^^^^^^^************************************************************** */
