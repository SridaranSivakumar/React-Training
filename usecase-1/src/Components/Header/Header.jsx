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
    <div className="header-container">
      <header>Users</header>
      <div className="navbar">
        <div className="search-box">
          <img className="search-image" src={Search} alt="Search" />
          <div className="searchbox-content">
            <input type="search" name="input-box" className="input-box" placeholder="Search users"/>
          </div>
        </div>
        <div className="button-container">
          <Button buttons={buttons} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}/>
          {/* Passing button names and default selected button as a prop to button component */}
        </div>
      </div>
    </div>
  );
}
