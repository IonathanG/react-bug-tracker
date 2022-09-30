import React, { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ButtonBasic from "../Buttons/Button_Basic";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.config";
import moment from "moment/moment";

const Form = styled.form`
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

const AddProjectForm = () => {
  const [errorName, setErrorName] = useState(false);

  const { control, handleSubmit } = useForm();
  // {defaultValues: {projectName: "", projectDescription: "",},}

  const onSubmit = async (data) => {
    console.log(data);

    // Checking if Project Name is already taken in the database before creating it
    const projectsRef = doc(db, "projects", `projectID-${data.projectName}`);
    const docSnap = await getDoc(projectsRef);

    if (docSnap.exists()) {
      console.log("This name is taken");
      setErrorName(true);
    } else {
      console.log("No such document!");

      setDoc(doc(db, "projects", `projectID-${data.projectName}`), {
        project_id: `projectID-${data.projectName}`,
        project_name: data.projectName,
        description: data.projectDescription,
        start_date: moment(data.startDate).format("DD-MM-YYYY"),
        end_date: moment(data.endDate).format("DD-MM-YYYY"),
        priority: data.priority,
        progress: 0,
        status: "Open",
        attachment: {},
        tickets: {},
      })
        .then(() => console.log("Project added"))
        .catch((error) => console.log(error));

      setDoc(doc(db, "projectUsers", `projectID-${data.projectName}`), {
        project_id: `projectID-${data.projectName}`,
        project_manager_id: data.projectManager,
        project_team_id: [],
      })
        .then(() => console.log("ProjectUsers added"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
              <MenuItem value="user_02">Tromso Two</MenuItem>
            </TextField>
          )}
        />
      </InputContainer>

      <ButtonBasic text={"Create"} />
    </Form>
  );
};

export default AddProjectForm;
