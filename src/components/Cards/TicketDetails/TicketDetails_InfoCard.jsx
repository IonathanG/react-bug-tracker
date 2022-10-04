import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonActions from "../../Buttons/Button_Actions";

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

const Developer = styled(Project)``;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const TicketDetailsInfoCard = ({ project = null, ticket }) => {
  const users = useSelector((state) => state.users.Users);

  const AssignButtonStyle = {
    theme: "rgb(0,123,254)",
    hover: {
      color: "white",
    },
  };

  const EditButtonStyle = {
    theme: "rgb(255,193,6)",
    hover: {
      color: "black",
    },
  };

  const ArchiveButtonStyle = {
    theme: "rgb(220,52,68)",
    hover: {
      color: "white",
    },
  };

  return (
    <CardContainer>
      <Title>{ticket?.ticket_name}</Title>
      <Description>{ticket?.description}</Description>

      <Project>
        <span>Project: </span> {project?.project_name}
        {/* {project?.progress} */}
      </Project>

      <Developer>
        <span>Developer: </span>
        {users[ticket?.assigned_to]?.user_avatar}
        {users[ticket?.assigned_to]?.user_name}
      </Developer>

      <ButtonContainer>
        <Link to={`/`}>
          <ButtonActions
            buttonStyle={AssignButtonStyle}
            text={"Assign Developer"}
          />
        </Link>
        <Link
          to={`/Tickets/EditProject/${ticket?.project_id}/${ticket?.ticket_id}`}
        >
          <ButtonActions buttonStyle={EditButtonStyle} text={"Edit Ticket"} />
        </Link>
        <Link to={`/`}>
          <ButtonActions
            buttonStyle={ArchiveButtonStyle}
            text={"Archive Project"}
          />
        </Link>
      </ButtonContainer>
    </CardContainer>
  );
};

export default TicketDetailsInfoCard;
