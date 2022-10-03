import React from "react";
import ProjectForm from "../../components/Form/ProjectForm";
import Navigation from "../../components/Navigation/Navigation";

const AddProject = () => {
  return (
    <>
      <Navigation headerText={"Add Project"} />
      <ProjectForm />
    </>
  );
};

export default AddProject;
