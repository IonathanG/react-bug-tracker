import React from "react";
import { useParams } from "react-router-dom";
import ProjectForm from "../../components/Form/ProjectForm";
import Navigation from "../../components/Navigation/Navigation";

const EditProject = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Navigation headerText={"Edit Project"} />
      <ProjectForm projectID={id} />
    </>
  );
};

export default EditProject;
