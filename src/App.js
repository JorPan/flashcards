import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SideBar from "./containers/SideBar";
import { initialDecks } from "./InitialData/InitialDecks";
import "./App.css";

function App() {
  const [userDecks, setUserDecks] = useState(initialDecks);
  const [addQuestionsView, setAddQuestionsView] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState({});
  const [quizMode, setQuizMode] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [cardSide, setCardSide] = useState("front");

  useEffect(() => {
    setUserDecks(userDecks);
  }, [userDecks, selectedDeck]);

  // needs work!
  const removeDeck = (deckId) => {
    const updatedDeckList = userDecks.filter(
      (currentDeck) => currentDeck.id !== deckId
    );
    console.log(updatedDeckList);
    setUserDecks(updatedDeckList);
  };

  const createNewDeck = () => {
    const newDeck = {
      id: userDecks.length,
      data: { name: "Click here to name your new deck" },
      content: [],
    };
    setUserDecks([...userDecks, newDeck]);
  };

  const addCard = () => {
    console.log("new card yay");
  };

  return (
    <div className="App">
      <SideBar
        userDecks={userDecks}
        setUserDecks={setUserDecks}
        removeDeck={removeDeck}
        createNewDeck={createNewDeck}
        addQuestionsView={addQuestionsView}
        setAddQuestionsView={setAddQuestionsView}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
        addCard={addCard}
        quizMode={quizMode}
        setQuizMode={setQuizMode}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        cardSide={cardSide}
        setCardSide={setCardSide}
      />
      <HomePage
        userDecks={userDecks}
        setUserDecks={setUserDecks}
        quizMode={quizMode}
        setQuizMode={setQuizMode}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        cardSide={cardSide}
        setCardSide={setCardSide}
      />
    </div>
  );
}

export default App;
