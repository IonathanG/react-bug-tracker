import React from "react";
import styled from "styled-components";
import {
  Block,
  Block_Header,
  Block_Options,
  Block_EntriesContainer,
  Block_EntryFlexList,
  Block_EntryTitle,
  Block_EntryItem,
} from "../Shared/Block";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProjectsContainer = styled(Block)`
  width: 100%;
  margin-top: 50px;
`;

const Header = styled(Block_Header)``;
const Options = styled(Block_Options)``;

const EntriesContainer = styled(Block_EntriesContainer)``;
const EntryFlexList = styled(Block_EntryFlexList)`
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 5;
  }
  li:nth-child(3) {
    flex: 1;
  }
`;
const EntryTitle = styled(Block_EntryTitle)``;
const EntryItem = styled(Block_EntryItem)`
  padding: 4px 0;
  font-size: 14px;
`;

const ProjectsList = ({ projectsList }) => {
  return (
    <ProjectsContainer>
      {/* ----- Header ----- */}
      <Header>
        <span>Your Projects</span>
        <span>All the projects in your database</span>
      </Header>

      {/* ----- Options ----- */}
      <Options>
        <div>Show X entries</div>
        <div>Search</div>
      </Options>

      <EntriesContainer>
        {/* ----- Titles ----- */}
        <EntryFlexList>
          <EntryTitle>Project Name</EntryTitle>
          <EntryTitle>Description</EntryTitle>
          <EntryTitle>|</EntryTitle>
        </EntryFlexList>

        {/* ----- Data ----- */}
        {projectsList.map((item) => (
          <EntryFlexList key={item.id}>
            <EntryItem>
              <span>{item.project_name}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.description}</span>
            </EntryItem>
            <EntryItem>
              <div className="links">
                <span>
                  Manage Users
                  <KeyboardArrowRightIcon />
                </span>
                <span>
                  Details
                  <KeyboardArrowRightIcon />
                </span>
              </div>
            </EntryItem>
          </EntryFlexList>
        ))}
      </EntriesContainer>
    </ProjectsContainer>
  );
};

export default ProjectsList;
