import ExpenseItem from "./Components/ExpenseItem";
import ExpenseForm from "./Components/ExpensForm";
function App() {
  const ExpenseDate=new Date(2023,2,22)
  const amount=4000
  return (
    <div>
      <ExpenseForm/>
      <ExpenseItem ExpenseDate={ExpenseDate} amount={amount} />
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
