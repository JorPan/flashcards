import { useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { BsBoxArrowInRight } from "react-icons/bs";
import "./Deck.css";

export default function Deck({
  deck,
  removeDeck,
  addQuestionsView,
  setAddQuestionsView,
  selectedDeck,
  setSelectedDeck,
  userDecks,
  setUserDecks,
  addCard,
  quizMode,
  setQuizMode,
}) {
  const [deckTitle, setDeckTitle] = useState(deck.data.name);
  const [changingName, setChangingName] = useState(false);

  const changeDeckName = () => {
    setChangingName(true);
  };

  const titleChange = (event) => {
    setDeckTitle(event.target.value);
  };

  const titleSubmit = () => {
    setChangingName(false);
    const filteredDecks = userDecks.filter(
      (userDeck) => userDeck.id !== deck.id
    );
    const newDeckData = {
      id: deck.id,
      data: { name: deckTitle },
      content: deck.content,
    };
    const index = newDeckData.id;
    filteredDecks.splice(index, 0, newDeckData);
    setUserDecks(filteredDecks);
  };

  return (
    <div className="deck" key={`deck ${deck.id}`}>
      {changingName === false ? (
        <p onClick={changeDeckName} className="deck-title">
          {deckTitle}
        </p>
      ) : (
        <div className="edit-deck">
          <input
            className="edit-deck-name"
            type="text"
            value={deckTitle}
            onChange={titleChange}
          ></input>
          <button className="save-deck" onClick={titleSubmit} type="submit">
            Save
          </button>
        </div>
      )}
      <p
        className="add-cards-button"
        onClick={() => {
          setAddQuestionsView(true);
          setSelectedDeck(deck);
        }}
      >
        Add cards
      </p>

      <div className="deck-buttons">
        <GoTrashcan
          className="remove-deck-button"
          onClick={() => removeDeck(deck.id)}
        />
        <BsBoxArrowInRight
          className="view-deck-button"
          onClick={() => {
            setSelectedDeck(deck);
            setQuizMode(true);
          }}
        />
      </div>
    </div>
  );
}
