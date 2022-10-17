import { doc, updateDoc } from "firebase/firestore";
import moment from "moment/moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";
import useAuth from "./useAuth";

const useSubmitTicketForm = () => {
  const { auth } = useAuth();

  const [status, setStatus] = useState("idle");

  const projects = useSelector((state) => state.projects.Projects);

  // Redirect once confirmed the form is submitted
  const navigate = useNavigate();

  // On Submit the Form => Create new Ticket or Edit existing Ticket
  const onSubmit = async (data, editMode, projectID, ticketID) => {
    setStatus("fetching");

    const documentRef = data.projectID ? data.projectID : projectID;
    const ticket = projects[projectID]?.tickets[ticketID];

    // DB Collection References to set up and update
    const projectRef = doc(db, "projects", documentRef);

    // Editing Mode Updates Firestore
    if (editMode) {
      await updateDoc(projectRef, {
        [`tickets.${ticketID}.ticket_name`]: data.ticketTitle,
        [`tickets.${ticketID}.description`]: data.ticketDescription,
        [`tickets.${ticketID}.type`]: data.type,
        [`tickets.${ticketID}.priority`]: data.priority,
        [`tickets.${ticketID}.status`]: data.status,
      })
        // Update History => "Ticket Edited"
        .then(() => {
          updateDoc(projectRef, {
            [`tickets.ticketID-${data.ticketTitle}.history`]: [
              ...ticket.history,
              {
                date: moment().format("DD/MM/yyyy"),
                title: `Ticket ${data.ticketTitle} was Edited`,
                author: auth?.id,
                detail: "The ticket was edited",
              },
            ],
          });
        })
        .then(() => {
          console.log("ticket updated");
          setStatus("fetched");
          navigate("/Tickets/AllTickets");
        })
        .catch((error) => {
          console.log(error);
          setStatus("failed");
        });
    }

    // If not editing => Creates new ticket
    else if (!editMode) {
      await updateDoc(projectRef, {
        [`tickets.ticketID-${data.ticketTitle}`]: {
          project_id: data.projectID,
          ticket_id: `ticketID-${data.ticketTitle}`,
          ticket_name: data.ticketTitle,
          assigned_by: auth?.id,
          assigned_to: "",
          description: data.ticketDescription,
          type: data.type,
          status: "New",
          priority: data.priority,
          created_date: moment().format("DD/MM/yyyy"),
          history: [],
          comments: [],
          attachments: [],
        },
      })
        // Update History => "New Ticket Created"
        .then(() => {
          updateDoc(projectRef, {
            [`tickets.ticketID-${data.ticketTitle}.history`]: [
              {
                date: moment().format("DD/MM/yyyy"),
                title: "New Ticket Created",
                author: auth?.id,
                detail: "A new ticket was added.",
              },
            ],
          });
        })
        .then(() => {
          console.log("ticket created");
          setStatus("fetched");
          navigate("/Tickets/AllTickets");
        })
        .catch((error) => {
          console.log(error);
          setStatus("failed");
        });
    }
  };

  return [onSubmit, status];
};

export default useSubmitTicketForm;
