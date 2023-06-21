import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { transactionsState } from '../atoms/TransationAtom';

function Home() {
  const [transactions, setTransactions] = useRecoilState(transactionsState);
  // Render transactions table
  // useEffect(() => {
  //   axios
  //     .get("/api/transactions")
  //     .then((response) => {
  //       setTransactions(response.data);
  //     });
  // }, []);
  const renderTransactions = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      <h1>Personal Finance Management</h1>
      <h2>Transactions</h2>
      {renderTransactions()}
    </div>
  );
}

export default Home;
