import React from "react";
import styled from "styled-components";
//import { device } from "../../shared/breakpoints";

const UserListContainer = styled.div`
  flex: 3;
  background-color: cornflowerblue;
`;

const UserList = () => {
  return <UserListContainer>User List</UserListContainer>;
};

export default UserList;
