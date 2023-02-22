import { useState } from "react";
import ExpenseItem from "./Components/ExpenseItem";
import ExpenseForm from "./Components/ExpensForm";
function App() {
  const[update,newUpdate]=useState([])
  var k
  const ExpenseDate=new Date(2023,2,22)
  const amount=4000
  const Data=(items)=>{
    console.log(items)
    newUpdate(items)
  }
  let x=update.map((item)=>{
    return (

<li>{`${item.amount}   ${item.title}  ${item.date}`}</li>


    )


  })
  return (
    <div>
      <ExpenseForm Data={Data}/>
      <ExpenseItem ExpenseDate={ExpenseDate} amount={amount} />
      <h2>Let's get started!</h2>
      {x}
    </div>
  );
}

export default App;
