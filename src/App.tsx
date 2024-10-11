import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(true);

  function handleLoginClick() {
    setLogin(true);
  }

  return (
    <>
      {!login && <Login handleLoginClick={handleLoginClick} />}
      {login && <Dashboard />}
    </>
  );
}

export default App;
