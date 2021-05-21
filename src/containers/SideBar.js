// import { useState, useEffect } from "react";
import { RiMenuLine, RiHome4Line, RiBook2Line } from "react-icons/ri";
import { GiMagnifyingGlass, GiStack } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { HiPhotograph, HiPlusCircle } from "react-icons/hi";
import Deck from "../components/Deck";
import "./SideBar.css";

export default function SideBar({
  userDecks,
  createNewDeck,
  removeDeck,
  addQuestionsView,
  setAddQuestionsView,
  selectedDeck,
  setSelectedDeck,
}) {
  return (
    <div>
      {addQuestionsView === false ? (
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-icon-bar">
              <RiHome4Line className="sidebar-icon" />
              <RiMenuLine className="sidebar-icon" />
              <GiMagnifyingGlass className="sidebar-icon" />
              <RiBook2Line className="sidebar-icon" />
              <ImLab className="sidebar-icon" />
              <HiPhotograph className="sidebar-icon" />
              <GiStack className="sidebar-icon" />
            </div>
            <h1 className="sidebar-title">Flashcards</h1>
            <HiPlusCircle className="add-deck-button" onClick={createNewDeck} />
          </div>
          <div className="separator"></div>
          {userDecks.map((userDeck, i) => (
            <Deck
              key={`deck ${i}`}
              deck={userDeck}
              removeDeck={removeDeck}
              addQuestionsView={addQuestionsView}
              setAddQuestionsView={setAddQuestionsView}
              selectedDeck={selectedDeck}
              setSelectedDeck={setSelectedDeck}
            />
          ))}
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-icon-bar">
              <RiHome4Line
                className="sidebar-icon"
                onClick={() => setAddQuestionsView(false)}
              />
              <RiMenuLine className="sidebar-icon" />
              <GiMagnifyingGlass className="sidebar-icon" />
              <RiBook2Line className="sidebar-icon" />
              <ImLab className="sidebar-icon" />
              <HiPhotograph className="sidebar-icon" />
              <GiStack
                className="sidebar-icon"
                onClick={() => setAddQuestionsView(false)}
              />
            </div>
            <h1 className="sidebar-title">{selectedDeck.data.name}</h1>
            {/* <HiPlusCircle className="add-deck-button" onClick={createNewDeck} /> */}
          </div>
        </div>
      )}
    </div>
  );
}
