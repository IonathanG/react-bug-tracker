import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import ButtonActions from "../../components/Buttons/Button_Actions";
import useAuth from "../../hooks/useAuth";

const Form = styled.form``;

const Title = styled.div`
  font-weight: 300;
  font-size: 18px;
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

const DemoLoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { handleSubmit } = useForm({});

  const ButtonStyle = {
    theme: "rgb(0,123,254)",
    hover: {
      color: "white",
    },
  };

  const onSubmit = () => {
    const ROLES = {
      Admin: 100,
      Manager: 200,
      Developer: 300,
      Submitter: 400,
      User: 500,
    };

    const DEMO_USERS = {
      DemoAdmin: { user: "DemoAdmin", pwd: "AdminPwd" },
      DemoManager: { user: "DemoManager", pwd: "ManagerPwd" },
      DemoDeveloper: { user: "DemoDeveloper", pwd: "DeveloperPwd" },
      DemoSubmitter: { user: "DemoSubmitter", pwd: "SubmitterPwd" },
    };

    try {
      // const roles = response?.data?.roles;
      // setAuth({ user, pwd, roles, accessToken });
      setAuth({
        user: DEMO_USERS.DemoAdmin.user,
        pwd: DEMO_USERS.DemoAdmin.pwd,
        roles: [ROLES.Admin, ROLES.User],
      });
      navigate(from, { replace: true });
    } catch (err) {
      console.log("No Server Response");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Select Demo Role to Login as:</Title>
      <DemoButtonContainer>
        <ButtonActions buttonStyle={ButtonStyle} text={"ADMIN"} />
        <ButtonActions buttonStyle={ButtonStyle} text={"PROJECT MANAGER"} />
        <ButtonActions buttonStyle={ButtonStyle} text={"DEVELOPER"} />
        <ButtonActions buttonStyle={ButtonStyle} text={"SUBMITTER"} />
      </DemoButtonContainer>
    </Form>
  );
};

export default DemoLoginForm;
