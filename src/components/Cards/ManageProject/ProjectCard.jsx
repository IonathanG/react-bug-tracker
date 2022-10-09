import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ButtonBasic from "../../Buttons/Button_Basic";
import { Link } from "react-router-dom";
import ProjectCardPopUp from "../../PopUp/ProjectCardPopUp";
import UserAvatars from "../../Avatar/UserAvatars";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 100%;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Priority = styled.span`
  padding: 5px 0px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.card_subTitle};
`;

const RightHeader = styled.div`
  position: relative;
`;

const DropDownArrow = styled(ArrowDropDownIcon)`
  margin-top: -5px;
  cursor: pointer;
  color: ${({ theme }) => theme.background_ButtonBasic};
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.background_ButtonBasic_Hover};
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  height: 75px;
  overflow-y: scroll;
`;

const Team = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.card_subTitle};
    display: flex;
    align-items: center;

    span {
      padding-right: 20px;
    }
  }
`;

// const Progress = styled.div``;

const TicketCount = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${({ theme }) => theme.color_Font_Main};
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

const ProjectCard = ({ project }) => {
  console.log(project);

  const buttonStyle = {
    background: "rgb(19,163,184)",
    padding: "8px 10px",
    hover: {
      background: "rgba(19,132,150,255)",
    },
  };

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <CardContainer>
      <CardHeader>
        <LeftHeader>
          <Title>{project.project_name}</Title>
          <Priority>{project.project_priority}</Priority>
        </LeftHeader>

        <RightHeader>
          <DropDownArrow
            onClick={() => setShowPopUp(!showPopUp)}
          ></DropDownArrow>
          <ProjectCardPopUp
            showPopUp={showPopUp}
            projectID={project.project_id}
          />
        </RightHeader>
      </CardHeader>

      <Description>{project.project_description}</Description>

      <Team>
        <span>
          <span>Team</span>
          <UserAvatars team={project.project_team} />
        </span>
        <Link to={`/Projects/AssignMembers/${project.project_id}`}>
          <ButtonBasic buttonStyle={buttonStyle} text={"Manage Team"} />
        </Link>
      </Team>

      {/* <Progress>{project.project_progress}</Progress> */}
      <TicketCount>tickets: {project.project_ticketCount}</TicketCount>
    </CardContainer>
  );
};

export default ProjectCard;
