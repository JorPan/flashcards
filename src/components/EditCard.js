import { useState } from "react";
import { MdSwapVert } from "react-icons/md";
import "./Card.css";

export default function EditCard({
  currentCard,
  setEditCard,
  updateCard,
  cardNumber,
}) {
  const [cardFront, setCardFront] = useState(currentCard.front);
  const [cardBack, setCardBack] = useState(currentCard.back);

  // switches card front and card back
  const swapCardSides = () => {
    const frontSide = cardFront;
    setCardFront(cardBack);
    setCardBack(frontSide);
  };

  return (
    <div className="small-card">
      <div className="small-card-front">
        <p className="edit-card-side-choice">Front</p>
        <input
          className="edit-card-input"
          type="text"
          value={cardFront}
          onChange={(e) => setCardFront(e.target.value)}
        ></input>
      </div>

      <div className="edit-card-center">
        <div className="edit-card-separator"></div>
        <MdSwapVert className="swap-button" onClick={swapCardSides} />
        <div className="edit-card-separator"></div>
      </div>

      <div className="small-card-back">
        <p className="edit-card-side-choice">Back</p>
        <input
          className="edit-card-input"
          type="text"
          value={cardBack}
          onChange={(e) => setCardBack(e.target.value)}
        ></input>
      </div>
      <div className="edit-card-buttons">
        <button onClick={() => setEditCard(false)}>Cancel</button>
        <button
          onClick={() => {
            setEditCard(false);
            updateCard(cardNumber, cardFront, cardBack);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
