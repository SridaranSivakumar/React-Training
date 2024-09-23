import React from "react";
import Card from "../../components/Card/Card.jsx";
import './CardsContainer.css';
export default function CardsContainer({data}) {
    return (
        <div className="cards-container">
        {data.Users.map((user, index) => (
         <Card user={user} key={index} />
        ))}
        {/* Passing User data to Cards */}
        </div>
    );
  }
  


