import React from "react";

function Button({ children, ...props }) {
  return (
    <button {...props} className="btn btn-primary ">
      {children}
    </button>
  );
}

export default Button;
