import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ButtonBasic from "../../../components/Buttons/Button_Basic";
import useAssignTicket from "../../../hooks/useAssignTicket";

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
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const { control, handleSubmit } = useForm();

  const [AssignTicket] = useAssignTicket();

  // Keep up to date List of Developers already assigned to the project
  // => Select dev to assign the ticket to
  const DeveloperList = useMemo(() => {
    let list = [];
    if (projectUsers[projectID]) {
      projectUsers[projectID].project_team_id
        .filter((user) => users[user].user_role === "Developer")
        .map((dev) =>
          list.push({
            developer_id: dev,
            developer_name: users[dev]?.user_name,
          })
        );
    }
    return list;
  }, [projectUsers, projectID, users]);

  const onSubmit = (data) => {
    AssignTicket(data, projectID, ticketID);
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
