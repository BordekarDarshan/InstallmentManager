import React, { useState } from "react";

import Input from "./components/Input/Input";
import { doBreakdown } from "./Util/doBreakdown";
import { payInstallment } from "./Util/payInstallment";
import "./App.css";
import PopUp from "./components/ModalPop/PopUp";
import CustomButton from "./components/CustomButton/CustomButton";

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
    handleClose();
  };

  const createNewFeature = () => {
    setLessInstallmentFeature("createNew");
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

        <CustomButton
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
        </CustomButton>
      </div>
      <div className="installmentStructureWrapper">
        {installmentStructure.map((content, index) => (
          <div
            className="card border-0"
            style={{ width: "18rem", margin: "2%" }}
          >
            <Input
              type="number"
              step="0.1"
              eachInstallment
              value={content.value}
              onChange={(e) => {
                const value = Number(e.target.value);
                setInstallmentStructure((installmentStructure) =>
                  installmentStructure.map((content, i) =>
                    i === index
                      ? {
                          ...content,
                          value,
                        }
                      : content
                  )
                );
              }}
            ></Input>

            <CustomButton
              eachInstallmentButton
              onClick={() =>
                payInstallment(
                  index,
                  setInstallmentStructure,
                  installmentStructure,
                  setPaidInstallment,
                  paidInstallment,
                  lessInstallmentFeature
                )
              }
            >
              Pay Rs. {content.installment}
            </CustomButton>
          </div>
        ))}
      </div>
      <PopUp
        show={show}
        handleClose={handleClose}
        adjustFeature={adjustFeature}
        createNewFeature={createNewFeature}
      ></PopUp>
      <React.Fragment>
        {paidInstallment.length > 0 && <span>Installment History</span>}
        <div className="paymentHistory">
          {paidInstallment.map((data) => (
            <div className="box">
              <span>Installment</span>
              <h1>Rs. {data.value}</h1>
            </div>
          ))}
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
