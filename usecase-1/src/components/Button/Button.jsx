import React from "react";
import "./Button.css";

/*Button component get buttons , selectedBtn as props and using the state 
indicating the active status of the button when the button is clicked. */
export default function Button({ buttons, selectedBtn, setSelectedBtn }) {
  return buttons.button.map((buttonName, index) => {
    return (
      <button
      className={selectedBtn === index ? "clicked-button" : "button"}
        onClick={() => setSelectedBtn(index)}
        key={index}
      >
        {buttonName}
      </button>
    
    );
  });
}
