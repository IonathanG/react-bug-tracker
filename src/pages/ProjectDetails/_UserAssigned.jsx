import React from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";

const ProjectsContainer = styled.div`
  width: 100%;
  margin-top: 0px;
`;

const Styles = {
  EntryFlex: ["2", "4", "2"],
  EntryItem: { padding: "8px 0", fontSize: "14px" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Assigned Personel",
  subText: "Current Users on this Project",
};
const ListCategories = ["User Name", "Email", "Role"];

const UserAssigned = ({ userList }) => {
  return (
    <ProjectsContainer>
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={userList}
        Links={null}
      />
    </ProjectsContainer>
  );
};

export default UserAssigned;
