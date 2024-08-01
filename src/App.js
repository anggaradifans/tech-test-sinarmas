import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(event) {
    // Filter out non-digit characters
    const filteredValue = event.target.value.replace(/[^0-9]/g, "");
    setNumber(filteredValue);
  }

  function handleSubmit() {
    if (number === "") {
      setResult(0);
      return;
    }
    // Reverse the number and convert to integer
    const reversedNumber = parseInt(number.split("").reverse().join(""), 10);
    const difference = Math.abs(Number(number) - reversedNumber);
    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={number} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
