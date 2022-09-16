import ExpenseItem from "./ExpenseItem";
import './ExpenseItems.css';
function ExpenseItems(props) {
  return (
    <div className="expenses">
      <ExpenseItem details={props.expensesArray[0]} />
      <ExpenseItem details={props.expensesArray[1]} />
      <ExpenseItem details={props.expensesArray[2]} />
      <ExpenseItem details={props.expensesArray[3]} />
    </div>
  );
}

export default ExpenseItems;
