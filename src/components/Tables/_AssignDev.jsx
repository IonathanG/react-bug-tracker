import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ROLES } from "../../data/Roles";
import ButtonBasic from "../Buttons/Button_Basic";

const AssignDev = ({ original }) => {
  const { auth } = useAuth();

  return (
    <>
      {(auth?.roles?.includes(ROLES.Admin) ||
        auth?.roles?.includes(ROLES.Manager)) && (
        <Link
          to={`/Tickets/AssignDeveloper/${original.project_id}/${original.ticket_id}`}
        >
          <ButtonBasic text={"Assign Dev"} />
        </Link>
      )}
    </>
  );
};

export default AssignDev;
