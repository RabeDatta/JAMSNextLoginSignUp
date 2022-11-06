import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(248, 231, 113, 1) 0%,
    rgba(214, 208, 149, 1) 35%,
    rgba(168, 159, 121, 1) 100%
  );
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid var(--primary);
  border-radius: 2px;
  color: var(--primary);
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: var(--primary);
    color: var(--theme);
    cursor: pointer;
  }
`;
