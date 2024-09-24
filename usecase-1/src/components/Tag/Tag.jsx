import React from "react";
import "./Tag.css";

// Tag componet display the tags for a user
export default function Tag({ Tags }) {
  return (
    Tags.map((items, index) => (
        <div className="tag-content" key={index}> {items} </div>
      ))
  );
}
