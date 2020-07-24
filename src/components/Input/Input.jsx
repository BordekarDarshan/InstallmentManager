import React from "react";
import { InputContainer } from "./Input.Style";

function Input({ children, ...other }) {
  return <InputContainer {...other} className="form-control"></InputContainer>;
}

export default Input;
