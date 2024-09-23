import React from "react";
import "./Card.css";
import TagsContainer from "../TagsContainer/TagsContainer.jsx";

export default function Cards({ user }) {
  // Destructuring the user data which is passed as a prop
  const url = require("../../assets/" + user.Name + ".jpg");
  //   Path of the images are set using the url variable
  return (
    <div className="card">
      <img src={url} alt="sample" />
      <div className="card-content">
        <div className="card-name">{user.Name}</div>
        <div className="location-name">{user.Location}</div>
        <div>
          <TagsContainer Tags={user.Tags} />
          {/* The array of tags is passed TagContainer */}
        </div>
      </div>
    </div>
  );
}
