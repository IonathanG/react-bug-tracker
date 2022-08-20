import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return <div>Project Details of project ID: {id}</div>;
};

export default ProjectDetails;
