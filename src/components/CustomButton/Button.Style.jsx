import styled, { css } from "styled-components";

const eachInstallmentButtonStyle = css`
  width: 96% !important;
  margin: 1%;
`;

const GetButtonStyles = (props) => {
  if (props.eachInstallmentButton) {
    return eachInstallmentButtonStyle;
  }
};

export const ButtonContainer = styled.button`
  ${GetButtonStyles};
`;
