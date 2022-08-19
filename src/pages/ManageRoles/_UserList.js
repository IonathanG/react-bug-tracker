import React from "react";
import styled from "styled-components";
//import { device } from "../../shared/breakpoints";

const UserListContainer = styled.div`
  background-color: ${({ theme }) => theme.navbar_Background};
  //background-color: ${({ theme }) => theme.block_Background};
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-height: 100%;
  margin-top: 32px;
  padding: 12px;
  border-radius: 6px;
`;

const HeaderBlock = styled.header`
  //background-color: ${({ theme }) => theme.button_Color};
  background-color: rgba(30, 30, 30, 0.3);
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
  color: white;
  letter-spacing: 0.3px;
  padding: 10px;
  margin-top: -42px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  span:nth-child(1) {
    font-size: 15px;
  }
  span:nth-child(2) {
    font-size: 13px;
    margin-left: 10px;
  }
`;

const ListOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 100%;

  div:nth-child(1) {
    flex: 3;
  }
  div:nth-child(2) {
    flex: 5;
  }
  div:nth-child(3) {
    flex: 2;
  }
`;

const CategoryTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px grey solid;
  padding-bottom: 4px;
`;

const CategoryContainer = styled.ul`
  font-size: 13px;
`;

const CategoryItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid rgba(25, 25, 25, 0.2);
`;

const UserList = ({ userList }) => {
  return (
    <UserListContainer>
      <HeaderBlock>
        <span>Your Personnel</span>
        <span>All the users in your database</span>
      </HeaderBlock>

      <ListOption>
        <div>Show X entries</div>
        <div>Search</div>
      </ListOption>

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
