import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props[0].title}
        amount={props[0].amount}
        date={props[0].date}
      />
      <ExpenseItem
        title={props[1].title}
        amount={props[1].amount}
        date={props[1].date}
      />
      <ExpenseItem
        title={props[2].title}
        amount={props[2].amount}
        date={props[2].date}
      />
    </div>
  );
};

export default Expenses;
