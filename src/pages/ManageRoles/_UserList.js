import React from "react";
import styled from "styled-components";
import BlockTypeData from "../Shared/Block_TypeData";

const UserListContainer = styled.div`
  flex: 3;
  margin-top: 35px;
`;

const Styles = {
  EntryFlex: ["3", "5", "3"],
  EntryItem: { padding: "10px 0" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Your Personnel",
  subText: "All the users in your database",
};
const ListCategories = ["User Name", "Email", "Role"];

const UserList = ({ userList }) => {
  return (
    <UserListContainer>
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={userList}
        Links={null}
      />
    </UserListContainer>
  );
};

export default UserList;
