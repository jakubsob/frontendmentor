import logo from "./logo.svg";
import "./App.css";
import "./styles/main.scss";
import iconLocation from "./assets/icon-location.svg";
import iconCompany from "./assets/icon-company.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconWebsite from "./assets/icon-website.svg";
import iconMoon from "./assets/icon-moon.svg";
import iconSearch from "./assets/icon-search.svg";
import SearchButton from "./components/SearchButton";
import ModeButton from "./components/ModeButton";

function App() {
  return (
    <div classNameName="App">
      <div className="content">
        <div className="header">
          devfinder
          <ModeButton></ModeButton>
        </div>
        <div className="search-bar">
          <img src={iconSearch} />
          <input
            className="search-bar__input"
            placeholder="Search GitHub username..."
          />
          <SearchButton></SearchButton>
        </div>
        <div className="card">
          <div className="image">
            <img src="https://avatars.githubusercontent.com/u/37193264?v=4"></img>
          </div>
          <div className="info">
            <div className="info-header">
              <div className="user">The Octocat</div>
              <div className="joined">Joined 25 Jan 2011</div>
            </div>
            <div className="username">@octocat</div>
            <div className="bio">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </div>
            <div className="stats">
              <table>
                <th>Repos</th>
                <th>Followers</th>
                <th>Following</th>
                <tr>
                  <td>8</td>
                  <td>3938</td>
                  <td>9</td>
                </tr>
              </table>
            </div>
            <div className="info-table">
              <table>
                <tr>
                  <td>
                    <span>
                      <img src={iconLocation}></img>San Francisco
                    </span>
                  </td>
                  <td>
                    <span className="disabled">
                      <img src={iconTwitter}></img>Not available
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <img src={iconWebsite}></img>
                      <a href="https://github.blog">https://github.blog</a>
                    </span>
                  </td>
                  <td>
                    <span>
                      <img src={iconCompany}></img>@github
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
