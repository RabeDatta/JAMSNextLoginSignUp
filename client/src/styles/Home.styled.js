import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "var(--primary)")};
  padding: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "var(--primary)")};
  padding: 5px;
  margin-bottom: 25px;
`;

export const AvatarContainer = styled.div`
  background-color: transparent;
  width: 100%;
  padding: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  width: 300px;
  height: 100px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const StyledButton = styled(Link)`
  height: 50px;
  width: 137px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$primary ? "var(--sec)" : "var(--primary)"};
  font-size: 16px;
  border: 3px solid var(--sec);
  border-radius: 10px;
  color: var(--txt-color);
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? "var(--primary)" : "var(--sec)"};
    color: var(--txt-color);
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;
