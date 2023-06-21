import React from 'react';
import { useHistory } from 'react-router-dom';

function Navigation() {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => handleClick('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleClick('/transactions')}>Transactions</button>
        </li>
        <li>
          <button onClick={() => handleClick('/budgets')}>Budget</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
