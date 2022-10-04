import React,{useState} from "react";

function Search({onSearch}) {

  const [search, setSearch] = useState("")

  function handleChange(e){
    onSearch(e.target.value)
    setSearch(search)
  }
  return (
    <div className="ui large fluid icon input" onChange={handleChange}>
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
