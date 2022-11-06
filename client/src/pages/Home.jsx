import React from "react";
import { Link } from "react-router-dom";
import {
  StyledTitle,
  StyledSubTitle,
  AvatarContainer,
  Avatar,
  ButtonGroup,
  StyledButton,
} from "../styles/Home.styled";
import Logo from "/assets/jamsNext.png";

function Home() {
  return (
    <div>
      <AvatarContainer>
        <Link to="/">
          <Avatar image={Logo} />
        </Link>
      </AvatarContainer>
      <StyledTitle size={65}> Welcome to JAMS Next </StyledTitle>
      <StyledSubTitle size={27}>
        A single platform for applicants and recruiters.
      </StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/login"> Login </StyledButton>
        <StyledButton to="/signup" $primary>
          Signup
        </StyledButton>
      </ButtonGroup>
    </div>
  );
}

export default Home;
