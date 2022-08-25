import React from "react";
import { SectionContent } from "../../shared/Section";
import { default as CreateProjectButton } from "../../components/Buttons/Button_MainStyle";
import { ProjectList as Data_ProjectList } from "../../data/Data_ProjectList";
import ProjectsList from "./_ProjectsList";

const ButtonStyle = {
  padding: "10px 20px",
  margin: "-20px 0 0 0",
};

const ProjectsPage = () => {
  // Submit Form to Create a New Project
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new project");
  };

  return (
    <SectionContent>
      <h1>My Projects</h1>

      <CreateProjectButton
        buttonStyle={ButtonStyle}
        text={"Create new Project"}
        handleSubmit={handleSubmit}
      />
      <ProjectsList projectList={Data_ProjectList} />
    </SectionContent>
  );
};

export default ProjectsPage;
