import React, { useState } from "react";

import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [breakDown, setBreakDown] = useState("");
  const [part, setPart] = useState([]);
  const getAmt = (e) => {
    setAmount(e.target.value);
  };

  const getBreakDown = (e) => {
    setBreakDown(e.target.value);
  };

  const getTotalBreakDown = (amount, breakDown) => {
    let installment = Number(amount) / Number(breakDown);
    let equalBreakDown = [...Array(Number(breakDown))].map((data) => {
      return installment;
    });
    setPart(equalBreakDown);
    return part;
  };

  return (
    <div className="App">
      {console.log(amount, breakDown, part)}
      <input value={amount} onChange={getAmt}></input>
      <input value={breakDown} onChange={getBreakDown}></input>
      <button onClick={() => getTotalBreakDown(amount, breakDown)}>
        calculate
      </button>
      {part.map((data) => (
        <div>
          <span>amount to pay {data}</span>
          <input></input>
          {/* on pay button 4-5 condition */}
          <button>Pay</button>
        </div>
      ))}
    </div>
  );
}

export default App;
