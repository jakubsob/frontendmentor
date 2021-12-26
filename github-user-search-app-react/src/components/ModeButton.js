import React, { useState } from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

const modes = {
  dark: {
    text: "dark",
    icon: iconMoon,
  },
  light: {
    text: "light",
    icon: iconSun,
  },
};
const startMode = "dark";

function SearchButton() {
  const [mode, setMode] = useState(startMode);

  function handleClick() {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <button onClick={handleClick} className="mode">
      {modes[mode].text.toUpperCase()}
      <img src={modes[mode].icon}></img>
    </button>
  );
}

export default SearchButton;
