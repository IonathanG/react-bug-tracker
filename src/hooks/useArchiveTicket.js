import { deleteField, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../utils/firebase.config";

const useArchiveTicket = () => {
  const projects = useSelector((state) => state.projects.Projects);
  const [status, setStatus] = useState("idle");

  const ArchiveTicket = async (projectID, ticketID) => {
    // DB Collection References
    const projectRef = doc(db, "projects", projectID);

    await updateDoc(projectRef, {
      // Update the archived_ticket object first
      [`archived_ticket.${ticketID}`]: projects[projectID]?.tickets[ticketID],
    })
      .then(() => {
        updateDoc(projectRef, {
          // Update the active projects second by deleting the ticket
          [`tickets.${ticketID}`]: deleteField(),
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
  return [ArchiveTicket, status];
};

export default useArchiveTicket;
