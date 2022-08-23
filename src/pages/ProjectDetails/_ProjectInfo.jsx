import React from "react";
import styled from "styled-components";
import BlockTypeInfo from "../../components/Blocks/Block_TypeInfo";

const ProjectContainer = styled.div`
  margin-top: 50px;
`;

const Styles = {
  EntryFlex: ["1", "1", "1"],
  EntryItem: { padding: "10px 20px 5px 20px", fontSize: "14px" },
};

const HeaderText = {
  mainText: "Details for Project #",
};

const Links = [
  { title: "Back to list", route: "projects" },
  { title: "Edit", route: "projects" },
];

const ListItem = [
  [
    { name: "Project Name", description: "Project 1" },
    { name: "Project Description", description: "This is project 1" },
  ],
];

const ProjectInfo = () => {
  return (
    <ProjectContainer>
      <BlockTypeInfo
        Styles={Styles}
        HeaderText={HeaderText}
        Links={Links}
        ListItem={ListItem}
      />
    </ProjectContainer>
  );
};

export default ProjectInfo;
