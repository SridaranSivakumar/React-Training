import React from "react";
import "./Tag.css";

export default function Tag({ Tags }) {
  return (
    Tags.map((items, index) => (
        <div className="tag-content" key={index}> {items} </div>
      ))
    /* using map to display the tag content in the card container */
  );
}
