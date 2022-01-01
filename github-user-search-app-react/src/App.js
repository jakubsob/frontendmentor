import "./styles/main.scss";
import ModeButton from "./components/ModeButton";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import { useState } from "react";
import User from "./js/githubApi";
import iconMoon from "./assets/icon-moon.svg";
import iconSun from "./assets/icon-sun.svg";

const modes = {
  dark: {
    text: "dark",
    icon: iconMoon,
    className: "theme-light",
  },
  light: {
    text: "light",
    icon: iconSun,
    className: "theme-dark",
  },
};

function App() {
  const [user, setUser] = useState(new User("octocat"));
  const [theme, setTheme] = useState(modes["dark"]);

  function handleSubmit(query) {
    setUser(new User(query));
  }

  function handleThemeChange() {
    const newTheme = theme.text == "light" ? modes["dark"] : modes["light"];
    setTheme(newTheme);
  }

  return (
    <div className={`App ${theme.className}`}>
      <div className="content">
        <div className="header">
          devfinder
          <ModeButton onClick={handleThemeChange} theme={theme}></ModeButton>
        </div>
        <SearchBar handleSubmit={handleSubmit}></SearchBar>
        <InfoCard user={user}></InfoCard>
      </div>
    </div>
  );
}

export default App;
