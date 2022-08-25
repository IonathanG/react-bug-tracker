import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import SelectUser from "../Select/SelectUser";
import SelectRole from "../Select/SelectRole";
import { Divider_Horizontal as Divider } from "../Dividers/Dividers";
import { Button_MainStyle } from "../Buttons/Buttons";

const Container = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DividerLine = styled(Divider)`
  align-self: left;

  @media ${device.tablet} {
    width: 85%;
  }
`;

const SubmitButton = styled(Button_MainStyle)`
  margin-top: 20px;

  @media ${device.tablet} {
    width: 85%;
  }
`;

const FormRoleAssign = () => {
  //const [usersSelected, setUsersSelected] = useState({});
  //const [optionSelected, setOptionSelected] = useState("none");

  // Submit Form to assign Users new Roles
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      {/* ----- Select Users ----- */}
      <SelectUser />

      {/* ----- Divider ----- */}
      <DividerLine />

      {/* ----- Assign User To Role/Project ----- */}
      <SelectRole />

      {/* ----- SUBMIT ----- */}
      <SubmitButton type="submit">Submit</SubmitButton>
    </Container>
  );
};

export default FormRoleAssign;
