import React from "react";
import styled from "styled-components";
import { SectionContent } from "../../shared/Section";
import { PageTitle } from "../Shared/PageTitle";
import { Button_MainStyle } from "../../shared/Buttons";
import ProjectsList from "./_ProjectsList";
import { ProjectsList as Data_ProjectsList } from "../../data/Data_ProjectsList";

const Title = styled(PageTitle)``;

const CreateProjectButton = styled(Button_MainStyle)`
  padding: 10px 20px;
  margin-top: -20px;
`;

const ProjectsPage = () => {
  return (
    <SectionContent>
      <Title>My Projects</Title>
      <CreateProjectButton>Create new project</CreateProjectButton>
      <ProjectsList projectsList={Data_ProjectsList} />
    </SectionContent>
  );
};

export default ProjectsPage;
