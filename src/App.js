import { useState, useEffect, useCallback } from "react";
import HomePage from "./pages/HomePage";
import SideBar from "./containers/SideBar";
import { initialDecks } from "./InitialData/InitialDecks";
import "./App.css";

function App() {
  const [userDecks, setUserDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState({});
  const [addQuestionsView, setAddQuestionsView] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [cardSide, setCardSide] = useState("front");

  useEffect(() => {
    const data = localStorage.getItem("deck-list");
    if (data) {
      setUserDecks(JSON.parse(data));
    } else {
      setUserDecks(initialDecks);
    }
  }, [setUserDecks]);

  useEffect(() => {
    localStorage.setItem("deck-list", JSON.stringify(userDecks));
  });

  //creates a new deck and adds it to the user deck list state: userDecks
  const createNewDeck = () => {
    const newDeck = {
      id: userDecks.length,
      data: { name: "Click title area to name your new deck" },
      content: [],
    };
    setUserDecks([...userDecks, newDeck]);
  };

  // Creates a new card, and adds it to the selected deck
  const addCard = () => {
    const newCard = { front: "Front Side", back: "Back Side" };
    const newCardList = [...selectedDeck.content, newCard];
    const index = selectedDeck.id;
    const updatedDeckData = {
      id: index,
      data: selectedDeck.data,
      content: newCardList,
    };
    setSelectedDeck(updatedDeckData);

    userDecks
      .filter((deck) => deck.id !== selectedDeck.id)
      .splice(index, 1, updatedDeckData);
  };

  // Removes the selected card from the selected deck
  const deleteCard = (currentCard) => {
    const filteredCardList = selectedDeck.content.filter(
      (card) =>
        card.front !== currentCard.front && card.back !== currentCard.back
    );
    const filteredDecks = userDecks.filter(
      (deck) => deck.id !== selectedDeck.id
    );
    const newSelectedDeck = {
      id: selectedDeck.id,
      data: selectedDeck.data,
      content: filteredCardList,
    };
    setSelectedDeck(newSelectedDeck);

    userDecks.splice(selectedDeck.id, 1, newSelectedDeck);
  };

  //Updates the selected card to user inputs
  const updateCard = (index, front, back) => {
    const newCardData = { front: front, back: back };

    const cardList = [...selectedDeck.content];
    cardList.splice(index, 1, newCardData);

    const newSelectedDeckData = {
      id: selectedDeck.id,
      data: selectedDeck.data,
      content: cardList,
    };
    setSelectedDeck(newSelectedDeckData);

    userDecks.splice(selectedDeck.id, 1, newSelectedDeckData);
  };

  // Removes the selected deck from deck list state: userDecks
  const removeDeck = (deck) => {
    const updatedDeckList = userDecks.filter(
      (currentDeck) => currentDeck.id !== deck.id
    );
    // const updatedDeckList = userDecks.splice(deck.id, 1);
    console.log(updatedDeckList);
    setUserDecks(updatedDeckList);
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
        deleteCard={deleteCard}
        updateCard={updateCard}
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
        deleteCard={deleteCard}
      />
    </div>
  );
}

export default App;
