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
  const { id } = useParams();
  // console.log("project ID: ", id);

  // Retrieving State
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const [projectMembers, setProjectMembers] = useState({});

  useEffect(() => {
    setProjectMembers(projectUsers[id]);
  }, [projectUsers, id]);

  return (
    <>
      <Navigation headerText={"Manage Team"} />

      <ManageTeamContainer>
        <ProjectTeamCard projectMembers={projectMembers} projectID={id} />
        <ManageDevCard
          teamMembers={projectMembers?.project_team_id}
          projectID={id}
        />
      </ManageTeamContainer>
    </>
  );
};

export default AssignMembers;
