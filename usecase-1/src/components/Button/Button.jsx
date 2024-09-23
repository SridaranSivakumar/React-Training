import React from "react";
import "./Button.css";

export default function Button({ buttons, selectedBtn, setSelectedBtn }) {
  return buttons.map((buttonName, index) => {
    return (
      <button
      className={selectedBtn === index ? "clicked-button" : "button"}
        onClick={() => setSelectedBtn(index)}
        key={index}
      >
        {buttonName}
      </button>
      //  This is the Button component and the state is used to change the selected button style when button is clicked.
    );
  });
}
