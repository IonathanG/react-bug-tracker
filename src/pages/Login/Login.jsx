import React, { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import ButtonActions from "../../components/Buttons/Button_Actions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.background_MainSection};
`;

const Left = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.background_Login};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  z-index: 10;
`;

const Logo = styled.img`
  width: 130px;
  height: auto;
`;

const FormContainer = styled.div`
  margin-right: -240px;
  width: 380px;
  height: 450px;
  padding: 40px 35px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  color: ${({ theme }) => theme.color_NavItem};
`;

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

const DemoButtonContainer = styled(ButtonContainer)`
  gap: 20px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.background_Modal};
`;

const Right = styled.div`
  flex: 3;
`;

const Img = styled.img`
  height: 100vh;
  object-fit: cover;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const Login = () => {
  const { control, handleSubmit } = useForm({});
  const [showLogin, setShowLogin] = useState(true);

  const ButtonStyle = {
    theme: "rgb(0,123,254)",
    hover: {
      color: "white",
    },
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Left>
        <Logo src={"/logo/BugTrackerWelcome.svg"} alt="logo" />

        <FormContainer>
          {showLogin && (
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
                  {/* <Divider /> */}
                </ButtonContainer>
              </InputsContainer>
            </Form>
          )}

          {!showLogin && (
            <>
              <Title>Select Demo Role to Login as:</Title>
              <DemoButtonContainer>
                <ButtonActions buttonStyle={ButtonStyle} text={"ADMIN"} />
                <ButtonActions
                  buttonStyle={ButtonStyle}
                  text={"PROJECT MANAGER"}
                />
                <ButtonActions buttonStyle={ButtonStyle} text={"DEVELOPER"} />
                <ButtonActions buttonStyle={ButtonStyle} text={"SUBMITTER"} />
              </DemoButtonContainer>
            </>
          )}

          <ButtonContainer onClick={() => setShowLogin(!showLogin)}>
            <Divider />
            <ButtonBasic
              text={showLogin ? "DEMO APPLICATION" : "BACK TO LOGIN"}
            />
          </ButtonContainer>
        </FormContainer>
      </Left>

      <Right>
        <Img src={"/images/frontpage.webp"} alt="login_background" />
      </Right>
    </Container>
  );
};

export default Login;
