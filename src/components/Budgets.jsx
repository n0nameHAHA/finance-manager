import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import budgetsAtom from '../atoms/BudgetAtom';

function Budget() {
  const [budgets, setBudgets] = useRecoilState(budgetsAtom);
  const [newBudgetCategory, setNewBudgetCategory] = useState('');
  const [newBudgetAmount, setNewBudgetAmount] = useState('');
  const [editingBudgetId, setEditingBudgetId] = useState(null);
  const [editingCategoryContent, setEditingCategoryContent] = useState('');

  const handleAddBudget = () => {
    const newBudget = {
      id: budgets.length + 1,
      category: newBudgetCategory,
      amount: Number(newBudgetAmount),
    };
    setBudgets([...budgets, newBudget]);
    setNewBudgetCategory('');
    setNewBudgetAmount('');
  };

  const handleEditBudget = (budgetId, category) => {
    setEditingBudgetId(budgetId);
    setEditingCategoryContent(category);
  };

  const handleSaveBudget = (budgetId) => {
    setEditingBudgetId(null);

    const updatedBudgets = budgets.map((budget) => {
      if (budget.id === budgetId) {
        return {
          ...budget,
          category: editingCategoryContent,
          amount: Number(newBudgetAmount),
        };
      }
      return budget;
    });

    setBudgets(updatedBudgets);
  };

  const handleCancelEdit = () => {
    setEditingBudgetId(null);
    setEditingCategoryContent('');
  };

  const handleDeleteBudget = (budgetId) => {
    const updatedBudgets = budgets.filter((budget) => budget.id !== budgetId);
    setBudgets(updatedBudgets);
  };

  const renderCategories = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Spent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => (
            <tr key={budget.id}>
              <td>{budget.id}</td>
              <td>
                {editingBudgetId === budget.id ? (
                  <input
                    type="text"
                    value={editingCategoryContent}
                    onChange={(e) => setEditingCategoryContent(e.target.value)}
                  />
                ) : (
                  budget.category
                )}
              </td>
              <td>
                {editingBudgetId === budget.id ? (
                  <input
                    type="text"
                    value={newBudgetAmount}
                    onChange={(e) => setNewBudgetAmount(e.target.value)}
                  />
                ) : (
                  budget.amount
                )}
              </td>
              <td>
                {editingBudgetId === budget.id ? (
                  <>
                    <button onClick={() => handleSaveBudget(budget.id)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditBudget(budget.id, budget.category)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteBudget(budget.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={newBudgetCategory}
                onChange={(e) => setNewBudgetCategory(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={newBudgetAmount}
                onChange={(e) => setNewBudgetAmount(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleAddBudget}>Add Budget</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      <h1>Personal Finance Management</h1>
      <h2>Budget</h2>
      {renderCategories()}
    </div>
  );
}

export default Budget;
