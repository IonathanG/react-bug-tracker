import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AssignDevCurrentDev from "../../components/Cards/AssignDeveloper/AssignDev_CurrentDev";
import AssignDevSelectCard from "../../components/Cards/AssignDeveloper/AssignDev_SelectCard";
import AssignDevTicketInfo from "../../components/Cards/AssignDeveloper/AssignDev_TicketInfo";
import TicketDetailsTagCard from "../../components/Cards/TicketDetails/TicketDetails_TagCard";
import Navigation from "../../components/Navigation/Navigation";

const AssignDevContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const LeftPannel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightPannel = styled(LeftPannel)`
  flex: 1;
`;

const AssignDeveloper = () => {
  const { ProjectID, TicketID } = useParams();

  // Retrieving State
  const projects = useSelector((state) => state.projects.Projects);

  const ticket = useMemo(() => {
    // Check if ticket is archived or not
    return projects[ProjectID]?.tickets[TicketID];
  }, [projects, ProjectID, TicketID]);

  const currentDev = useMemo(() => {
    return projects[ProjectID]?.tickets[TicketID].assigned_to;
  }, [projects, ProjectID, TicketID]);

  return (
    <>
      <Navigation headerText={" Assign Developer"} />

      <AssignDevContainer>
        <LeftPannel>
          <AssignDevSelectCard projectID={ProjectID} ticketID={TicketID} />
          <AssignDevCurrentDev currentDev={currentDev} />
        </LeftPannel>
        <RightPannel>
          <AssignDevTicketInfo project={projects[ProjectID]} ticket={ticket} />
          <TicketDetailsTagCard project={projects[ProjectID]} ticket={ticket} />
        </RightPannel>
      </AssignDevContainer>
    </>
  );
};

export default AssignDeveloper;
