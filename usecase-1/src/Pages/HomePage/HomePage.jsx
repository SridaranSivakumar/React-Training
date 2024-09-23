import React from "react";
import Header from "../../components/Header/Header";
import "./HomePage.css";
import CardContainer from "../../components/CardsContainer/CardsContainer.jsx";
import data from "../../data.js";

// Importing Header and Cards Component
export default function HomePage() {
  return (
    <div>
    <Header />
    <CardContainer data={data}/>
    </div>
  );
}
