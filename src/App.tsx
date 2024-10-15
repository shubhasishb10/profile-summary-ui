import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(false);

  function handleLoginClick() {
    setLogin((bool) => !bool);
  }

  return (
    <>
      {/* {!login && <Login handleLoginClick={handleLoginClick} />} */}
      <Dashboard />
    </>
  );
}

export default App;
