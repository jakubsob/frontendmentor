import "./styles/main.scss";
import ModeButton from "./components/ModeButton";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import { useState } from "react";
import User from "./js/githubApi";

function App() {
  const startTheme = "theme-light";
  const [user, setUser] = useState(new User("octocat"));
  const [theme, setTheme] = useState(startTheme);

  function handleSubmit(query) {
    setUser(new User(query));
  }

  function handleThemeChange(theme) {
    setTheme(theme);
  }

  return (
    <div className={`App ${theme}`}>
      <div className="content">
        <div className="header">
          devfinder
          <ModeButton handleThemeChange={handleThemeChange}></ModeButton>
        </div>
        <SearchBar handleSubmit={handleSubmit}></SearchBar>
        <InfoCard user={user}></InfoCard>
      </div>
    </div>
  );
}

export default App;
