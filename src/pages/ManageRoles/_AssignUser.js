import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";

const AssignUserContainer = styled.form`
  //background-color: #b08d5e;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

const Divider = styled.div`
  background-color: ${({ theme }) => theme.divider_Color};
  height: 1px;
  align-self: left;

  @media ${device.phone} {
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

  @media ${device.phone} {
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

  @media ${device.phone} {
    width: 85%;
  }
`;

const OptionRole = styled.option`
  // background-color: blue;
  padding: 5px 0;
`;

const SubmitButton = styled.button`
  //max-width: 550px;
  text-transform: uppercase;
  letter-spacing: 0.4px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.button_Color};
  color: ${({ theme }) => theme.button_Text_Color};

  border: none;
  border-radius: 4px;
  margin-top: 20px;
  padding: 10px 0;

  @media ${device.phone} {
    width: 85%;
    //max-width: none;
  }
`;

const AssignUser = () => {
  const [userSelected, setUserSelected] = useState();
  const [roleSelected, setRoleSelected] = useState("none");

  const UserList = [
    { name: "Tromso One", id: 0 },
    { name: "Tromso Two", id: 1 },
    { name: "Tromso Three", id: 2 },
    { name: "Tromso Four", id: 3 },
    { name: "Tromso Five", id: 4 },
    { name: "Tromso Six", id: 5 },
    { name: "Tromso Seven", id: 6 },
    { name: "Tromso Height", id: 7 },
    { name: "Tromso Nine", id: 8 },
    { name: "Tromso Ten", id: 9 },
    { name: "Tromso Eleven", id: 10 },
    { name: "Tromso Twelve", id: 11 },
    { name: "Tromso Thirteen", id: 12 },
  ];

  const RoleList = [
    { value: "none", label: "Select Role/None" },
    { value: "admin", label: "Admin" },
    { value: "project_manager", label: "Project Manager" },
    { value: "developer", label: "Developer" },
    { value: "submitter", label: "Submitter" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <AssignUserContainer onSubmit={(e) => handleSubmit(e)}>
      <UserSelection>
        <div>Select 1 or more Users</div>
        <SelectionContainer>
          {UserList.map((user) => (
            <SelectUser
              onClick={() => setUserSelected(user.id)}
              isSelected={userSelected === user.id}
              key={user.id}
            >
              {user.name}
            </SelectUser>
          ))}
        </SelectionContainer>
      </UserSelection>
      <Divider />

      <UserAssign>
        <div>Select the Role to assign</div>

        <SelectRole
          onChange={(e) => setRoleSelected(e.target.value)}
          value={roleSelected}
        >
          {RoleList.map((role) => (
            <OptionRole value={role.value}>{role.label}</OptionRole>
          ))}
        </SelectRole>
        <SubmitButton type="submit">Submit</SubmitButton>
      </UserAssign>
    </AssignUserContainer>
  );
};

export default AssignUser;
