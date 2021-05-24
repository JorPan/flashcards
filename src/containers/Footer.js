import React from "react";

export default function Footer() {
  const clearLocalStorage = () => {
    window.localStorage.clear();
  };

  return (
    <div className="footer">
      <button className="clear-storage-button" onClick={clearLocalStorage}>
        clear local storage
      </button>
    </div>
  );
}
