import { useState, useEffect } from "react";
import { GoTrashcan } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import EditCard from "./EditCard";
import "./Card.css";

export default function Card({
  selectedDeck,
  setSelectedDeck,
  setUserDecks,
  currentCard,
  cardNumber,
  deleteCard,
  updateCard,
  setCardSide,
}) {
  const [editCard, setEditCard] = useState(false);

  //   useEffect(() => {
  //     return () => {
  //       const currentDeckFiltered = selectedDeck.content.splice(cardNumber, 1);
  //       setSelectedDeck(currentDeckFiltered);
  //     };
  //   });

  // toggles card view or card edit mode
  const editToggle = () => {
    setEditCard(!editCard);
  };

  return (
    <div className="card-section">
      {editCard === false ? (
        <div className="small-card">
          <div className="small-card-buttons">
            <GrEdit className="edit-button" onClick={editToggle} />
            <GoTrashcan
              className="delete-button"
              onClick={() => {
                setCardSide("front");
                deleteCard(currentCard);
              }}
            />
          </div>
          <p>{currentCard.front}</p>
        </div>
      ) : (
        <EditCard
          currentCard={currentCard}
          editCard={editCard}
          setEditCard={setEditCard}
          updateCard={updateCard}
          cardNumber={cardNumber}
        />
      )}
    </div>
  );
}
