import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Block,
  Block_Header,
  Block_EntryFlexList,
  Block_EntryTitle,
} from "../Shared/Block";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProjectContainer = styled(Block)`
  width: 100%;
  margin-top: 50px;
  gap: 0px;
`;

const Header = styled(Block_Header)`
  span:nth-child(1) {
    font-size: 16px;
  }
  span:nth-child(2) {
    font-size: 14px;
    display: flex;
    gap: 10px;
  }
`;

const EntryFlexList = styled(Block_EntryFlexList)`
  li:nth-child(1),
  li:nth-child(2),
  li:nth-child(3) {
    flex: 1;
  }
`;
const EntryTitle = styled(Block_EntryTitle)`
  margin-top: 10px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  border-bottom: none;
  //background-color: beige;

  span {
    font-size: 13px;
    font-weight: normal;
    padding: 10px 0 0 5px;
  }
`;

const ProjectHeader = ({
  projectID,
  projectName,
  projectDesc,
  projectCreated,
}) => {
  return (
    <ProjectContainer>
      {/* ----- Header ----- */}
      <Header>
        <span>Details for Project #{projectID}</span>
        <span>
          <Link to={"/projects"}>
            Back to Projects List <KeyboardArrowRightIcon />
          </Link>{" "}
          <Link to={"/projects"}>
            Edit <KeyboardArrowRightIcon />
          </Link>
        </span>
      </Header>

      {/* ----- Main Project Details ----- */}
      <EntryFlexList>
        <EntryTitle>
          Project Name <span>{projectName}</span>
        </EntryTitle>
        <EntryTitle>
          Project Description <span>{projectDesc}</span>
        </EntryTitle>
        <EntryTitle>
          Created <span>{projectCreated}</span>
        </EntryTitle>
      </EntryFlexList>
    </ProjectContainer>
  );
};

export default ProjectHeader;
