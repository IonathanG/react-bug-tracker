import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProjectCard from "../../components/Cards/ManageProject/ProjectCard";
import Navigation from "../../components/Navigation/Navigation";
import TagInfo from "../../components/Tags/Tag_Info";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 360px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const UserAvatar = styled.img`
  margin: 0 auto;
  width: 120px;
  height: auto;
  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.437) 0px 2px 8px 0px;
`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UserName = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const UserEmail = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.card_subTitle};
  }
  a {
    color: ${({ theme }) => theme.pale_Blue};
  }
`;

const UserMobile = styled(UserEmail)`
  p {
    padding: 5px 0px;
    font-size: 15px;
  }
`;

const UserProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
`;

const MemberProfile = () => {
  const { userID } = useParams();

  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  // Retrieves and memoize all current projects the user is part of
  const userProjects = useMemo(() => {
    // Function to List of all member avatars of a single project => Manager + Developers
    const getTeam = (projectID) => {
      let team = [];
      team.push(
        users[projectUsers[projectID]?.project_manager_id]?.user_avatar
      );
      projectUsers[projectID]?.project_team_id.map((user) =>
        team.push(users[user]?.user_avatar)
      );
      return team;
    };

    const projectsArray = Object.values(projectUsers);
    return projectsArray
      .filter((project) => {
        return (
          project.project_manager_id === userID ||
          project.project_team_id.some((user) => user === userID)
        );
      })
      .map((project) => ({
        project_id: project.project_id,
        project_name: projects[project.project_id]?.project_name,
        project_priority: projects[project.project_id]?.priority,
        project_description: projects[project.project_id]?.description,
        project_progress: projects[project.project_id]?.progress,
        project_ticketCount: Object.keys(projects[project.project_id]?.tickets)
          .length,
        project_team: getTeam(project.project_id),
      }));
  }, [users, projects, projectUsers, userID]);

  return (
    <>
      <Navigation headerText={" Member Profile"} />

      <Container>
        <CardContainer>
          {/* <UserAvatar>{users[userID]?.user_avatar}</UserAvatar> */}
          <UserAvatar src={"/avatar/" + userID} alt="user_picture" />

          <UserWrap>
            <UserName>{users[userID]?.user_name}</UserName>
            <TagInfo tagText={users[userID]?.user_role} tagColor={"Cyan"} />
          </UserWrap>

          <UserEmail>
            <span>Email Address:</span>
            <a
              href={"mailto" + users[userID]?.user_email}
              target="_blank"
              rel="noreferrer"
              alt="email-link"
            >
              {users[userID]?.user_email}
            </a>
          </UserEmail>

          <UserMobile>
            <span>Mobile:</span>
            {users[userID]?.user_mobile === "" ? (
              <p>Not Provided</p>
            ) : (
              <p>{users[userID]?.user_mobile}</p>
            )}
          </UserMobile>
        </CardContainer>

        <UserProjects>
          {userProjects.map((project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </UserProjects>
      </Container>
    </>
  );
};

export default MemberProfile;
