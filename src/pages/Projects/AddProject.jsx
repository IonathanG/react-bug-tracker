import React from "react";
//import styled from "styled-components";
import ProjectForm from "../../components/Form/ProjectForm";
import Navigation from "../../components/Navigation/Navigation";

const AddProject = () => {
  return (
    <>
      <Navigation headerText={"Add Projects"} />
      <ProjectForm />
    </>
  );
};

export default AddProject;
