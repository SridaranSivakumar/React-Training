import React from "react";
import Header from "../../Components/Header/Header";
import "./HomePage.css";
import Cards from "../../Components/Cards/Cards";
import data from "../../data.js";
// Importing Header and Cards Component
export default function HomePage() {
  return (
    <div id="container">
      <Header />
      <div id="cards-container">
        {data.map((user, i) => (
          <Cards user={user} key={i} />
        ))}
        {/* Passing User data to Cards */}
      </div>
    </div>
  );
}
