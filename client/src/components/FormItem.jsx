import { useState } from "react";
import { useField } from "formik";
import {
  StyledLabel,
  StyledTextInput,
  StyledIcon,
  ErrorMsg,
} from "../styles/Login.styled";

import { FiEyeOff, FiEye } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

      {props.type !== "password" && <StyledTextInput {...field} {...props} />}

      {props.type === "password" && (
        <StyledTextInput
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledIcon
          onClick={() => setShow(!show)}
          style={{
            marginLeft: "220px",
            position: "absolute",
          }}
        >
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg> {meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: "hidden" }}> {meta.error}</ErrorMsg>
      )}
    </div>
  );
};
