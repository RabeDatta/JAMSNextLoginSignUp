import { useState, useEffect } from "react";

import {
  StyledTitle,
  StyledSubTitle,
  AvatarContainer,
  Avatar,
  ButtonGroup,
  StyledButton,
} from "../styles/Home.styled";

import { StyledFormArea, StyledFormButton } from "../styles/Login.styled";

import Logo from "/assets/jamsNext.png";

import { Link, useNavigate } from "react-router-dom";

function Dashboard({ changeLoggedIn }) {
  const navigate = useNavigate();

  const logoutUser = () => {
    alert("Logged Out");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    changeLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <AvatarContainer>
        <Link to="/">
          <Avatar image={Logo} />
        </Link>
      </AvatarContainer>

      <StyledFormArea bg={"transparent"}>
        <StyledTitle size={65}>
          Welcome {localStorage.getItem("username")}
        </StyledTitle>
        <ButtonGroup>
          <StyledFormButton onClick={logoutUser}> Logout </StyledFormButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
}

export default Dashboard;
