import { useState, useEffect } from "react";
import { GiRapidshareArrow } from "react-icons/gi";
import correct from "./correct.png";
import incorrect from "./incorrect.png";
import "./Card.css";

export default function QuizCard({
  setQuestionNumber,
  setFinishTest,
  finishTest,
  setIsAnswered,
  points,
  setPoints,
  isCorrect,
  setIsCorrect,
  userAnswer,
  setUserAnswer,
  setKnowledgeTest,
  knowledgeTest,
  selectedDeck,
  questionNumber,
  cardSide,
  setCardSide,
}) {
  const [cardContent, setCardContent] = useState(
    selectedDeck.content[questionNumber]
  );

  const checkUserAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase() === cardContent.back.toLowerCase()) {
      setIsCorrect("true");
      setPoints(points + 10);
    } else {
      setIsCorrect("false");
    }
    setIsAnswered(true);
    isLastQuestion();
  }

  const isLastQuestion = () => {
    if (questionNumber === selectedDeck.content.length - 1) {
      setQuestionNumber(selectedDeck.content.length + 1)
    }
  }

  const reset = () => {
    setFinishTest(false)
    setIsCorrect("null")
    setUserAnswer("")
    setPoints(0)
    setQuestionNumber(0)
  }

  useEffect(() => {
    setCardSide("front");
  }, [setCardSide]);

  useEffect(() => {
    setCardContent(selectedDeck.content[questionNumber]);
  }, [cardContent, questionNumber, selectedDeck]);

  const flipCard = () => {
    cardSide === "front" ? setCardSide("back") : setCardSide("front");
  };

  return (
    <div className="quiz-card">
      <div className="quiz-card-top">
        {knowledgeTest === false && (<GiRapidshareArrow className="flip-card-button" 
        onClick={flipCard} />)}
      </div>
      <div className="quiz-card-content">
        <>
        {selectedDeck.content.length === 0 ? (
          <p>Add questions to this deck to study</p>
        ) : (
          <div>
            {cardSide === "front" ? (
              <>
              {isCorrect === "null" && finishTest === false && (<p>{cardContent?.front}</p>)}
              </>
            ) : (
              <p>{cardContent.back}</p>
            )}
          </div>
        )}
        {knowledgeTest === true && (
          <>
          <div style={{'display': 'flex', 'flexDirection': 'column'}} className="test-mode">
          {isCorrect === "null" && finishTest === false && (
          <>
          <input className="selected-deck-title" 
            style={{'marginBottom': '20px'}}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}/>
            <button className="buttonCards" onClick={() => checkUserAnswer(userAnswer)}>
            Check My Answer</button>
          </>
          )}
          {isCorrect === "true" && (<img src={correct} className="result-icon" alt="correct-icon"/>)}
          {isCorrect === "false" && (<img src={incorrect} className="result-icon" alt="incorrect-icon"/>)}
          {finishTest === true && (
          <div>
            <h4>You Have finished this test! 🥳</h4>
            <h5>Your final score is: {points}</h5>
            <button onClick={reset} className="buttonCards">Retake Test</button>
          </div>)}
            <button className="buttonCards" onClick={() => {
              reset();
              setKnowledgeTest(false);
              }}
              >Go Back to Practice Mode</button>
          </div>
          </>
        )}
        </>
      </div>
      <div className="quiz-card-bottom"></div>
    </div>
  );
}
