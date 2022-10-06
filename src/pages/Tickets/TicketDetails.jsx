import React, { useMemo } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import { useSelector } from "react-redux";
import TicketDetailsInfoCard from "../../components/Cards/TicketDetails/TicketDetails_InfoCard";
import TicketDetailsTagCard from "../../components/Cards/TicketDetails/TicketDetails_TagCard";
import TicketDetailsCommentsCard from "../../components/Cards/TicketDetails/TicketDetails_CommentsCard";
import TicketDetailsHistoryCard from "../../components/Cards/TicketDetails/TicketDetails_HistoryCard";

const Container = styled.div``;

const TicketDetailsContainer = styled.div`
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

const TicketDetails = () => {
  const { ProjectID, TicketID } = useParams();
  // Retrieving State
  const projects = useSelector((state) => state.projects.Projects);

  const ticket = useMemo(() => {
    return projects[ProjectID]?.tickets[TicketID];
  }, [projects, ProjectID, TicketID]);

  return (
    <Container>
      <Navigation headerText={"Ticket Details"} />

      <TicketDetailsContainer>
        <LeftPannel>
          <TicketDetailsInfoCard
            project={projects[ProjectID]}
            ticket={ticket}
          />
          <TicketDetailsTagCard project={projects[ProjectID]} ticket={ticket} />
        </LeftPannel>

        <RightPannel>
          <TicketDetailsCommentsCard ticket={ticket} />
          <TicketDetailsHistoryCard ticket={ticket} />
        </RightPannel>
      </TicketDetailsContainer>
    </Container>
  );
};

export default TicketDetails;
