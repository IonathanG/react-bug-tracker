import React from "react";
import styled from "styled-components";
import { Divider_Horizontal as Divider } from "../Dividers/Dividers";
import ButtonBasic from "../Buttons/Button_Basic";
import SelectUser from "../Select/SelectUser";
import SelectProject from "../Select/SelectProject";

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

const FormProjectAssign = () => {
  //const [usersSelected, setUsersSelected] = useState({});
  //const [optionSelected, setOptionSelected] = useState("none");

  // Submit Form to assign Users new Roles
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(e);
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
      {/* ----- Select Users ----- */}
      <SelectUser />

      {/* ----- Divider ----- */}
      <Divider />

      {/* ----- Assign User To Role/Project ----- */}
      <SelectProject />

      {/* ----- SUBMIT ----- */}
      <ButtonBasic
        buttonStyle={ButtonStyle}
        text={"Submit"}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default FormProjectAssign;
