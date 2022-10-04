// import { useState } from "react";
import React, {useState} from "react";

function AddTransactionForm({onFormSubmit}) {

  const [formData, setFormData] = useState({
    date: "",
    description:"",
    category:"",
    amount: 0.01
  })

  function handleFormSubmit(e){
    e.preventdefault();
    onFormSubmit(formData);
    setFormData({
      date: "",
      description:"",
      category:"",
      amount: 0.01
    })
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name]:[e.target.value]})
  }

  return (
    <div className="ui segment">
      <form onSumbmit={handleFormSubmit} onChange={handleChange} className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
