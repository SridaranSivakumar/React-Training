import React from "react";
import "./Card.css";
import TagsContainer from "../TagsContainer/TagsContainer.jsx";

// Cards component display the details of the user and the user data is get from props . 
// Passing the tags data to TagsContainer as props
export default function Cards({ user }) {
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
        </div>
      </div>
    </div>
  );
}
