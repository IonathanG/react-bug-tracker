import React from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";

const ProjectsContainer = styled.div`
  margin-top: 50px;
`;

const Styles = {
  EntryFlex: ["2", "3", "2"],
  EntryItem: { padding: "4px 0", fontSize: "14px" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Your Projects",
  subText: "All the projects in your database",
};
const ListCategories = ["Project Name", "Description", ""];

const Links = [
  { title: "Manage Users", route: "project" },
  { title: "Details", route: "project" },
];

const ProjectsList = ({ projectsList }) => {
  return (
    <ProjectsContainer>
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={projectsList}
        Links={Links}
      />
    </ProjectsContainer>
  );
};

export default ProjectsList;
