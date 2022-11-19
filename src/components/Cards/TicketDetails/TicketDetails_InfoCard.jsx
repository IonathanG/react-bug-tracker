import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROLES } from "../../../data/Roles";
import useAuth from "../../../hooks/useAuth";
import SingleAvatar from "../../Avatar/SingleAvatar";
import ButtonActions from "../../Buttons/Button_Actions";
import useDeleteRetrieveTicket from "../../../hooks/useDeleteRetrieveTicket";
import useArchiveTicket from "../../../hooks/useArchiveTicket";

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

const Developer = styled(Project)`
  div {
    padding-top: 20px;
    span {
      padding-left: 10px;
      font-weight: 400;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const TicketDetailsInfoCard = ({
  project = null,
  ticket = null,
  isArchived,
}) => {
  const users = useSelector((state) => state.users.Users);
  const { auth } = useAuth();

  const [ArchiveTicket] = useArchiveTicket();
  const [RetrieveTicket, DeleteTicket] = useDeleteRetrieveTicket();

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
        {ticket?.assigned_to !== "" && (
          <div>
            <SingleAvatar
              avatar={users[ticket?.assigned_to]?.user_avatar}
              size={"35px"}
            />
            <span>{users[ticket?.assigned_to]?.user_name}</span>
          </div>
        )}

        {ticket?.assigned_to === "" && <>No developer assigned</>}
      </Developer>

      {/* Only showing Assign Dev, Edit and Archive to Admin and Manager */}
      {/* Only showing Edit to Developer */}
      {/* Assign Dev, Edit and Archive are not available for archived tickets */}
      <ButtonContainer>
        {/* ASSIGN BUTTON */}
        {!isArchived &&
          (auth?.roles?.includes(ROLES.Admin) ||
            auth?.roles?.includes(ROLES.Manager)) && (
            <Link
              to={`/Tickets/AssignDeveloper/${ticket?.project_id}/${ticket?.ticket_id}`}
            >
              <ButtonActions
                buttonStyle={AssignButtonStyle}
                text={"Assign Developer"}
              />
            </Link>
          )}

        {/* EDIT BUTTON */}
        {!isArchived && !auth?.roles?.includes(ROLES.Submitter) && (
          <Link
            to={`/Tickets/EditTicket/${ticket?.project_id}/${ticket?.ticket_id}`}
          >
            <ButtonActions buttonStyle={EditButtonStyle} text={"Edit Ticket"} />
          </Link>
        )}

        {/* ARCHIVE BUTTON */}
        {!isArchived &&
          (auth?.roles?.includes(ROLES.Admin) ||
            auth?.roles?.includes(ROLES.Manager)) && (
            <div
              onClick={() =>
                ArchiveTicket(project?.project_id, ticket?.ticket_id)
              }
            >
              <ButtonActions
                buttonStyle={ArchiveButtonStyle}
                text={"Archive Ticket"}
              />
            </div>
          )}

        {/* RETRIEVE TICKET + DELETE TICKET BUTTONS */}
        {isArchived &&
          (auth?.roles?.includes(ROLES.Admin) ||
            auth?.roles?.includes(ROLES.Manager)) && (
            <>
              <div
                onClick={() =>
                  RetrieveTicket(project.project_id, ticket.ticket_id)
                }
              >
                <ButtonActions
                  buttonStyle={AssignButtonStyle}
                  text={"Retrieve Ticket"}
                />
              </div>
              <div
                onClick={() =>
                  DeleteTicket(project.project_id, ticket.ticket_id)
                }
              >
                <ButtonActions
                  buttonStyle={ArchiveButtonStyle}
                  text={"Delete Ticket"}
                />
              </div>
            </>
          )}
      </ButtonContainer>
    </CardContainer>
  );
};

export default TicketDetailsInfoCard;
