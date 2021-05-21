import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SideBar from "./containers/SideBar";
import { initialDecks } from "./InitialData/InitialDecks";
import "./App.css";

function App() {
  const [userDecks, setUserDecks] = useState(initialDecks);

  return (
    <div className="App">
      <SideBar userDecks={userDecks} setUserDecks={setUserDecks} />
      <HomePage userDecks={userDecks} />
    </div>
  );
}

export default App;
