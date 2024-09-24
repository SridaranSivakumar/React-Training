import React from "react";
import "./TagsContainer.css";
import Tag from "../../components/Tag/Tag.jsx";

// TagsContainer is the container for tags and the tags data is destuctured and passed to Tag component as props.
export default function TagsContainer({ Tags }) {
  return (
    <div className="tag-container">
      <Tag Tags={Tags}/>
    </div>
  );
}