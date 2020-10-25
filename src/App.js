import React from "react";
import "./styles.scss";
import useInput from "./useInput";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [text, setText, bindText, resetText] = useInput("");

  useLocalStorage("TEXT", text, setText);

  return (
    <div className="App">
      <h1>useInput with useLocalStorage</h1>
      <input type="text" {...bindText} />
      <button onClick={resetText}>Reset</button>
      <br />
      <p>You wrote: {text} </p>
    </div>
  );
}
