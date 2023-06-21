import { atom } from "recoil";

const budgetsAtom = atom({
  key: "budgetsAtom",
  default: [
    {
      id: 1,
      category: "Food",
      amount: 500
    },
    {
      id: 2,
      category: "Transportation",
      amount: 200
    },
    {
      id: 3,
      category: "Entertainment",
      amount: 300
    }
  ]
});

export default budgetsAtom;
