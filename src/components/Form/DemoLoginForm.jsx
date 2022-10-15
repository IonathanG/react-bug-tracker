import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ROLES } from "../../data/Roles";
import useAuth from "../../hooks/useAuth";

const Form = styled.div``;

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

const DemoButton = styled.button`
  font-family: "Ubuntu", "sans-serif";
  letter-spacing: 0.1px;
  transition: 0.25s ease;

  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.background_ButtonBasic};
  border-radius: 4px;

  color: ${({ theme }) => theme.background_ButtonBasic};
  font-size: 14px;

  height: 34px;
  margin: 0px;

  &:hover {
    background-color: ${({ theme }) => theme.background_ButtonBasic};
    color: white;
  }
`;

const DemoLoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const { handleSubmit } = useForm({});
  const onSubmit = (selectedRole) => {
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
        user: DEMO_USERS[`Demo${selectedRole}`].user,
        pwd: DEMO_USERS[`Demo${selectedRole}`].pwd,
        roles: [ROLES[`${selectedRole}`], ROLES.User],
      });
      navigate(from, { replace: true });
    } catch (err) {
      console.log("No Server Response");
    }
  };

  return (
    // <Form onSubmit={handleSubmit(onSubmit)}>
    <Form>
      <Title>Select Demo Role to Login as:</Title>

      <DemoButtonContainer>
        <DemoButton onClick={() => onSubmit("Admin")} type="submit">
          ADMIN
        </DemoButton>
        <DemoButton onClick={() => onSubmit("Manager")} type="submit">
          PROJECT MANAGER
        </DemoButton>
        <DemoButton onClick={() => onSubmit("Developer")} type="submit">
          DEVELOPER
        </DemoButton>
        <DemoButton onClick={() => onSubmit("Submitter")} type="submit">
          SUBMITTER
        </DemoButton>
      </DemoButtonContainer>
    </Form>
  );
};

export default DemoLoginForm;
