import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { UserList as userList } from "../../data/Data_UserList";

const Container = styled.div`
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

const Selection = styled.li`
  margin: 2px 0;
  padding: 1px 0;
  cursor: pointer;
  background-color: ${(props) => props.isSelected && props.theme.active_Link};
  color: ${(props) => props.isSelected && props.theme.button_Text_Color};
`;

const SelectUser = () => {
  const [usersSelected, setUsersSelected] = useState({});

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
    <Container>
      <div>Select 1 or more Users</div>
      <SelectionContainer>
        {userList.map((user) => (
          <Selection
            onClick={() => handleUserSelect(user.email)}
            isSelected={user.email in usersSelected}
            key={user.email}
          >
            {user.user_name}
          </Selection>
        ))}
      </SelectionContainer>
    </Container>
  );
};

export default SelectUser;
