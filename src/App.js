import { useState } from "react";
import HomePage from "./pages/HomePage";
import SideBar from "./containers/SideBar";
import { initialDecks } from "./InitialData/InitialDecks";
import "./App.css";

function App() {
  const [userDecks, setUserDecks] = useState(initialDecks);
  const [addQuestionsView, setAddQuestionsView] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState({});

  // needs work!
  // const removeDeck = (deckId) => {
  //   console.log(deckId);
  //   const updatedDeckList = userDecks.filter(
  //     (currentDeck) => currentDeck.id !== deckId
  //   );
  //   setUserDecks(updatedDeckList);
  // };

  const createNewDeck = () => {
    const newDeck = {
      id: userDecks.length,
      data: { name: "Click here to name your deck" },
      content: [],
    };
    setUserDecks([...userDecks, newDeck]);
  };

  return (
    <div className="App">
      <SideBar
        userDecks={userDecks}
        setUserDecks={setUserDecks}
        // removeDeck={removeDeck}
        createNewDeck={createNewDeck}
        addQuestionsView={addQuestionsView}
        setAddQuestionsView={setAddQuestionsView}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
      />
      <HomePage userDecks={userDecks} setUserDecks={setUserDecks} />
    </div>
  );
}

export default App;
