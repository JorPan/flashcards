import React from "react";
import { GoTrashcan } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import "./Card.css";

export default function Card({ currentCard, cardNumber }) {
  const editCard = () => {
    console.log("edit");
  };

  const deleteCard = () => {
    console.log("delete");
  };

  return (
    <div className="small-card">
      <div className="small-card-buttons">
        <GrEdit className="edit-button" onClick={editCard} />
        <GoTrashcan className="delete-button" onClick={deleteCard} />
      </div>
      <p>{currentCard.front}</p>
    </div>
  );
}
