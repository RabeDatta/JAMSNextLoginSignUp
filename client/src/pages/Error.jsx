import React from "react";
import { ButtonGroup, StyledSubTitle } from "../styles/Home.styled";
import { StyledButton } from "../styles/Styles.styled";

const Error = () => {
  return (
    <div>
      <StyledSubTitle style={{ fontSize: "2em" }}>
        Something Went Wrong Try Again Later!
      </StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/"> Back to Home </StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Error;
