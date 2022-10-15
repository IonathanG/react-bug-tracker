import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROLES } from "../../../data/Roles";
import useAuth from "../../../hooks/useAuth";
import ButtonActions from "../../Buttons/Button_Actions";

const CardContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Progress = styled(Description)``;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const ProjectDetailsInfoCard = ({ project = null }) => {
  const { auth } = useAuth();

  const EditButtonStyle = {
    theme: "rgb(255,193,6)",
    hover: {
      color: "black",
    },
  };

  const ArchiveButtonStyle = {
    theme: "rgb(220,52,68)",
    hover: {
      color: "white",
    },
  };

  return (
    <CardContainer>
      <Title>{project?.project_name}</Title>
      <Description>{project?.description}</Description>

      <Progress>
        <span>Project Progress: </span>
        {project?.progress}
      </Progress>

      {/* Only showing Edit and Archive Project to Admin and Manager */}
      {(auth?.roles?.includes(ROLES.Admin) ||
        auth?.roles?.includes(ROLES.Manager)) && (
        <ButtonContainer>
          <Link to={`/Projects/EditProject/${project?.project_id}`}>
            <ButtonActions
              buttonStyle={EditButtonStyle}
              text={"Edit Project"}
            />
          </Link>
          <Link to={`/`}>
            <ButtonActions
              buttonStyle={ArchiveButtonStyle}
              text={"Archive Project"}
            />
          </Link>
        </ButtonContainer>
      )}
    </CardContainer>
  );
};

export default ProjectDetailsInfoCard;
