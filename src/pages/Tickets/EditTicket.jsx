import React from "react";
import { useParams } from "react-router-dom";
import TicketForm from "../../components/Form/TicketForm";
import Navigation from "../../components/Navigation/Navigation";

const EditTicket = () => {
  const { ProjectID, TicketID } = useParams();
  console.log(ProjectID, TicketID);

  return (
    <>
      <Navigation headerText={"Edit Ticket"} />
      <TicketForm projectID={ProjectID} ticketID={TicketID} editMode={true} />
    </>
  );
};

export default EditTicket;
