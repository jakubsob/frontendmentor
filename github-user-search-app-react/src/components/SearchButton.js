import React from "react";

function SearchButton(props) {
  function handleClick(event) {
    event.preventDefault();
    props.handleSubmit();
  }

  return <button onClick={handleClick}>Search</button>;
}

export default SearchButton;
