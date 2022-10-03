import React from "react";
import styled from "styled-components";
import ButtonActions from "../Buttons/Button_Actions";

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

      <ButtonContainer>
        <ButtonActions buttonStyle={EditButtonStyle} text={"Edit Project"} />
        <ButtonActions
          buttonStyle={ArchiveButtonStyle}
          text={"Archive Project"}
        />
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProjectDetailsInfoCard;
