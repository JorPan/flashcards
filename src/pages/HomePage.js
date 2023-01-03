import React, { useState } from 'react';
import QuizCard from "../components/QuizCard";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaRegSmileBeam, FaRegFrown } from "react-icons/fa";
import Footer from "../containers/Footer";
import "./HomePage.css";

export default function HomePage({
  quizMode,
  selectedDeck,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
  knowItCards,
  setKnowItCards,
  dontKnowItCards,
  setDontKnowItCards,
}) {
  const [ isFinished, setIsFinished ] = useState(false);
  const [ finishTest, setFinishTest ] = useState(false);
  const [ isAnswered, setIsAnswered ] = useState(false);
  const [knowledgeTest, setKnowledgeTest] = useState(false);
  const [isCorrect, setIsCorrect] = useState("null");
  const [userAnswer, setUserAnswer] = useState("");
  const [points, setPoints] = useState(0);
  // Increments the question number to display the next card's front side
  const incrementQuestionNumber = () => {
    if (questionNumber < selectedDeck.content.length - 1) {
      setIsFinished(false)
      setQuestionNumber(questionNumber + 1);
    } else {
      setIsFinished(true);
      setQuestionNumber(0);
    }
    setCardSide("front");
  };

  const testModeIncrement = () => {
    if (questionNumber < selectedDeck.content.length - 1 && isAnswered === true) {
      setIsFinished(false)
      setQuestionNumber(questionNumber + 1);
    } else if (questionNumber > selectedDeck.content.length && isAnswered === true) {
      setFinishTest(true);
    }
    setIsAnswered(false);
    setCardSide("front");
    setUserAnswer("");
    setIsCorrect("null");
  }


  // Decrements the question number to display the previous card's front side
  const decrementQuestionNumber = () => {
    if (questionNumber === 0) {
      setQuestionNumber(selectedDeck.content.length - 1);
    }
    else {
      setQuestionNumber(questionNumber - 1);
    }
    setCardSide("front");
  };

  return (
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <div className="no-quiz">
          <h1 className="home-page-title">Home Page</h1>
          <p>Select a deck to get started!</p>
        </div>
      ) : (
        <div>
          {isFinished === false && knowledgeTest === false ? (
          <div>
          <h1 className="home-page-title">Practice Time!</h1>
          <h2 className="selected-deck-title">{selectedDeck.data.name}</h2>
          <h3 className="card-number">{`${questionNumber + 1}/${
            selectedDeck.content.length
          }`}</h3>
          </div>
          ) : (
          <>
          {knowledgeTest === false && (
            <div>
            <h1 className="home-page-title">Are you Ready for a Quiz?</h1>
            <div className="selected-deck-title">
              <button className="buttonCards" onClick={() => setKnowledgeTest(true)}>I was born Ready!</button>
            </div>
            </div>
            )}
          </>
          )}
          {knowledgeTest === true && (
            <div>
            <h1 className="home-page-title test-title">Next Einstein?</h1>
            <h3 className="card-number">Score: {points}</h3>
            </div>
          )}
          <div className="quiz-section">
          {knowledgeTest === false && (
            <BsCaretLeftFill
              className="change-question-button"
              onClick={decrementQuestionNumber}
            />)}
            <QuizCard
              setQuestionNumber={setQuestionNumber}
              finishTest={finishTest}
              setFinishTest={setFinishTest}
              isFinished={isFinished}
              setIsFinished={setIsFinished}
              isAnswered={isAnswered}
              setIsAnswered={setIsAnswered}
              points={points}
              setPoints={setPoints}
              isCorrect={isCorrect}
              setIsCorrect={setIsCorrect}
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
              setKnowledgeTest={setKnowledgeTest}
              knowledgeTest={knowledgeTest}
              selectedDeck={selectedDeck}
              questionNumber={questionNumber}
              cardSide={cardSide}
              setCardSide={setCardSide}
            />
            {knowledgeTest === false ? (
            <BsFillCaretRightFill
              className="change-question-button"
              onClick={incrementQuestionNumber}
            />) : (
              <BsFillCaretRightFill
              className="change-question-button"
              onClick={testModeIncrement}
            />
            )}
          </div>
          {knowledgeTest === false && (
          <div className="know-it-button-section">
            <button
              className="know-it-button buttonCards"
              onClick={() =>
                setKnowItCards([
                  ...knowItCards,
                  selectedDeck.content[questionNumber],
                ])
              }
            >
              <FaRegSmileBeam />I know it
            </button>
            <button
              className="know-it-button buttonCards"
              onClick={() =>
                setDontKnowItCards([
                  ...dontKnowItCards,
                  selectedDeck.content[questionNumber],
                ])
              }
            >
              <FaRegFrown />I don't know it
            </button>
          </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

