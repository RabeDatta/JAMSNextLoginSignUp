import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  color: black;
  background-color: var(--light2);
  border-radius: 10px;
  border: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  &:focus {
    color: var(--txt-color);
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || "var(--light1)"};
  //box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  box-shadow: ${(props) => props.bs && "var(--bs)"};
  border-radius: 10px;
  text-align: center;
  padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  /* background-color: transparent;
  border: 2px solid var(--theme);
  color: var(--theme); */

  background-color: var(--theme);
  border: 2px solid var(--theme);
  color: var(--primary);

  font-size: 16px;
  border-radius: 5px;
  text-align: center;
  transition: ease-in-out 0.3s;
  &:hover {
    /* background-color: var(--theme);
    color: var(--primary); */
    background-color: var(--primary);
    color: var(--theme);
    cursor: pointer;
  }
`;

// Input icons
export const StyledIcon = styled.p`
  position: absolute;
  font-size: 21px;
  top: 42px;
  left: 20px;
`;

// Error
export const ErrorMsg = styled.div`
  font-size: 11px;
  color: var(--red);
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  padding: 2px;
  margin-top: 10px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: var(--theme);
  transition: ease-in-out 0.3s;

  &:hover {
    font-weight: bold;
    /* letter-spacing: 2px; */
    font-size: 1.1rem;
  }
`;
