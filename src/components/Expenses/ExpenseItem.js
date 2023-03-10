import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const [count, setCount] = useState(0);

  const [newTitle, setNewTitle] = useState(title);
  //useState('initial value of stateful variable')
  //returns a stateful variable and a function to update it.

  const clickHandler = () => {
    setNewTitle("Updated");
    console.log("Clicked");
  };

  const increment = () => {
    setCount(count+1);
  };

  const decrement = () => {
    setCount(count-1);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
