import "./ExpenseItem.css";

function ExpenseItem({title,amount,date}) {

  return (
    <div className="expense-item">
      <div>{date.toString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
