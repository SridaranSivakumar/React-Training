import React from "react";
import "./Card.css";
import Tag from "../Tag/Tag";

export default function Cards({ user }) {
  // Destructuring the user data which is passed as a prop
  const name = user.Name;
  const url = require("../../assets/" + name + ".jpg");
  //   Path of the images are set using the url variable
  return (
    <div id="card">
      <img src={url} alt="sample" />
      <div id="card-content">
        <div id="card-name">{user.Name}</div>
        <div id="location-name">{user.Location}</div>
        <div>
          <Tag Tags={user.Tags} />
          {/* The array of tags is passed TagContent */}
        </div>
      </div>
    </div>
  );
}
