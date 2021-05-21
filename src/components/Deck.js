import { useState, useEffect } from "react";
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
}) {
  const [deckTitle, setDeckTitle] = useState(deck.data.name);
  const [changingName, setChangingName] = useState(false);

  useEffect(() => {
    setDeckTitle(deckTitle);
  }, [deckTitle]);

  const changeDeckName = () => {
    setChangingName(true);
  };

  const handleChange = (event) => {
    setDeckTitle(event.target.value);
  };

  const handleSubmit = () => {
    setChangingName(false);
  };

  return (
    <div className="deck" key={`deck ${deck.id}`}>
      {changingName === false ? (
        <p onClick={changeDeckName} className="deck-title">
          {deckTitle}
        </p>
      ) : (
        <form className="edit-deck">
          <input
            className="edit-deck-name"
            type="text"
            value={deckTitle}
            onChange={handleChange}
          ></input>
          <button className="save-deck" onClick={handleSubmit} type="submit">
            Save
          </button>
        </form>
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
          // onClick={() => removeDeck(deckNumber)}
        />
        <BsBoxArrowInRight
          className="view-deck-button"
          onClick={() => {
            setSelectedDeck(deck);
          }}
        />
      </div>
    </div>
  );
}
