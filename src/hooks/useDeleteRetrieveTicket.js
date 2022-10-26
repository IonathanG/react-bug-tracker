import { deleteField, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";

const useDeleteRetrieveTicket = () => {
  const projects = useSelector((state) => state.projects.Projects);
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const RetrieveTicket = async (projectID, ticketID) => {
    // DB Collection References
    const projectRef = doc(db, "projects", projectID);

    await updateDoc(projectRef, {
      // Update the active project first
      [`tickets.${ticketID}`]: projects[projectID].archived_ticket[ticketID],
    })
      .then(() => {
        updateDoc(projectRef, {
          // Update the archived ticket second by deleting the ticket
          [`archived_ticket.${ticketID}`]: deleteField(),
        });
      })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };

  const DeleteTicket = async (projectID, ticketID) => {
    // DB Collection References
    const projectRef = doc(db, "projects", projectID);

    await updateDoc(projectRef, {
      // Delete the archived ticket
      [`archived_ticket.${ticketID}`]: deleteField(),
    })
      .then(() => {
        setStatus("success");
        navigate("/Tickets/ArchivedTickets");
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };
  return [RetrieveTicket, DeleteTicket, status];
};

export default useDeleteRetrieveTicket;
