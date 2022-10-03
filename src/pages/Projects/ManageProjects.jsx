import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProjectCard from "../../components/Cards/ProjectCard";
import Navigation from "../../components/Navigation/Navigation";
//import { device } from "../../shared/breakpoints";

const Container = styled.div``;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
`;

const ManageProjects = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  // List of all current Projects
  const ProjectsList = useMemo(() => {
    // Function to List of all members of a single project => Manager + Developers
    const getTeam = (project) => {
      let team = [];
      team.push({
        user_id:
          users[projectUsers[project.project_id]?.project_manager_id]?.user_id,
        user_avatar:
          users[projectUsers[project.project_id]?.project_manager_id]
            ?.user_avatar,
      });
      projectUsers[project.project_id]?.project_team_id.map((user) =>
        team.push({
          user_id: users[user].user_id,
          user_avatar: users[user].user_avatar,
        })
      );
      return team;
    };

    return Object.values(projects).map((project) => ({
      project_id: project.project_id,
      project_name: project.project_name,
      project_priority: project.priority,
      project_description: project.description,
      project_progress: project.progress,
      project_ticketCount: Object.keys(project.tickets).length,
      project_team: getTeam(project),
    }));
  }, [projects, projectUsers, users]);

  return (
    <Container>
      <Navigation headerText={"Manage Projects"} />

      <CardsContainer>
        {ProjectsList.map((project) => (
          <ProjectCard key={project.project_id} project={project} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default ManageProjects;
