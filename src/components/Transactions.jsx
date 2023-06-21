import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { transactionsState } from "../atoms/TransationAtom";

function Transactions() {
  const [transactions, setTransactions] = useRecoilState(transactionsState);
  const [formValues, setFormValues] = useState({
    description: "",
    amount: "",
    date: ""
  });
  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((response) => {
  //       setTransactions(response.data);
  //     });
  // }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      description: formValues.description,
      amount: parseFloat(formValues.amount),
      date: formValues.date
    };
    // axios
    //   .post(
    //     "api/transactions",
    //     newTransaction
    //   )
    //   .then((response) => {
    //   });
    setTransactions([...transactions, newTransaction]);

    setFormValues({
      description: "",
      amount: "",
      date: ""
    });
  };
  // useEffect(() => {
  //   axios.get("/api/transactions").then((response) => {
  //     setTransactions(response.data);
  //   });
  // }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <center>
        <h3>Add Transaction</h3>
      </center>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formValues.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formValues.date}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Transactions;
