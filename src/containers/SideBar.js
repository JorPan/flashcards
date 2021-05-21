// import { useState, useEffect } from "react";
import { RiMenuLine, RiHome4Line, RiBook2Line } from "react-icons/ri";
import { GiMagnifyingGlass, GiStack } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { HiPhotograph, HiPlusCircle } from "react-icons/hi";
import Deck from "../components/Deck";
import "./SideBar.css";

export default function SideBar({ userDecks }) {
  return (
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
        <HiPlusCircle className="add-deck-button" />
      </div>
      <div className="separator"></div>
      {userDecks.length > 0
        ? userDecks.map((userDeck, i) => (
            <Deck key={`deck ${i}`} index={i} deck={userDeck} />
          ))
        : null}
    </div>
  );
}
