import "./styles/main.scss";
import ModeButton from "./components/ModeButton";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import { useState } from "react";
import User from "./js/githubApi";
import ThemeManager from "./js/ThemeManager";

const START_MODE = "light";
const START_USER = "octocat";
const THEME_MANAGER = new ThemeManager(START_MODE);

function App() {
  const [user, setUser] = useState(new User(START_USER));
  const [theme, setTheme] = useState(THEME_MANAGER.getCurrent());

  function handleSubmit(query) {
    setUser(new User(query));
  }

  function handleThemeChange() {
    setTheme(THEME_MANAGER.toggle());
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
