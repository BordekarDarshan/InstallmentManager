import React, { useState } from "react";

function Other() {
  const [amount, setAmount] = useState(undefined);
  const [breakDown, setBreakDown] = useState(undefined);
  const [eachInstallment, setEachInstallment] = useState([]);
  const [inputVal, setInputVal] = useState([{ value: "" }]);

  const getAmt = (e) => {
    setAmount(e.target.value);
  };

  const getBreakDown = (e) => {
    setBreakDown(e.target.value);
  };

  console.log(inputVal);

  const getTotalBreakDown = (amount = undefined, breakDown) => {
    let installment = Number(amount) / Number(breakDown);
    const values = [...inputVal];
    let equalBreakDown = [...Array(Number(breakDown))].map((data) => {
      values.push({ value: null });
      setInputVal(values);
      return installment;
    });

    setEachInstallment([...equalBreakDown]);
    return eachInstallment;
  };

  return (
    <>
      <input value={amount} onChange={getAmt}></input>
      <input value={breakDown} onChange={getBreakDown}></input>

      <button onClick={() => getTotalBreakDown(amount, breakDown)}>
        calculate
      </button>

      {eachInstallment.map((data, index) => (
        <React.Fragment>
          <input id={index} value={inputVal[index].value}></input>
          <button>Pay</button>
        </React.Fragment>
      ))}
    </>
  );
}

export default Other;
