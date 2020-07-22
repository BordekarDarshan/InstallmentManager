import React, { useState } from "react";
import { doBreakdown } from "./Util/doBreakdown";

function App() {
  const [amount, setAmount] = useState(0);
  const [breakdown, setBreakdown] = useState(0);
  const [installmentStructure, setInstallmentStructure] = useState([]);

  const getAmount = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const getBreakdown = (e) => {
    const { value } = e.target;
    setBreakdown(value);
  };

  return (
    <div>
      <input onChange={getAmount}></input>
      <input onChange={getBreakdown}></input>
      {console.log(installmentStructure)}
      <button
        onClick={() => doBreakdown(amount, breakdown, setInstallmentStructure)}
      >
        Make Installment
      </button>

      {installmentStructure.map((content, index) => (
        <p>
          <input
            value={content.value}
            onChange={(e) => {
              const value = e.target.value;
              setInstallmentStructure((installmentStructure) =>
                installmentStructure.map((content, i) =>
                  content.id === index
                    ? {
                        ...content,
                        value,
                      }
                    : content
                )
              );
            }}
          ></input>

          <button>Pay {content.installment}</button>
        </p>
      ))}
    </div>
  );
}

export default App;
