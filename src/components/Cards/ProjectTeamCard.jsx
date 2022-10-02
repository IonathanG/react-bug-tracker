import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonBasic from "../Buttons/Button_Basic";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const TeamCount = styled.span`
  padding: 5px 0px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.card_subTitle};
`;

const ManagerContainer = styled.div`
  display: flex;
  gap: 120px;
`;

const ManagerAvatar = styled.div``;

const ManagerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.card_subTitle};
  }

  a {
    padding: 5px 0px;
  }
`;

const ManagerName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.background_Modal};
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TeamMember = styled.div`
  display: flex;
  gap: 30px;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 15px;
  font-weight: 400;

  span {
    font-size: 13px;
    color: ${({ theme }) => theme.card_subTitle};
  }
`;

const ProjectTeamCard = ({ projectMembers, projectID }) => {
  const users = useSelector((state) => state.users.Users);
  // console.log("projectMembers: ", projectMembers);

  const buttonStyle = {
    background: "rgb(19,163,184)",
    padding: "8px 10px",
    hover: {
      background: "rgba(19,132,150,255)",
    },
  };

  return (
    <CardContainer>
      <CardHeader>
        <Title>Project Team</Title>
        <TeamCount>
          {projectMembers?.project_team_id?.length + 1} team members
        </TeamCount>
      </CardHeader>

      <ManagerContainer>
        <ManagerAvatar>
          {users[projectMembers?.project_manager_id]?.user_avatar}
        </ManagerAvatar>

        <ManagerInfo>
          <ManagerName>
            {users[projectMembers?.project_manager_id]?.user_name}
          </ManagerName>

          <span>{users[projectMembers?.project_manager_id]?.user_email}</span>
          <span>{users[projectMembers?.project_manager_id]?.user_role}</span>

          <Link to={`/Projects/AssignManager/${projectID}`}>
            <ButtonBasic buttonStyle={buttonStyle} text={"Manage PM"} />
          </Link>
        </ManagerInfo>
      </ManagerContainer>

      <Divider />

      <TeamContainer>
        {projectMembers?.project_team_id?.map((member) => (
          <TeamMember key={member}>
            {users[member].user_avatar}
            <MemberInfo>
              {users[member].user_name}
              <span>{users[member].user_role}</span>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamContainer>
    </CardContainer>
  );
};

export default ProjectTeamCard;
