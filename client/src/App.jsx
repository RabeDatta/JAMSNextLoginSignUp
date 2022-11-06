import { StyledContainer } from "./styles/Styles.styled";
import "./global.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { useState } from "react";

function App() {
  const isTokenAvaiable = localStorage.getItem("token") ? true : false;
  const [isLoggedIn, SetIsLoggedIn] = useState(isTokenAvaiable);

  console.log("from app js", isLoggedIn);

  return (
    <StyledContainer>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Dashboard changeLoggedIn={SetIsLoggedIn} /> : <Home />
          }
        />
        <Route
          path="/login"
          element={<Login changeLoggedIn={SetIsLoggedIn} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </StyledContainer>
  );
}

export default App;
