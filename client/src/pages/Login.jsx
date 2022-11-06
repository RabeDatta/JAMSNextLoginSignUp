import { useState } from "react";
import {
  StyledTextInput,
  StyledLabel,
  StyledFormArea,
  StyledFormButton,
  ExtraText,
  TextLink,
} from "../styles/Login.styled";

import {
  Avatar,
  AvatarContainer,
  ButtonGroup,
  StyledSubTitle,
  StyledTitle,
} from "../styles/Home.styled";

import Logo from "/assets/jamsNext.png";

import { FiMail, FiLock } from "react-icons/fi";
import { StyledButton } from "../styles/Styles.styled";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormItem";
import * as Yup from "yup";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";

function Login({ changeLoggedIn }) {
  const history = useNavigate();

  const isLoggedIn = localStorage.getItem("username") ? true : false;

  const sendLoginRequest = async (email, password) => {
    const res = await axios
      .post("http://localhost:5001/api/login", {
        email,
        password,
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.status === 400);
        if (err.response.status === 400) return;
      });

    const data = await res.data;

    console.log("name", data.user.name);

    if (data.user) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.name);

      changeLoggedIn(true);
    }

    return data;
  };

  return (
    <div>
      {!isLoggedIn ? (
        <StyledFormArea bs>
          <Link to="/">
            <Avatar image={Logo} />
          </Link>
          <StyledTitle color={"var(--theme)"} size={50}>
            Login
          </StyledTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(6, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              const { email, password } = values;
              sendLoginRequest(email, password).then(() => history("/"));
            }}
          >
            {() => (
              <Form>
                <TextInput
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="example@example.com"
                  icon={<FiMail />}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="*********"
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  <StyledFormButton type="submit">Login</StyledFormButton>
                </ButtonGroup>
              </Form>
            )}
          </Formik>

          <ExtraText>
            Not a user? <TextLink to="/signup">Signup </TextLink>
          </ExtraText>
        </StyledFormArea>
      ) : (
        <div>
          <StyledSubTitle style={{ fontSize: "2em" }}>
            Congrats! You are logged in.
          </StyledSubTitle>
          <ButtonGroup>
            <StyledButton to="/"> Back to Home </StyledButton>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
}

export default Login;
