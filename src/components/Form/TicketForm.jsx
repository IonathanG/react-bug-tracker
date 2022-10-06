import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import { useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
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
  const userID = "user_02";
  const projects = useSelector((state) => state.projects.Projects);

  // const [errorName, setErrorName] = useState(false);
  const { control, reset, handleSubmit } = useForm();

  // Redirect once confirmed the form is submitted
  // const navigate = useNavigate();

  console.log("modeEdit: ", editMode);

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

  // Keep up to date List of Projects to assign a ticket to
  const ProjectsList = useMemo(() => {
    return Object.values(projects).map((project) => ({
      project_name: project.project_name,
      project_id: project.project_id,
    }));
  }, [projects]);

  const onSubmit = async (data) => {
    console.log("data: ", data);

    const documentRef = data.projectID ? data.projectID : projectID;
    console.log(documentRef);

    // DB Collection References to set up and update
    const projectsRef = doc(db, "projects", documentRef);

    // Editing Mode Updates Firestore
    if (editMode) {
      await updateDoc(projectsRef, {
        [`tickets.${ticketID}`]: {
          project_id: projectID,
          ticket_id: ticketID,
          ticket_name: data.ticketTitle,
          description: data.ticketDescription,
          type: data.type,
          priority: data.priority,
          status: data.status,
          assigned_by: projects[projectID].tickets[ticketID].assigned_by,
          assigned_to: projects[projectID].tickets[ticketID].assigned_to,
          created_date: projects[projectID].tickets[ticketID].created_date,
          history: projects[projectID].tickets[ticketID].history,
          comments: projects[projectID].tickets[ticketID].comments,
          attachments: projects[projectID].tickets[ticketID].attachments,
        },
      })
        .then(() => console.log("Ticket Updated!"))
        .catch((error) => console.log(error));
    }

    // If not editing => Creates new ticket
    else if (!editMode) {
      await updateDoc(projectsRef, {
        [`tickets.ticketID-${data.ticketTitle}`]: {
          project_id: data.projectID,
          ticket_id: `ticketID-${data.ticketTitle}`,
          ticket_name: data.ticketTitle,
          assigned_by: userID,
          assigned_to: "",
          description: data.ticketDescription,
          type: data.type,
          status: "New",
          priority: data.priority,
          created_date: moment().format("DD/MM/yyyy"),
          history: [],
          comments: [],
          attachments: [],
        },
      })
        .then(() => console.log("Ticket added"))
        .catch((error) => console.log(error));
    }
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
                {ProjectsList.map((project) => (
                  <MenuItem key={project.project_id} value={project.project_id}>
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
              <MenuItem value="New Devleopment">New Development</MenuItem>
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

      <ButtonBasic text={"Create"} />
    </Form>
  );
};

export default TicketForm;
