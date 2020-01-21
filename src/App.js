import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./Child/Child";
import Parent from "./Parent/Parent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Parent></Parent>
        <Child></Child>
      </header>
    </div>
  );
}

export default App;
