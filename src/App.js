import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";
import Card from "./components/Card";

function App() {
  const expenses = [
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
  ];

  return (
    <div>
      <Card className="title"><h2>Expenses</h2></Card>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
