import React from "react";
import { Link } from "react-router-dom";
import ButtonBasic from "../Buttons/Button_Basic";

const NewTicket = () => {
  return (
    <Link to={"/"}>
      <ButtonBasic text={"New Ticket"} />
    </Link>
  );
};

export default NewTicket;
