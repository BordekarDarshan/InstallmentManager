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

  const getTotalBreakDown = (amount = undefined, breakDown) => {
    let installment = Number(amount) / Number(breakDown);
    let equalBreakDown = [...Array(Number(breakDown))].map((data) => {
      return installment;
    });
    setEachInstallment([...equalBreakDown]);
    return eachInstallment;
  };

  return (
    <div>
      <input value={amount} onChange={getAmt}></input>
      <input value={breakDown} onChange={getBreakDown}></input>
      {console.log(amount)}
      <button onClick={() => getTotalBreakDown(amount, breakDown)}>
        calculate
      </button>

      {eachInstallment.map((data, index) => (
        <React.Fragment>
          <input value={data}></input>
          <button>Pay</button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Other;
