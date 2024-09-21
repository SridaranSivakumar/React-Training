import React from "react";
import Header from "../../components/Header/Header";
import "./HomePage.css";
import Card from "../../components/Card/Card";
import data from "../../data.js";
// Importing Header and Cards Component
export default function HomePage() {
  return (
    <div id="container">
      <Header />
      <div id="cards-container">
        {data.map((user, i) => (
          <Card user={user} key={i} />
        ))}
        {/* Passing User data to Cards */}
      </div>
    </div>
  );
}
