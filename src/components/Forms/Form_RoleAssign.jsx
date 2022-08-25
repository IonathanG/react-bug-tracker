import React from "react";
import styled from "styled-components";
import { Divider_Horizontal as Divider } from "../Dividers/Dividers";
import { default as SubmitButton } from "../Buttons/Button_MainStyle";
import SelectUser from "../Select/SelectUser";
import SelectRole from "../Select/SelectRole";

const Container = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ButtonStyle = {
  margin: "0px",
  padding: "10px",
};

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
      <Divider />

      {/* ----- Assign User To Role/Project ----- */}
      <SelectRole />

      {/* ----- SUBMIT ----- */}
      <SubmitButton
        buttonStyle={ButtonStyle}
        text={"Submit"}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default FormRoleAssign;
