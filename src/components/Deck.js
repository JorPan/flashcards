import { useEffect, useState } from "react";
import { GoTrashcan } from "react-icons/go";
import "./Deck.css";

export default function Deck({ deck, index, removeDeck }) {
  const [deckTitle, setDeckTitle] = useState(deck.data.name);
  const [changingName, setChangingName] = useState(false);

  const changeDeckName = (event) => {
    setChangingName(true);
  };

  const handleChange = (event) => {
    setDeckTitle(event.target.value);
  };

  const handleSubmit = () => {
    setChangingName(false);
  };

  return (
    <div className="deck" key={`deck ${index}`}>
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
            onChange={handleChange}
          ></input>
          <button className="save-deck" onClick={handleSubmit} type="button">
            Save
          </button>
        </div>
      )}

      <p className="add-cards-button">Add cards</p>

      <GoTrashcan
        className="remove-deck-button"
        onClick={() => removeDeck(deck)}
      />
    </div>
  );
}
