import "./App.css";
import "./styles/main.scss";
import ModeButton from "./components/ModeButton";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import { useState } from "react";
import User from "./js/githubApi";

function App() {
  const [user, setUser] = useState(new User("octocat"));

  function handleSubmit(query) {
    setUser(new User(query));
  }

  return (
    <div className="App">
      <div className="content">
        <div className="header">
          devfinder
          <ModeButton></ModeButton>
        </div>
        <SearchBar handleSubmit={handleSubmit}></SearchBar>
        <InfoCard user={user}></InfoCard>
      </div>
    </div>
  );
}

export default App;
