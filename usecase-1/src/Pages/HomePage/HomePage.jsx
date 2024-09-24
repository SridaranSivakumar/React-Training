import React from "react";
import Header from "../../components/Header/Header";
import "./HomePage.css";
import CardContainer from "../../components/CardsContainer/CardsContainer.jsx";
import data from "../../data.js";

// HomePage component is the main page which contains the header and cardscontainer components. 
// In the cardscontainer component passing users data as props.
export default function HomePage() {
  return (
    <div>
    <Header />
    <CardContainer data={data}/>
    </div>
  );
}
