import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [login, setLogin] = useState(false);

  function handleLoginClick() {
    setLogin((bool) => !bool);
  }

  return (
    <div className="container pt-2">
      <Header />
    </div>
  );
}

export default App;
