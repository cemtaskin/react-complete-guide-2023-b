import "./ExpenseItem.css";

function ExpenseItem({title,amount,date}) {
 
  const month = date.toLocaleString('en-Us',{month:"long"});
  const year = date.toLocaleString('en-Us',{year:"numeric"});
  const day = date.toLocaleString('en-Us',{day:"2-digit"});

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
