import React from "react";
import styled from "styled-components";
import { SectionContent } from "../../shared/Section";
import { Button_MainStyle } from "../../components/Buttons/Buttons";
import { ProjectsList as Data_ProjectsList } from "../../data/Data_ProjectsList";
import ProjectsList from "./_ProjectsList";

const CreateProjectButton = styled(Button_MainStyle)`
  padding: 10px 20px;
  margin-top: -20px;
`;

const ProjectsPage = () => {
  return (
    <SectionContent>
      <h1>My Projects</h1>
      <CreateProjectButton>Create new project</CreateProjectButton>
      <ProjectsList projectsList={Data_ProjectsList} />
    </SectionContent>
  );
};

export default ProjectsPage;
