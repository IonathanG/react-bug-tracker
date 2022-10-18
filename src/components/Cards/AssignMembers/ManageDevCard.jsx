import React, { useMemo } from "react";
import styled from "styled-components";
import ButtonBasic from "../../Buttons/Button_Basic";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useAssignUsers from "../../../hooks/useAssignUsers";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: fit-content;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ButtonContainer = styled.span`
  width: 50%;
`;

const DevContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyDev = styled.div`
  width: 45%;
  font-size: 14px;
  font-weight: 400;

  p {
    text-align: center;
    padding: 4px;
  }
`;
const OnProjectDev = styled(CompanyDev)``;

const DevList = styled.div`
  border: 1px solid ${({ theme }) => theme.background_Modal};
  height: 180px;
`;

const DevMember = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-bottom: 0.5px solid ${({ theme }) => theme.background_Modal};

  &:hover {
    color: ${({ theme }) => theme.color_ButtonBasic};
    background-color: ${({ theme }) => theme.background_ButtonBasic};
  }
`;

const SwapIcon = styled(SwapHorizIcon)``;

const ManageDevCard = ({ teamMembers, projectID }) => {
  const users = useSelector((state) => state.users.Users);
  const [projectDevList, setProjectDevList] = useState([]);

  // Custom Hook to Update the Userlist to the Project
  const [AssignUsers] = useAssignUsers();

  useEffect(() => {
    setProjectDevList(teamMembers);
  }, [teamMembers]);

  // Filter Users who are not Developers and not already on the current Project
  const companyDevList = useMemo(() => {
    return Object.values(users)
      .filter(
        (user) =>
          user.user_role === "Developer" &&
          !projectDevList?.includes(user.user_id)
      )
      .map((user) => user.user_id);
  }, [users, projectDevList]);

  // Adds Developer to the current project
  const addDev = (user) => {
    setProjectDevList((list) => [...list, user]);
  };

  // Removes Developer from the current project
  const removeDev = (user) => {
    setProjectDevList((list) => list.filter((dev) => dev !== user));
  };

  return (
    <CardContainer>
      <Title>Manage Developers</Title>

      <DevContainer>
        <CompanyDev>
          <p>Company Developers</p>
          <DevList>
            {/* Dev who are not on the Project Team */}
            {companyDevList?.map((user) => (
              <DevMember key={user} onClick={() => addDev(user)}>
                {users[user]?.user_name}
              </DevMember>
            ))}
          </DevList>
        </CompanyDev>

        <SwapIcon />

        <OnProjectDev>
          <p>On Project</p>
          <DevList>
            {/* Users who are already on the Project Team */}
            {projectDevList?.map((user) => (
              <DevMember key={user} onClick={() => removeDev(user)}>
                {users[user]?.user_name}
              </DevMember>
            ))}
          </DevList>
        </OnProjectDev>
      </DevContainer>

      <ButtonContainer onClick={() => AssignUsers(projectDevList, projectID)}>
        <ButtonBasic text={"Assign Members"} />
      </ButtonContainer>
    </CardContainer>
  );
};

export default ManageDevCard;
