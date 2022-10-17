import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import { useSelector } from "react-redux";
import useSubmitTicketForm from "../../hooks/useSubmitTicketForm";
import useProjectList from "../../hooks/useProjectList";

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

const Label = styled.label`
  font-weight: 700;
  display: inline-block;
  padding-bottom: 10px;
`;

const TicketForm = ({
  projectID = null,
  ticketID = null,
  editMode = false,
}) => {
  const projects = useSelector((state) => state.projects.Projects);

  const { control, reset, handleSubmit } = useForm();

  // Custom Hook to handle form validation
  const [onSubmit] = useSubmitTicketForm();

  // Default Values in case the Form is in Edit mode
  useEffect(() => {
    if (projects[projectID]?.tickets[ticketID]) {
      reset({
        ticketTitle: projects[projectID].tickets[ticketID].ticket_name,
        ticketDescription: projects[projectID].tickets[ticketID].description,
        priority: projects[projectID].tickets[ticketID].priority,
        type: projects[projectID].tickets[ticketID].type,
        status: projects[projectID].tickets[ticketID].status,
      });
    }
  }, [projects, projectID, ticketID, reset]);

  // Custom Hook to keep up to date the List of Projects
  const ProjectList = useProjectList();

  const onFormSubmit = (data) => {
    onSubmit(data, editMode, projectID, ticketID);
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
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

      {/* Project Select => not available in Edit Mode*/}
      {!editMode && (
        <InputContainer>
          <Label htmlFor="projectID">Project</Label>
          <Controller
            name="projectID"
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
                {ProjectList.map((project, index) => (
                  <MenuItem key={index} value={project.project_id}>
                    {project.project_name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </InputContainer>
      )}

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
              <MenuItem value="Enhancement">Enhancement</MenuItem>
              <MenuItem value="Change Request">Change Request</MenuItem>
              <MenuItem value="Defect">Defect</MenuItem>
              <MenuItem value="Work Task">Work Task</MenuItem>
              <MenuItem value="New Development">New Development</MenuItem>
              <MenuItem value="General Task">General Task</MenuItem>
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

      {/* Priority Select => Only available on Edit Mode*/}
      {editMode && (
        <InputContainer>
          <Label htmlFor="status">Ticket Status</Label>
          <Controller
            name="status"
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
                <MenuItem value="Resolved">Resolved</MenuItem>
                <MenuItem value="Testing">Testing</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
                <MenuItem value="New">New</MenuItem>
              </TextField>
            )}
          />
        </InputContainer>
      )}

      <ButtonBasic text={editMode ? "Edit" : "Create"} />
    </Form>
  );
};

export default TicketForm;
