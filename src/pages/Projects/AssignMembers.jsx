import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ManageDevCard from "../../components/Cards/AssignMembers/ManageDevCard";
import ProjectTeamCard from "../../components/Cards/AssignMembers/ProjectTeamCard";
import Navigation from "../../components/Navigation/Navigation";

const ManageTeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 360px));
  grid-gap: 40px;
`;

const AssignMembers = () => {
  const { projectID } = useParams();

  // Retrieving State
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const [projectMembers, setProjectMembers] = useState(null);

  useEffect(() => {
    setProjectMembers(projectUsers[projectID]);
  }, [projectUsers, projectID]);

  return (
    <>
      <Navigation headerText={"Manage Team"} />

      <ManageTeamContainer>
        <ProjectTeamCard
          projectMembers={projectMembers}
          projectID={projectID}
        />
        <ManageDevCard
          teamMembers={projectMembers?.project_team_id}
          projectID={projectID}
        />
      </ManageTeamContainer>
    </>
  );
};

export default AssignMembers;
