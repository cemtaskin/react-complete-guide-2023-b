import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";


const App = () =>  {

  const [expenses,setExpenses] = useState([
    {
      id: "e1",
      title: "toilet paper",
      amount: 94.2,
      date: new Date(2022, 1, 12),
    },
    {
      id: "e2",
      title: "car insurance",
      amount: 450.2,
      date: new Date(2022, 4, 4),
    },
    {
      id: "e3",
      title: "new phone",
      amount: 700.25,
      date: new Date(2022, 3, 5),
    },
    {
      id: "e4",
      title: "new desk",
      amount: 120.5,
      date: new Date(2022, 6, 14),
    },
  ]);


  const addExpenseHandler = expense =>{
    console.log('In App Js');
    console.log(expense);

    console.log([...expenses,expense]);
    setExpenses([...expenses,expense]);

  };
  
  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
