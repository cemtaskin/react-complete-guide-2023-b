import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return <div>
    <h1>First Application</h1>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem/>
    <ExpenseItem/>
  </div>;
}

export default App;
