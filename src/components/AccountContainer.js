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
  
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
