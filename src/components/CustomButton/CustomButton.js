import React from "react";
import { ButtonContainer } from "./Button.Style";

function CustomButton({ children, ...props }) {
  return (
    <ButtonContainer {...props} className="btn btn-primary ">
      {children}
    </ButtonContainer>
  );
}

export default CustomButton;
