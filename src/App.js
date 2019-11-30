import React, { useState } from "react";
import Result from "./Result.js";
import "./App.css";

function App() {
  const [yesReasons, setYesReasons] = useState("");
  const [noReasons, setNoReasons] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="App">
      <h1>What's the hesitance?</h1>
      <input type="text" onChange={e => setQuestion(e.target.value)} />

      <h1>Why Yes?</h1>
      <textarea
        className="reason-input"
        type="text"
        onChange={e => setYesReasons(e.target.value)}
      />

      <h1>Why No?</h1>
      <textarea
        className="reason-input"
        type="text"
        onChange={e => setNoReasons(e.target.value)}
      />

      <Result yesReasons={yesReasons} noReasons={noReasons} />
    </div>
  );
}

export default App;
