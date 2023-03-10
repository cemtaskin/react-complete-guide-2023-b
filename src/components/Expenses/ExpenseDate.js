import './ExpenseDate.css';

const ExpenseDate = ({date}) => {

  const month = date.toLocaleString("en-Us", { month: "long" });
  const year = date.toLocaleString("en-Us", { year: "numeric" });
  const day = date.toLocaleString("en-Us", { day: "2-digit" });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
