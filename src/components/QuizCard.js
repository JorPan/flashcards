import React from "react";
import "./Card.css";

export default function QuizCard({ question, answer }) {
  return (
    <div className="quiz-card">
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
}
