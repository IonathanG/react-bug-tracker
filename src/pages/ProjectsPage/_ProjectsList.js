import React from "react";
import styled from "styled-components";
import BlockTypeData from "../Shared/Block_TypeData";

const ProjectsContainer = styled.div`
  margin-top: 50px;
`;

const Styles = {
  EntryFlex: ["2", "5", "1"],
  EntryItem: { padding: "10px 0", fontSize: "14px" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Your Projects",
  subText: "All the projects in your database",
};
const ListCategories = ["Project Name", "Description", "|"];

const Links = {};

const ProjectsList = ({ projectsList }) => {
  return (
    <ProjectsContainer>
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={projectsList}
        Links={null}
      />

      {/* <EntryItem>
        <div className="links">
          <Link to={`/project/${item.id}`}>
            Manage Users
            <KeyboardArrowRightIcon />
          </Link>
          <Link to={`/project/${item.id}`}>
            Details
            <KeyboardArrowRightIcon />
          </Link>
        </div>
      </EntryItem> */}
    </ProjectsContainer>
  );
};

export default ProjectsList;
