import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useTicketHistory from "./useTicketHistory";
import useSetInbox from "./useSetInbox";

// Custom Hook to assign the ticket to the developer
const useAssignTicket = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);

  const navigate = useNavigate();
  const [EditHistory] = useTicketHistory();
  const [sendMessage] = useSetInbox();

  const [status, setStatus] = useState("idle");

  const AssignTicket = async (data, projectID, ticketID) => {
    const projectRef = doc(db, "projects", projectID);
    const ticket = projects[projectID]?.tickets[ticketID];

    await updateDoc(projectRef, {
      [`tickets.${ticketID}.assigned_to`]: data.assignedTo,
    })
      // Update History => "Developer Assigned to the ticket"
      .then(() => {
        const dataHistory = {
          title: `${
            users[data.assignedTo]?.user_name
          } was assigned to ticket: ${ticket.ticket_name}`,
          detail: "The ticket was assigned to a developer.",
        };
        EditHistory(ticket, dataHistory);
      })

      // Send a Notification to the user that he/she was assigned a ticket
      .then(() => sendMessage("assignTicket", data.assignedTo))
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      })

      // Navigate back to the ticket once success update
      .then(() => {
        setStatus("success");
        navigate(`/Tickets/TicketDetails/${projectID}/${ticketID}`);
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };
  return [AssignTicket, status];
};

export default useAssignTicket;
