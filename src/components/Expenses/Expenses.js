import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import Filter from '../ExpenseFilter/ExpenseFilter'
import React, { useState } from 'react';

function Expenses(props) {
  const [filterYear,setfilterYear] =  useState('2022');
  const onSavedFilterHandler = (filter) => {
    setfilterYear(filter);
    props.onAddFilter(filter);
    
  };




  return (
    
      
      <Card className="expenses">
        <Filter selected={filterYear} onSavedFilter={onSavedFilterHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        >
        </ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        >
        </ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        >
        </ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        >
        </ExpenseItem>
      </Card>
    

  );
}

export default Expenses;