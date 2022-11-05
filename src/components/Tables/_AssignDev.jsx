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
        auth?.roles?.includes(ROLES.Manager)) &&
        !original.links.archive.isArchived && (
          // Only showing Assign Dev to Admin and Manager IF ticket is not Archived
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
