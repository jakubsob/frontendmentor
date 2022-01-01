import React from "react";

function SearchButton(props) {
  const { text, icon } = props.theme;
  return (
    <button onClick={props.onClick} className="mode">
      {text.toUpperCase()}
      <img src={icon}></img>
    </button>
  );
}

export default SearchButton;
