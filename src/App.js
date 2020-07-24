import React, { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { doBreakdown } from "./Util/doBreakdown";
import { payInstallment } from "./Util/payInstallment";
import "./App.css";
import PopUp from "./components/ModalPop/PopUp";

function App() {
  const [amount, setAmount] = useState(0);
  const [breakdown, setBreakdown] = useState(0);
  const [installmentStructure, setInstallmentStructure] = useState([]);
  const [paidInstallment, setPaidInstallment] = useState([]);
  const [lessInstallmentFeature, setLessInstallmentFeature] = useState(
    "adjust"
  );
  const [show, setShow] = useState(false);

  const getAmount = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const getBreakdown = (e) => {
    const { value } = e.target;
    setBreakdown(value);
  };

  const handleClose = () => {
    setShow(false);
  };

  const adjustFeature = () => {
    setLessInstallmentFeature("adjust");
    console.log(lessInstallmentFeature);
    handleClose();
  };

  const createNewFeature = () => {
    setLessInstallmentFeature("createNew");
    console.log(lessInstallmentFeature);
    handleClose();
  };
  return (
    <div className="container">
      <div className="inputInstallmentWrapper">
        <Input
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
            doBreakdown(
              amount,
              breakdown,
              setInstallmentStructure,
              setPaidInstallment
            )
          }
        >
          Make Installment
        </Button>
      </div>
      <div className="installmentStructureWrapper">
        {installmentStructure.map((content, index) => (
          <div
            className="card border-0"
            style={{ width: "18rem", margin: "2%" }}
          >
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
              eachInstallmentButton
              onClick={() =>
                payInstallment(
                  index,
                  setInstallmentStructure,
                  installmentStructure,
                  setPaidInstallment,
                  paidInstallment,
                  lessInstallmentFeature,
                  setShow
                )
              }
            >
              Pay Rs. {content.installment}
            </Button>
          </div>
        ))}
      </div>
      <PopUp
        show={show}
        handleClose={handleClose}
        adjustFeature={adjustFeature}
        createNewFeature={createNewFeature}
      ></PopUp>
      {paidInstallment.map((data) => (
        <h1>{data.value}</h1>
      ))}
    </div>
  );
}

export default App;
