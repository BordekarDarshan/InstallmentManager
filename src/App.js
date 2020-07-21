import React, { useState } from "react";
import Other from "./Other";

function App() {
  const [fields, setFields] = useState([{ value: null }]);

  // give dynamic inputs
  function handleChange(i, event) {
    console.log(i);
    const values = [...fields];
    console.log(values);
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    console.log(values);
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    console.log(values);
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <React.Fragment>
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <button type="button" onClick={() => handleAdd()}>
          +
        </button>

        {fields.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <input
                type="text"
                placeholder="Enter text"
                value={field.value || ""}
                onChange={(e) => handleChange(idx, e)}
              />
              <button type="button" onClick={() => handleRemove(idx)}>
                X
              </button>
            </div>
          );
        })}
      </div>
      <Other></Other>
    </React.Fragment>
  );
}

export default App;
