import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import InputBasic from "../../components/Input/InputBasic";

const Container = styled.div``;

const Header = styled.header`
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  margin-top: 30px;
  width: 50%;
  min-height: 100vh;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  font-weight: 400;
  font-size: 14px;
`;

const Form = styled.form``;

const InputContainer = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  font-weight: 700;
  display: inline-block;
  padding-bottom: 10px;
`;

const InputStyle = {
  padding: "8px 10px",
};

const AddProject = () => {
  const { register, handleSubmit, errors } = useForm();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      <Header>Add Project</Header>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="projectName">Project Name</Label>
            <InputBasic
              id="projectName"
              style={InputStyle}
              value={name}
              setValue={setName}
              ref={register}
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="projectDescription">Project Name</Label>
            <InputBasic
              id="projectDescription"
              style={InputStyle}
              value={description}
              setValue={setDescription}
              ref={register}
            />
          </InputContainer>

          <InputContainer>
            <ButtonBasic text={"Create"} />
          </InputContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddProject;
