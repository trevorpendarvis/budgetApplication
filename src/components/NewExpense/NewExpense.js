import "./NewExpense.css";
//import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (budgetData) => {
        const expenseData = {
            ...budgetData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
}


export default NewExpense;