import { AiFillPlayCircle } from "react-icons/ai";
import { HiPlusCircle, HiStop } from "react-icons/hi";
import Deck from "../components/Deck";
import IconBar from "./IconBar";
import Card from "../components/Card";
import "./SideBar.css";

export default function SideBar({
  userDecks,
  createNewDeck,
  removeDeck,
  addQuestionsView,
  setAddQuestionsView,
  selectedDeck,
  setSelectedDeck,
  setUserDecks,
  addCard,
  quizMode,
  setQuizMode,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
  deleteCard,
  updateCard,
}) {
  return (
    <div>
      {addQuestionsView === false ? (
        <div className="sidebar">
          <div className="sidebar-header">
            <IconBar
              setQuizMode={setQuizMode}
              setAddQuestionsView={setAddQuestionsView}
            />
            <h1 className="sidebar-title">Flashcards</h1>
            <HiPlusCircle className="add-deck-button" onClick={createNewDeck} />
          </div>
          <div className="separator"></div>
          {userDecks.map((userDeck, i) => (
            <Deck
              key={`deck ${i}`}
              deck={userDeck}
              removeDeck={removeDeck}
              setAddQuestionsView={setAddQuestionsView}
              setSelectedDeck={setSelectedDeck}
              userDecks={userDecks}
              setUserDecks={setUserDecks}
              setQuizMode={setQuizMode}
              setQuestionNumber={setQuestionNumber}
              setCardSide={setCardSide}
            />
          ))}
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-header">
            <IconBar
              setQuizMode={setQuizMode}
              setAddQuestionsView={setAddQuestionsView}
            />
            <h1 className="sidebar-title">{selectedDeck.data.name}</h1>
            <div className="deck-data">
              <p className="deck-length">{selectedDeck.content.length} cards</p>
              {quizMode === false ? (
                <AiFillPlayCircle
                  className="deck-button"
                  onClick={() => setQuizMode(!quizMode)}
                />
              ) : (
                <HiStop
                  className="deck-button"
                  onClick={() => setQuizMode(!quizMode)}
                />
              )}
              <HiPlusCircle className="deck-button" onClick={addCard} />
            </div>
          </div>
          <div className="separator"></div>
          {selectedDeck
            ? selectedDeck.content.map((currentCard, i) => (
                <Card
                  key={i}
                  currentCard={currentCard}
                  cardNumber={i}
                  deleteCard={deleteCard}
                  updateCard={updateCard}
                  setCardSide={setCardSide}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
}