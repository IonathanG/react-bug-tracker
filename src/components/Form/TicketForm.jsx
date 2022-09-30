import React, { useMemo } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import { useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.config";

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

const Label = styled.label`
  font-weight: 700;
  display: inline-block;
  padding-bottom: 10px;
`;

const TicketForm = () => {
  const projects = useSelector((state) => state.projects.Projects);

  const { control, handleSubmit } = useForm();
  // {defaultValues: {projectName: "", projectDescription: "",},}

  const ProjectsList = useMemo(() => {
    return Object.values(projects).map((project) => ({
      project_name: project.project_name,
      project_id: project.project_id,
    }));
  }, [projects]);

  const onSubmit = async (data) => {
    console.log(data);

    // const frankDocRef = doc(db, "users", "frank");

    // await setDoc(frankDocRef, {
    //   name: "Frank",
    //   favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    //   age: 12
    // });

    const projectsRef = doc(db, "projects", `projectID-${data.projectName}`);

    await updateDoc(projectsRef, {
      [`tickets.${"ticketID-" + data.projectName + "_" + data.ticketTitle}`]:
        {},
    });

    //   const projectsRef = doc(db, "projects", `projectID-${data.projectName}`);
    //   const docSnap = await getDoc(projectsRef);

    //   setDoc(doc(db, "projects", `projectID-${data.projectName}`), {
    //     project_id: `projectID-${data.projectName}`,
    //     project_name: data.projectName,
    //     description: data.projectDescription,
    //     start_date: moment(data.startDate).format("DD-MM-YYYY"),
    //     end_date: moment(data.endDate).format("DD-MM-YYYY"),
    //     priority: data.priority,
    //     progress: 0,
    //     status: "Open",
    //     attachment: {},
    //     tickets: {},
    //   });
    // }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Ticket Title Input */}
      <InputContainer>
        <Label htmlFor="ticketTitle">Title</Label>
        <Controller
          name="ticketTitle"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              size="small"
              value={value ? value : ""}
              onChange={onChange}
              ref={ref}
              error={Boolean(fieldState.error)}
              helperText={fieldState?.error?.message}
            ></TextField>
          )}
        />
      </InputContainer>

      {/* Ticket Description Input */}
      <InputContainer>
        <Label htmlFor="ticketDescription">Description</Label>
        <Controller
          name="ticketDescription"
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

      {/* Project Select */}
      <InputContainer>
        <Label htmlFor="project">Project</Label>
        <Controller
          name="projet"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              select
              size="small"
              defaultValue={""}
              value={value ? value : ""}
              onChange={onChange}
              ref={ref}
              error={Boolean(fieldState.error)}
              helperText={fieldState?.error?.message}
            >
              {ProjectsList.map((project) => (
                <MenuItem key={project.project_id} value={project.project_id}>
                  {project.project_name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </InputContainer>

      {/* Type Select */}
      <InputContainer>
        <Label htmlFor="type">Type</Label>
        <Controller
          name="type"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              select
              size="small"
              defaultValue={""}
              value={value ? value : ""}
              onChange={onChange}
              ref={ref}
              error={Boolean(fieldState.error)}
              helperText={fieldState?.error?.message}
            >
              <MenuItem value="enhancement">Enhancement</MenuItem>
              <MenuItem value="changeRequest">Change Request</MenuItem>
              <MenuItem value="defect">Defect</MenuItem>
              <MenuItem value="workTask">Work Task</MenuItem>
              <MenuItem value="newDevleopment">New Development</MenuItem>
              <MenuItem value="generalTask">General Task</MenuItem>
            </TextField>
          )}
        />
      </InputContainer>

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
              defaultValue={""}
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

      <ButtonBasic text={"Create"} />
    </Form>
  );
};

export default TicketForm;
