import React, { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { doBreakdown } from "./Util/doBreakdown";
import { payInstallment } from "./Util/payInstallment";
import "./App.css";

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

  return (
    <div className="container">
      <div className="inputInstallmentWrapper">
        <Input
          type="text"
          onChange={getAmount}
          placeholder="Enter amount..."
          inputInstallment
        ></Input>
        <Input
          onChange={getBreakdown}
          placeholder="installments... "
          inputInstallment
        ></Input>

        <Button
          onClick={() =>
            doBreakdown(amount, breakdown, setInstallmentStructure)
          }
        >
          Make Installment
        </Button>
      </div>
      <div className="installmentStructureWrapper">
        {installmentStructure.map((content, index) => (
          <div className="card" style={{ width: "18rem", margin: "2%" }}>
            <Input
              eachInstallment
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
            ></Input>

            <Button
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
            </Button>
          </div>
        ))}
      </div>

      {paidInstallment.map((data) => (
        <h1>{data.value}</h1>
      ))}
    </div>
  );
}

export default App;
