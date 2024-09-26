import React from "react";
import "./Tag.css";

// Tag componet display the tags for a user
export default function Tag({Tag}) {
  return (
        <div className="tag-content" > {Tag} </div> 
  );
}
