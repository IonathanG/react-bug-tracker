import React from "react";
import { useParams } from "react-router-dom";

const TicketDetails = () => {
  const { id } = useParams();

  return <div>Ticket Details of ticket ID: {id}</div>;
};

export default TicketDetails;
