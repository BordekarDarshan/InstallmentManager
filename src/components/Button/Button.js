import React from "react";
import { ButtonContainer } from "./Button.Style";

function Button({ children, ...props }) {
  return (
    <ButtonContainer {...props} className="btn btn-primary ">
      {children}
    </ButtonContainer>
  );
}

export default Button;
