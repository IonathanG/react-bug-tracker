import React from "react";
import styled from "styled-components";
import {
  Block,
  BlockHeader,
  BlockOptions,
  BlockListContainer,
  BlockCategoryTitle,
  BlockCategoryContainer,
  BlockCategoryItem,
} from "../Shared/Block";
//import { device } from "../../shared/breakpoints";

const UserListContainer = styled(Block)`
  flex: 3;
  min-height: 100%;
  margin-top: 32px;
`;

const UserListHeader = styled(BlockHeader)``;

const UserListOptions = styled(BlockOptions)``;

const ListContainer = styled(BlockListContainer)`
  div:nth-child(1),
  div:nth-child(3) {
    flex: 3;
  }
  div:nth-child(2) {
    flex: 5;
  }
`;

const CategoryTitle = styled(BlockCategoryTitle)``;

const CategoryContainer = styled(BlockCategoryContainer)``;

const CategoryItem = styled(BlockCategoryItem)``;

const UserList = ({ userList }) => {
  return (
    <UserListContainer>
      <UserListHeader>
        <span>Your Personnel</span>
        <span>All the users in your database</span>
      </UserListHeader>

      <UserListOptions>
        <div>Show X entries</div>
        <div>Search</div>
      </UserListOptions>

      <ListContainer>
        <div>
          <CategoryTitle>User Name</CategoryTitle>
          <CategoryContainer>
            {userList.map((item) => (
              <CategoryItem key={item.id}>{item.user_name}</CategoryItem>
            ))}
          </CategoryContainer>
        </div>
        <div>
          <CategoryTitle>Email</CategoryTitle>
          <CategoryContainer>
            {userList.map((item) => (
              <CategoryItem key={item.id}>{item.email}</CategoryItem>
            ))}
          </CategoryContainer>
        </div>
        <div>
          <CategoryTitle>Role</CategoryTitle>
          <CategoryContainer>
            {userList.map((item) => (
              <CategoryItem key={item.id}>{item.role}</CategoryItem>
            ))}
          </CategoryContainer>
        </div>
      </ListContainer>
    </UserListContainer>
  );
};

export default UserList;
