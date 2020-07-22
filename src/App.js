import React, { useState } from "react";
import { doBreakdown } from "./Util/doBreakdown";
import { payInstallment } from "./Util/payInstallment";

function App() {
  const [amount, setAmount] = useState(0);
  const [breakdown, setBreakdown] = useState(0);
  const [installmentStructure, setInstallmentStructure] = useState([]);
  const [paidInstallment, setPaidInstallment] = useState([]);

  const getAmount = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const getBreakdown = (e) => {
    const { value } = e.target;
    setBreakdown(value);
  };
  console.log(installmentStructure);
  return (
    <div>
      <input onChange={getAmount}></input>
      <input onChange={getBreakdown}></input>

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
              const value = Number(e.target.value);
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

          <button
            onClick={() =>
              payInstallment(
                index,
                setInstallmentStructure,
                installmentStructure,
                setPaidInstallment,
                paidInstallment,
                "adjust"
              )
            }
          >
            Pay {content.installment}
          </button>
        </p>
      ))}

      {paidInstallment.map((data) => (
        <h1>{data.installment}</h1>
      ))}
    </div>
  );
}

export default App;
