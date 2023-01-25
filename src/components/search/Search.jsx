import React from "react";
import "./search.css";

const Search = ({ onchange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="🔍Search"
        className="search"
        onChange={onchange}
      />
    </div>
  );
};

export default Search;
