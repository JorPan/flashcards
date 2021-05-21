import { useState, useEffect } from "react";
import { MdSwapVert } from "react-icons/md";
import "./Card.css";

export default function EditCard({ currentCard }) {
  const [cardFront, setCardFront] = useState(currentCard.front);
  const [cardBack, setCardBack] = useState(currentCard.back);

  const swapCardSides = () => {
    const frontSide = cardFront;
    setCardFront(cardBack);
    setCardBack(frontSide);
  };

  useEffect(() => {
    setCardFront(cardFront);
    setCardBack(cardBack);
    console.log("change");
  }, [cardBack, cardFront]);

  return (
    <div className="small-card">
      <div className="small-card-front">
        <p className="small-card-side-choice">Front</p>
        <p>{cardFront}</p>
      </div>

      <div className="edit-card-center">
        <div className="edit-card-separator"></div>
        <MdSwapVert className="swap-button" onClick={swapCardSides} />
        <div className="edit-card-separator"></div>
      </div>

      <div className="small-card-back">
        <p className="edit-card-side-choice">Back</p>
        <p>{cardBack}</p>
      </div>
    </div>
  );
}
