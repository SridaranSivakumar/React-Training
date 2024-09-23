import React from "react";
import "./TagsContainer.css";
import Tag from "../../components/Tag/Tag.jsx";

export default function TagsContainer({ Tags }) {
  return (
    <div className="tag-container">
      <Tag Tags={Tags}/>
    </div>
  );
}