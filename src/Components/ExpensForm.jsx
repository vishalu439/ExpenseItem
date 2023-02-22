import React, { useState } from 'react';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    console.log(expenseData);

    // You can use this data to submit the form to a server or add it to a list of expenses
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Expense Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="amount">Expense Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label htmlFor="date">Expense Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;