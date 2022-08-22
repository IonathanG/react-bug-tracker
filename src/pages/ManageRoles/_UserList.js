import React from "react";
import styled from "styled-components";
import BlockTypeData from "../Shared/Block_TypeData";

const UserListContainer = styled.div`
  flex: 3;
  min-height: 100%;
  margin-top: 32px;
`;

const Styles = {
  EntryFlexList: [
    // li:nth-child(1),
    // li:nth-child(3) {
    //   flex: 3;
    // }
    // li:nth-child(2) {
    //   flex: 5;
    // }
  ],
  EntryItem: { padding: "10px 0" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Your Projects",
  subText: "All the projects in your database",
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
      />
    </UserListContainer>
  );
};

export default UserList;
