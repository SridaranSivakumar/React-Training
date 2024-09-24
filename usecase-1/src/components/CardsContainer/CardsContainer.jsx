import React from "react";
import Card from "../../components/Card/Card.jsx";
import './CardsContainer.css';

// CardsContainer component is the container for the cards and passing the user data to the Card as props.
export default function CardsContainer({data}) {
    return (
        <div className="cards-container">
        {data.Users.map((user, index) => (
         <Card user={user} key={index} />
        ))}
        </div>
    );
  }
  


