import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "../ExpenseFilter/ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setfilterYear] = useState("2022");
  const onSavedFilterHandler = (filter) => {
    setfilterYear(filter);
    props.onAddFilter(filter);
  };

  const fillteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  

  return (
    <Card className="expenses">
      <Filter selected={filterYear} onSavedFilter={onSavedFilterHandler} />
      <ExpensesChart expense={fillteredExpenses}/>
      {<ExpensesList items={fillteredExpenses} />}
    </Card>
  );
}

export default Expenses;
