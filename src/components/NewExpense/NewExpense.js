import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, toggleForm] = useState(false);

  const onSaveExpenseDataHandler = (budgetData) => {
    const expenseData = {
      ...budgetData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleForm();
  };

  const addNewExpenseButtonHandler = (event) => {
    toggleForm((prevState) => {
        return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancelExpenseData={addNewExpenseButtonHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
