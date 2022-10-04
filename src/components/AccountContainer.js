import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([])

  // fetch from dbjson
  function getTransactions(){
    fetch("http://localhost:8001/transactions")
    .then((response)=> response.json())
    .then(setTransactions)
  }
  useEffect(getTransactions,[])

function handleSearch(search){
  if(search === ""){
    getTransactions(transactions);
  }
  else
  {
    setTransactions((transactions)=>transactions.filter((transaction)=> transaction.description.includes(search)))
  }
}

// adds new transcation after submitting form
function handleNewTransaction(newTransaction){
  setTransactions((transactions)=>[...transactions, newTransaction])

  fetch("http://localhost:8001/transactions",{
    method: "POST",
    headers: {
      "Content Type":"application/json",
    },
    body: JSON.stringify(newTransaction)
  })
}

  return (
    <div>
      <Search onSearch={handleSearch}/>
      <AddTransactionForm onFormSubmit={handleNewTransaction}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
