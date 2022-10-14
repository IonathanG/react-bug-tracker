import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import useAuth from "../../hooks/useAuth";
const Form = styled.form``;

const Title = styled.div`
  font-weight: 300;
  font-size: 18px;
`;

const InputsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LoginForm = () => {
  const { setAuth } = useAuth();

  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "/";

  const { control, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);

    try {
      // const roles = response?.data?.roles;
      // setAuth({ user, pwd, roles, accessToken });
      setAuth({});
      // navigate(from, { replace: true });
    } catch (err) {
      console.log("No Server Response");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Log in to your account</Title>

      {/* Email Input */}
      <InputsContainer>
        <Controller
          name="Email"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              size="small"
              placeholder="Email"
              value={value ? value : ""}
              onChange={onChange}
              ref={ref}
              error={Boolean(fieldState.error)}
              helperText={fieldState?.error?.message}
            ></TextField>
          )}
        />

        {/* Password Input */}
        <Controller
          name="Password"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              size="small"
              placeholder="Password"
              value={value ? value : ""}
              onChange={onChange}
              ref={ref}
              error={Boolean(fieldState.error)}
              helperText={fieldState?.error?.message}
            ></TextField>
          )}
        />

        <ButtonContainer>
          <ButtonBasic text={"LOGIN"} />
        </ButtonContainer>
      </InputsContainer>
    </Form>
  );
};

export default LoginForm;
