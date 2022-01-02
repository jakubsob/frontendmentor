import React from "react";

function SearchButton(props) {
  return (
    <button onClick={props.onClick} className="mode">
      {props.theme.text.toUpperCase()}
      <img src={props.theme.icon}></img>
    </button>
  );
}

export default SearchButton;
