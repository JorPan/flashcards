import { useState, useEffect } from "react";
import { GiRapidshareArrow } from "react-icons/gi";
import "./Card.css";

export default function QuizCard({
  selectedDeck,
  questionNumber,
  cardSide,
  setCardSide,
}) {
  const [cardContent, setCardContent] = useState(selectedDeck.content);

  useEffect(() => {
    setCardContent(selectedDeck.content[questionNumber]);
  }, [cardContent, questionNumber, selectedDeck.content]);

  const flipCard = () => {
    cardSide === "front" ? setCardSide("back") : setCardSide("front");
  };

  return (
    <div className="quiz-card">
      <div className="quiz-card-top">
        <GiRapidshareArrow className="flip-card-button" onClick={flipCard} />
      </div>
      <div className="quiz-card-content">
        {cardSide === "front" ? (
          <p>{cardContent.front}</p>
        ) : (
          <p>{cardContent.back}</p>
        )}
      </div>
      <div className="quiz-card-bottom"></div>
    </div>
  );
}
