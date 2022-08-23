import React from "react";
import { useParams } from "react-router-dom";
import UserAssigned from "./_UserAssigned";
import TicketsAssigned from "./_TicketsAssigned";
import ProjectInfo from "./_ProjectInfo";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);

  const projectDetail = {
    project_id: 1,
    project_name: "Project 1",
    description: "This is Project 1",
    created: "20/08/22 11:11:11 PM",
    users_assigned: [
      { user_name: "Tromso One", email: "tromso_1@tromso.com", role: "Admin" },
      {
        user_name: "Tromso Two",
        email: "tromso_2@tromso.com",
        role: "Project Manager",
      },
      {
        user_name: "Tromso Three",
        email: "tromso_3@tromso.com",
        role: "Developer",
      },
    ],
    tickets_assigned: [
      {
        title: "Ticket title 1",
        submitter: "TromsoSeven",
        developer: "TromsoOne",
        status: "Open",
        created: "21/08/22 11:11:11PM",
      },
      {
        title: "Ticket title 2",
        submitter: "TromsoSeven",
        developer: "TromsoOne",
        status: "In Progress",
        created: "21/08/22 11:11:21PM",
      },
    ],
  };

  return (
    <>
      {/* ----- Header ----- */}
      <ProjectInfo />
      {/* ----- Project Main Details ----- */}
      <UserAssigned userList={projectDetail.users_assigned} />
      <TicketsAssigned ticketList={projectDetail.tickets_assigned} />
    </>
  );
};

export default ProjectDetails;
