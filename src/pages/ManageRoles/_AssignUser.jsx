import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { Divider } from "../../components/Divider/Divider";
import { Button_MainStyle } from "../../components/Buttons/Buttons";

const AssignUserContainer = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DividerLine = styled(Divider)`
  align-self: left;

  @media ${device.tablet} {
    width: 85%;
  }
`;

const UserSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectionContainer = styled.ul`
  height: 150px;
  padding: 5px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.navbar_Background};
  box-shadow: ${({ theme }) => theme.navbar_Shadow};

  @media ${device.tablet} {
    width: 85%;
  }

  // ----- Scrollbar CSS -----
  // Firefox
  scrollbar-width: auto;
  scrollbar-color: ${({ theme }) => theme.scrollbar_Color};

  // Chrome, Edge, and Safari
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.navbar_Background};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbar_Color};
    border-radius: 6px;
  }
  // ----- / -----
`;

const SelectUser = styled.li`
  margin: 2px 0;
  padding: 1px 0;
  cursor: pointer;
  background-color: ${(props) => props.isSelected && props.theme.active_Link};
  color: ${(props) => props.isSelected && props.theme.button_Text_Color};
`;

const UserAssign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectRole = styled.select`
  background-color: ${({ theme }) => theme.navbar_Background};
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
  color: ${({ theme }) => theme.main_Font_Color};
  padding: 10px 5px;
  border: none;
  font-size: 16px;

  &:focus {
    border: none;
    outline: none;
  }

  @media ${device.tablet} {
    width: 85%;
  }
`;

const OptionRole = styled.option`
  padding: 5px 0;
`;

const SubmitButton = styled(Button_MainStyle)`
  margin-top: 20px;

  @media ${device.tablet} {
    width: 85%;
  }
`;

const AssignUser = ({ userList }) => {
  const [usersSelected, setUsersSelected] = useState({});
  const [roleSelected, setRoleSelected] = useState("none");

  const RoleList = [
    { value: "none", label: "None (Awaiting Assignement)" },
    { value: "admin", label: "Admin" },
    { value: "project_manager", label: "Project Manager" },
    { value: "developer", label: "Developer" },
    { value: "submitter", label: "Submitter" },
  ];

  // Submit Form to assign Users new Roles
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  // Handle selection of one or multiple users
  const handleUserSelect = (userID) => {
    if (userID in usersSelected) {
      setUsersSelected((current) => {
        const copy = { ...current };
        delete copy[userID];
        return copy;
      });
    } else {
      setUsersSelected((current) => ({ ...current, [userID]: userID }));
    }
  };

  return (
    <AssignUserContainer onSubmit={(e) => handleSubmit(e)}>
      {/* ----- Select Users ----- */}
      <UserSelection>
        <div>Select 1 or more Users</div>
        <SelectionContainer>
          {userList.map((user) => (
            <SelectUser
              onClick={() => handleUserSelect(user.email)}
              isSelected={user.email in usersSelected}
              key={user.email}
            >
              {user.user_name}
            </SelectUser>
          ))}
        </SelectionContainer>
      </UserSelection>
      <DividerLine />

      {/* ----- Assign User Role ----- */}
      <UserAssign>
        <div>Select the Role to assign</div>

        <SelectRole
          onChange={(e) => {
            setRoleSelected(e.target.value);
            console.log(roleSelected);
          }}
          defaultValue={""}
        >
          <OptionRole value={""} disabled>
            - Select Role -
          </OptionRole>
          {RoleList.map((role, index) => (
            <OptionRole key={index} value={role.value}>
              {role.label}
            </OptionRole>
          ))}
        </SelectRole>
        <SubmitButton type="submit">Submit</SubmitButton>
      </UserAssign>
    </AssignUserContainer>
  );
};

export default AssignUser;
