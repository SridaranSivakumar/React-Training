import React from "react";
import "./Tag.css";

export default function Tag({ Tags }) {
  return (
    <div id="tag-container">
      {Tags.map((items, i) => (
        <div id="tag-content" key={i}>
          {items}
        </div>
      ))}
      {/* using map to display the tag content in the card container */}
    </div>
  );
}
