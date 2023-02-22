import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
const ExpenseItem=({date,amount})=>{

return(
<div className='expense-item'>

<ExpenseDate date ={date} />

<ExpenseAmount amount={amount} />

</div>




)





}
export default ExpenseItem;