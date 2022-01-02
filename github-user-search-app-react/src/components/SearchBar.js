import React, { Component, useState } from "react";
import SearchButton from "./SearchButton";
import iconSearch from "../assets/icon-search.svg";

const placeholder = "Search GitHub username...";

function SearchBar(props) {
  const [value, setValue] = useState(null);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    props.handleSubmit(value);
  }

  return (
    <div className="search-bar">
      <img src={iconSearch} />
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <SearchButton handleSubmit={handleSubmit}></SearchButton>
    </div>
  );
}

export default SearchBar;
