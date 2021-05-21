import React from "react";
import "./Deck.css";

export default function Deck({ deck, index }) {
  return (
    <div className="deck" key={`deck ${index}`}>
      <p className="deck-title">{deck.data.name}</p>
      <p className="add-cards-button">Add cards</p>
    </div>
  );
}
