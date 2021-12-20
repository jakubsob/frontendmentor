import React, { useState } from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

const text = "dark";
const icon = iconMoon;

function SearchButton() {
  const [mode, setMode] = useState(null);

  function handleClick() {
    setMode(mode == "dark" ? "light" : "dark");
  }

  return (
    <button onClick={handleClick} className="mode">
      {mode == "dark" ? "DARK" : "LIGHT"}
      <img src={mode == "dark" ? iconMoon : iconSun}></img>
    </button>
  );
}

export default SearchButton;
