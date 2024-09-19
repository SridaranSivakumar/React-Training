import React from "react";
import "./Cards.css";
import TagContent from "../CardsContent/TagContent";

export default function Cards({ user }) {
  // Destructuring the user data which is passed as a prop
  const name = user.Name;
  const url = require("../../Asset/" + name + ".jpg");
  //   Path of the images are set using the url variable
  return (
    <div id="card">
      <img src={url} alt="sample" />
      <div id="card-content">
        <b id="card-name">{user.Name}</b>
        <div id="location-name">{user.Location}</div>
        <div>
          <TagContent Tags={user.Tags} />
          {/* The array of tags is passed TagContent */}
        </div>
      </div>
    </div>
  );
}
