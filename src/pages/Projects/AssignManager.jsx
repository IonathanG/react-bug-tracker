import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import { useParams } from "react-router-dom";
import useManagerList from "../../hooks/useManagerList";
import useAssignManager from "../../hooks/useAssignManager";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 700;
  display: inline-block;
  padding-bottom: 20px;
`;

const AssignManager = () => {
  // Custom Hook to Update the Manager to the Project
  const [AssignManager] = useAssignManager();

  // Retrieving project ID to allocate the Manager to the correct Project
  const { projectID } = useParams();
  console.log(projectID);

  const { control, handleSubmit } = useForm();

  // Custom Hook to keep up to date the List of Managers
  const ManagerList = useManagerList();

  // Calling hook to update Manager
  const onSubmit = (data) => {
    AssignManager(data, projectID);
  };

  return (
    <>
      <Navigation headerText={"Assign Project Manager"} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Project Manager Select */}
        <InputContainer>
          <Label htmlFor="projectManager">Select a Project Manager</Label>
          <Controller
            name="projectManager"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value, ref }, fieldState }) => (
              <TextField
                select
                size="small"
                value={value ? value : ""}
                onChange={onChange}
                ref={ref}
                error={Boolean(fieldState.error)}
                helperText={fieldState?.error?.message}
              >
                {ManagerList.map((manager) => (
                  <MenuItem key={manager.manager_id} value={manager.manager_id}>
                    {manager.manager_name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </InputContainer>

        <ButtonBasic text={"Assign Manager"} />
      </Form>
    </>
  );
};

export default AssignManager;
