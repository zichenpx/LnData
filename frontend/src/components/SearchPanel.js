import { useEffect } from "react";
import { useState } from "react";

import "./SearchPanel.css";
import Button from "react-bootstrap/Button";

function SearchPanel() {
  const [teamName, setTeamName] = useState("");
  const [keyword, setKeyword] = useState("");

  const onTeamNameChange = (event) => {
    setTeamName(event.target.value);
    // console.log(event.target.value);
  };

  const onKeywordChange = (event) => {
    setKeyword(event.target.value);
    // console.log(event.target.value)
  };

  return (
    <div className="searchpanel">
      <div className="section">
        <span>Team</span>
        <select onClick={onTeamNameChange}>
          <option value="">Pick a team</option>
          <option value="Minnesota Timberwolves">Minnesota Timberwolves</option>
          <option value="Orlando Magic">Orlando Magic</option>
          <option value="Boston Celtics">Boston Celtics</option>
          <option value="Portland Trail Blazers">Portland Trail Blazers</option>
          <option value="Indiana Pacers">Indiana Pacers</option>
          <option value="Utah Jazz">Utah Jazz</option>
          <option value="Phoenix Suns">Phoenix Suns</option>
          <option value="Oklahoma City Thunder">Oklahoma City Thunder</option>
          <option value="Los Angeles Lakers">Los Angeles Lakers</option>
          <option value="Toronto Raptors">Toronto Raptors</option>
          <option value="Brooklin Nets">Brooklin Nets</option>
          <option value="Philadephia 76ers">Philadephia 76ers</option>
          <option value="Detroit Pistons">Detroit Pistons</option>
          <option value="Golden State Warriors">Golden State Warriors</option>
          <option value="Memphis Grizzlies">Memphis Grizzlies</option>
          <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
          <option value="New Orleans Pelicans">New Orleans Pelicans</option>
          <option value="Chicago Bulls">Chicago Bulls</option>
          <option value="Dalla Mavericks">Dalla Mavericks</option>
          <option value="Los Angeles Clippers">Los Angeles Clippers</option>
          <option value="Miami Heat">Miami Heat</option>
          <option value="Houston Rockets">Houston Rockets</option>
          <option value="Sacramento Kings">Sacramento Kings</option>
          <option value="Washington Wizard">Washington Wizard</option>
          <option value="San Antonio Spurs">San Antonio Spurs</option>
          <option value="Charlotte Hornets">Charlotte Hornets</option>
          <option value="New York Knicks">New York Knicks</option>
          <option value="Denver Nuggets">Denver Nuggets</option>
          <option value="Atlanta Hawks">Atlanta Hawks</option>
          <option value="Milwaukee Bucks">Milwaukee Bucks</option>
        </select>
      </div>
      <form className="">
        <div className="section">
          <span>Key word</span>
          <input
            type="text"
            id="key_word"
            name="key_word"
            onChange={onKeywordChange}
          ></input>
        </div>
        <Button type="submit" variant="dark" className="submit_btn">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchPanel;
