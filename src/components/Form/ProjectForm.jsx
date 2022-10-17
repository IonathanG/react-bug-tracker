import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ButtonBasic from "../Buttons/Button_Basic";
import { useSelector } from "react-redux";
import FormatDate from "../../utils/FormatDate";
import useManagerList from "../../hooks/useManagerList";
import useSubmitProjectForm from "../../hooks/useSubmitProjectForm";

const Form = styled.form`
  margin-top: 30px;
  width: 50%;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  font-weight: 400;
  font-size: 14px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-weight: 700;
  display: inline-block;
  padding-bottom: 10px;
`;

const ProjectForm = ({ projectID = null, editMode = false }) => {
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);
  const projects = useSelector((state) => state.projects.Projects);
  const users = useSelector((state) => state.users.Users);

  const { control, reset, handleSubmit } = useForm({});

  // Custom Hook to handle form validation
  const [onSubmit, errorName] = useSubmitProjectForm();

  // Default Values added to TextFields in case the Form is in Edit mode
  useEffect(() => {
    if (projects[projectID]) {
      reset({
        projectName: projects[projectID].project_name,
        projectDescription: projects[projectID].description,
        startDate: FormatDate(projects[projectID].start_date),
        endDate: FormatDate(projects[projectID].end_date),
        priority: projects[projectID].priority,
        projectManager: projectUsers[projectID]?.project_manager_id,
      });
    }
  }, [projects, projectUsers, users, projectID, reset]);

  // Custom Hook to keep up to date the List of Managers
  const ManagerList = useManagerList();

  // Calling in the custom hook to submit the project form
  const onFormSubmit = (data) => {
    onSubmit(data, editMode);
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      {/* Project Name Input */}
      <InputContainer>
        <Label htmlFor="projectName">Project Name</Label>
        <Controller
          name="projectName"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              size="small"
              value={value ? value : ""}
              onChange={onChange}
              ref={ref}
              error={Boolean(fieldState.error) || errorName === true}
              helperText={
                errorName === true
                  ? "This name is taken"
                  : fieldState?.error?.message
              }
            ></TextField>
          )}
        />
      </InputContainer>

      {/* Project Description Input */}
      <InputContainer>
        <Label htmlFor="projectDescription">Project Description</Label>
        <Controller
          name="projectDescription"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              multiline={true}
              rows={4}
              value={value ? value : ""}
              onChange={onChange}
              ref={ref}
            ></TextField>
          )}
        />
      </InputContainer>

      {/* Start Date Picker */}
      <DateContainer>
        <InputContainer>
          <Label htmlFor="startDate">Start Date</Label>
          <Controller
            name="startDate"
            control={control}
            defaultValue={null}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value, ref }, fieldState }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  inputFormat="dd-MM-yyyy"
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      {...params}
                      error={Boolean(fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )}
                />
              </LocalizationProvider>
            )}
          />
        </InputContainer>

        {/* End Date Picker */}
        <InputContainer>
          <Label htmlFor="endDate">End Date</Label>
          <Controller
            name="endDate"
            control={control}
            defaultValue={null}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value, ref }, fieldState }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  inputFormat="dd-MM-yyyy"
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      {...params}
                      error={Boolean(fieldState.error)}
                      helperText={fieldState?.error?.message}
                    />
                  )}
                />
              </LocalizationProvider>
            )}
          />
        </InputContainer>
      </DateContainer>

      {/* Priority Select */}
      <InputContainer>
        <Label htmlFor="priority">Choose a priority</Label>
        <Controller
          name="priority"
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
              <MenuItem value="Urgent">Urgent</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </TextField>
          )}
        />
      </InputContainer>

      {/* Project Manager Select */}
      <InputContainer>
        <Label htmlFor="projectManager">Project Manager</Label>
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

      <ButtonBasic text={editMode ? "Edit" : "Create"} />
    </Form>
  );
};

export default ProjectForm;
