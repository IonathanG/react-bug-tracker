import React, { useState } from "react";
import styled from "styled-components";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import LoginForm from "../../components/Form/LoginForm";
import DemoLoginForm from "../../components/Form/DemoLoginForm";

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

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  const [showLogin, setShowLogin] = useState(true);

  const DemoButtonStyle = {
    background: "rgb(39,167,68)",
    hover: {
      background: "#22943d",
    },
  };

  return (
    <Container>
      <Left>
        <Logo src={"/logo/BugTrackerWelcome.svg"} alt="logo" />

        <FormContainer>
          {/* Switch Login with Credentials / Login as Demo User */}
          {showLogin ? <LoginForm /> : <DemoLoginForm />}

          <ButtonContainer onClick={() => setShowLogin(!showLogin)}>
            <Divider />
            <ButtonBasic
              text={showLogin ? "DEMO APPLICATION" : "BACK TO LOGIN"}
              buttonStyle={DemoButtonStyle}
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
