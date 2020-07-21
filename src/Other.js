import React, { useState } from "react";

function Other() {
  const [amount, setAmount] = useState(undefined);
  const [breakDown, setBreakDown] = useState(undefined);
  const [eachInstallment, setEachInstallment] = useState([]);
  const [inputVal, setInputVal] = useState([{ value: "ss" }]);

  const getAmt = (e) => {
    setAmount(e.target.value);
  };

  const getBreakDown = (e) => {
    setBreakDown(e.target.value);
  };
  // {value: ""}
  console.log(inputVal);
  console.log(inputVal[0].value);

  const getTotalBreakDown = (amount = undefined, breakDown) => {
    let installment = Number(amount) / Number(breakDown);
    let equalBreakDown = [...Array(Number(breakDown))].map((data) => {
      return installment;
    });

    const values = [...inputVal];
    for (let data in equalBreakDown) {
      values.push({ value: null });
      setInputVal(values);
    }
    setEachInstallment([...equalBreakDown]);

    return eachInstallment;
  };

  return (
    <div>
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
    </div>
  );
}

export default Other;
