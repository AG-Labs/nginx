import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  let [state, setState] = useState("");

  useEffect(() => {
    axios("api/get")
      .then(result => {
        setState(result.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{state}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
      </header>
    </div>
  );
}

export default App;
