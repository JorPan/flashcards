import { useState } from "react";
import QuizCard from "../components/QuizCard";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import "./HomePage.css";

export default function HomePage({ quizMode, selectedDeck }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [cardSide, setCardSide] = useState("front");

  const incrementQuestionNumber = () => {
    if (questionNumber < selectedDeck.content.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
    }
    setCardSide("front");
  };

  const decrementQuestionNumber = () => {
    if (questionNumber === 0) {
      setQuestionNumber(selectedDeck.content.length - 1);
    } else {
      setQuestionNumber(questionNumber - 1);
    }
    setCardSide("front");
  };

  return (
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <div>
          <h1 className="home-page-title">Home Page</h1>
          <p>Select a deck to get started!</p>
        </div>
      ) : (
        <div>
          <h1 className="home-page-title">Practice Time!</h1>
          <h2 className="selected-deck-title">{selectedDeck.data.name}</h2>
          <h3 className="card-number">{`${questionNumber + 1}/${
            selectedDeck.content.length
          }`}</h3>
          <div className="quiz-section">
            <BsCaretLeftFill
              className="change-question-button"
              onClick={decrementQuestionNumber}
            />
            <QuizCard
              selectedDeck={selectedDeck}
              questionNumber={questionNumber}
              cardSide={cardSide}
              setCardSide={setCardSide}
            />
            <BsFillCaretRightFill
              className="change-question-button"
              onClick={incrementQuestionNumber}
            />
          </div>
        </div>
      )}
    </div>
  );
}
