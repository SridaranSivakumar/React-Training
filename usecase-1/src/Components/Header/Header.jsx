import React, { useState } from "react";
import Button from "../Button/Button";
import "./Header.css";
import Search from "../../assets/search.png";
import data from "../../data.js";

/* Header component cotains the header and navbar.
   The navbar contains the search box and the buttons.
   For button component we are passing button names and default selected button as props. 
   The button names are stored in data.js file. */
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
          <Button buttons={data} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}/>
        </div>
      </div>
    </div>
  );
}
