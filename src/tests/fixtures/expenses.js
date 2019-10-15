import moment from "moment";

export default [
  {
    id: "1",
    description: "first1",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "another test 2",
    note: "",
    amount: 1951111,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "third test 3",
    note: "",
    amount: 4495,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
