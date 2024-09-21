import React, { useState } from "react";
import Button from "../Button/Button";
import "./Header.css";
import Search from "../../assets/search.png";
const buttons = ["Reputation", "New users", "Voters", "Editors", "Moderators"];
// Button Names stored in a array
export default function Header() {
  const [selectedBtn, setSelectedBtn] = useState(1);
  // Using state to set the active button in navbar
  return (
    <div id="header-container">
      <header>Users</header>
      <div id="navbar">
        <div id="search-box">
          <img id="search-image" src={Search} alt="Search" />
          <div id="searchbox-content">
            <input
              type="search"
              name="input-box"
              id="input-box"
              placeholder="Search users"
            />
          </div>
        </div>
        <div id="button-container">
          <Button
            buttons={buttons}
            selectedBtn={selectedBtn}
            setSelectedBtn={setSelectedBtn}
          />
          {/* Passing button names and default selected button as a prop to button component */}
        </div>
      </div>
    </div>
  );
}
