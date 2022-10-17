import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ButtonBasic from "../../../components/Buttons/Button_Basic";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase.config";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import useAuth from "../../../hooks/useAuth";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const FormWrap = styled.div`
  max-width: 50%;
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

  p {
    letter-spacing: 0.2px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.card_subTitle};
  }
`;

const AssignDevSelectCard = ({ projectID, ticketID }) => {
  const { auth } = useAuth();

  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  // Redirect once confirmed that new Manager is assigned
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();

  // Keep up to date List of Developers already assigned to the project
  // => Select dev to assign the ticket to
  const DeveloperList = useMemo(() => {
    let list = [];
    if (projectUsers[projectID]) {
      projectUsers[projectID].project_team_id.map((dev) =>
        list.push({
          developer_id: dev,
          developer_name: users[dev]?.user_name,
        })
      );
    }
    return list;
  }, [projectUsers, projectID, users]);

  const onSubmit = async (data) => {
    const projectRef = doc(db, "projects", projectID);
    const ticket = projects[projectID]?.tickets[ticketID];

    await updateDoc(projectRef, {
      [`tickets.${ticketID}.assigned_to`]: data.assignedTo,
    })
      // Update History => "Developer Assigned to the ticket"
      .then(() => {
        updateDoc(projectRef, {
          [`tickets.${ticketID}.history`]: [
            ...ticket.history,
            {
              date: moment().format("DD/MM/yyyy"),
              title: `${
                users[data.assignedTo]?.user_name
              } was assigned to ticket: ${ticket.ticket_name}`,
              author: auth?.id,
              detail: "The ticket was assigned to a developer.",
            },
          ],
        });
      })
      .then(() => navigate(`/Tickets/TicketDetails/${projectID}/${ticketID}`))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Developer Select */}
        <FormWrap>
          <InputContainer>
            <Label htmlFor="assignedTo">
              Select a Developer{" "}
              <p>
                <br />
                Only developers assigned to this Project will be shown
              </p>
            </Label>
            <Controller
              name="assignedTo"
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
                  {DeveloperList.map((dev, index) => (
                    <MenuItem key={index} value={dev.developer_id}>
                      {dev.developer_name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </InputContainer>

          <ButtonBasic text={"Assign Developer"} />
        </FormWrap>
      </Form>
    </>
  );
};

export default AssignDevSelectCard;
