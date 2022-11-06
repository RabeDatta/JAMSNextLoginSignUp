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

import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { StyledButton } from "../styles/Styles.styled";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormItem";
import * as Yup from "yup";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const history = useNavigate();

  const isLoggedIn = localStorage.getItem("username") ? true : false;

  const sendRequest = async (newUser) => {
    try {
      const res = await axios.post("http://localhost:5001/api/signup", newUser);
      const data = await res.data;
      return data;
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <StyledFormArea bs>
          <Link to="/">
            <Avatar image={Logo} />
          </Link>
          <StyledTitle
            style={{ marginBottom: "0" }}
            color={"var(--theme)"}
            size={40}
          >
            Sign Up
          </StyledTitle>
          <StyledSubTitle
            style={{ margin: "0", marginBottom: "20px" }}
            color={"var(--light)"}
            size={20}
          >
            Join JAMSNext for free!
          </StyledSubTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatPassword: "",
              name: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(6, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
              name: Yup.string().required("Required"),
              repeatPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password")], "Passwords must match"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              const { name, email, password } = values;

              const newUsers = {
                name,
                email,
                password,
              };

              console.log(newUsers);
              sendRequest(newUsers).then(() => history("/login"));
            }}
          >
            {() => (
              <Form>
                <TextInput
                  name="name"
                  type="text"
                  label="Username"
                  placeholder="Rabe Datta"
                  icon={<FiUser />}
                />
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
                <TextInput
                  name="repeatPassword"
                  type="password"
                  label="Repeat Password"
                  placeholder="*********"
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  <StyledFormButton type="submit">Sign up</StyledFormButton>
                </ButtonGroup>
              </Form>
            )}
          </Formik>

          <ExtraText>
            Already a user? <TextLink to="/login">Login </TextLink>
          </ExtraText>
        </StyledFormArea>
      ) : (
        <div>
          <StyledSubTitle style={{ fontSize: "2em" }}>
            You already logged in. No need to sign up!
          </StyledSubTitle>
          <ButtonGroup>
            <StyledButton to="/"> Back to Home </StyledButton>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
}

export default SignUp;
