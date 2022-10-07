import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Project = styled.div`
  font-size: 14px;
  span {
    font-weight: 700;
  }
`;

const AssignDevTicketInfo = ({ project, ticket }) => {
  return (
    <CardContainer>
      <Title>{ticket?.ticket_name}</Title>
      <Description>{ticket?.description}</Description>

      <Project>
        <span>Project: </span> {project?.project_name}
        {/* {project?.progress} */}
      </Project>
    </CardContainer>
  );
};

export default AssignDevTicketInfo;
