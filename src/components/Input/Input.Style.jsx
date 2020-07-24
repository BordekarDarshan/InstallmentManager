import styled, { css } from "styled-components";

const inputInstallmentStyle = css`
  width: 46% !important;
  margin: 1%;
`;
const eachInstallmentStyle = css`
  width: 96% !important;
  margin: 1%;
`;

const GetInputStyles = (props) => {
  if (props.inputInstallment) {
    return inputInstallmentStyle;
  }
  if (props.eachInstallment) {
    return eachInstallmentStyle;
  }
};

export const InputContainer = styled.input`
  ${GetInputStyles};
`;
