import React from "react";
import QuizCard from "../components/QuizCard";
import "./HomePage.css";

export default function HomePage({ quizMode, selectedDeck }) {
  return (
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <h1 className="home-page-title">Home Page</h1>
      ) : (
        <div>
          <h1 className="home-page-title">Practice Time!</h1>
          <h2 className="selected-deck-title">{selectedDeck.data.name}</h2>
          {selectedDeck.content.map((question) => (
            <QuizCard question={question.front} answer={question.back} />
          ))}
        </div>
      )}
    </div>
  );
}
