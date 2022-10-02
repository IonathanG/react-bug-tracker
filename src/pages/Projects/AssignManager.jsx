import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import { useNavigate, useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.config";

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
  // Retrieving State
  const users = useSelector((state) => state.users.Users);

  // Retrieving project ID to allocate the Manager to the correct Project
  const { id } = useParams();

  // Redirect once confirmed that new Manager is assigned
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();

  // Keep up to date List of Managers to assign a project to
  const ManagersList = useMemo(() => {
    return Object.values(users)
      .filter((user) => user.user_role === "Project Manager")
      .map((manager) => ({
        manager_id: manager.user_id,
        manager_name: manager.user_name,
      }));
  }, [users]);

  const onSubmit = async (data) => {
    console.log(data);
    const projectUsersRef = doc(db, "projectUsers", id);

    await updateDoc(projectUsersRef, {
      project_manager_id: data.projectManager,
    })
      .then(() => console.log("Manager Updated!"))
      .then(() => navigate(`../AssignMembers/${id}`))
      .catch((error) => console.log(error));
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
                {ManagersList.map((manager) => (
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
