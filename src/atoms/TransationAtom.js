import { atom } from "recoil";

export const transactionsState = atom({
  key: "transactionsState",
  default: [
    {
      id: 1,
      description: "Coffee",
      amount: -3.5,
      date: "2023-03-22"
    },
    {
      id: 2,
      description: "Salary",
      amount: 2000,
      date: "2023-03-24"
    },
    {
      id: 3,
      description: "Rent",
      amount: -500,
      date: "2023-04-01"
    }
  ]
});
