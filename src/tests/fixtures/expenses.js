import moment from "moment";
const expenses = [
  {
    id: "1",
    description: "test1",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "water2",
    note: "test2",
    amount: 195999,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "rent3",
    note: "rent3 testing",
    amount: 4500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

export default expenses;
