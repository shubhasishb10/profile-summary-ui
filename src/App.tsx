import React, { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  function handleLoginClick() {
    setLogin((bool) => !bool);
  }

  return (
    <div className="app">
      <h1>Shubhasish Bhunia</h1>
      <h4>Details comming soon........</h4>
    </div>
  );
}

export default App;
