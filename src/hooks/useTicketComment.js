import { doc, updateDoc } from "firebase/firestore";
import moment from "moment/moment";
import { useState } from "react";
import { db } from "../utils/firebase.config";
import useAuth from "./useAuth";
import useTicketHistory from "./useTicketHistory";

// Custom hook to add comment to a ticket
// => + add the comment event to the ticket history
const useTicketComment = () => {
  const { auth } = useAuth();
  const [EditHistory] = useTicketHistory();
  const [status, setStatus] = useState("idle");

  const EditComment = async (ticket, data) => {
    // DB Collection References to update comments array
    const projectRef = doc(db, "projects", ticket.project_id);
    await updateDoc(projectRef, {
      // Update the comment list by adding the new comment to the array
      [`tickets.${ticket.ticket_id}.comments`]: [
        ...ticket.comments,
        {
          id: ticket?.comments.length,
          author: auth?.id,
          created_at: moment().format("LLL"),
          comment: data.ticketComment,
        },
      ],
    })
      .then(() => setStatus("success"))

      // Update History => "New Comment Added"
      .then(() => {
        const data = {
          title: `New comment added to ticket: ${ticket.ticket_name}`,
          detail: "The ticket comment was added.",
        };
        EditHistory(ticket, data);
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };
  return [EditComment, status];
};

export default useTicketComment;
