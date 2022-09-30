import React from "react";
// import styled from "styled-components";
import TicketForm from "../../components/Form/TicketForm";
import Navigation from "../../components/Navigation/Navigation";

const AddTicket = () => {
  return (
    <>
      <Navigation headerText={"Add Ticket"} />
      <TicketForm />
    </>
  );
};

export default AddTicket;
