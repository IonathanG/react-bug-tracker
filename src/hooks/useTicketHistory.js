import { doc, updateDoc } from "firebase/firestore";
import moment from "moment/moment";
import { db } from "../utils/firebase.config";
import useAuth from "./useAuth";

// Custom hook to Edit the history of the ticket
// Cases : New Ticket, Ticket Edited, Ticket Assigned, Comment Added
const useTicketHistory = () => {
  const { auth } = useAuth();

  const EditHistory = async (ticket, data) => {
    // console.log(ticket);
    const projectRef = doc(db, "projects", ticket?.project_id);

    await updateDoc(projectRef, {
      [`tickets.${ticket?.ticket_id}.history`]: [
        ...ticket.history,
        {
          date: moment().format("DD/MM/yyyy"),
          title: data.title,
          author: auth?.id,
          detail: data.detail,
        },
      ],
    }).catch((error) => console.log(error));
  };
  return [EditHistory];
};

export default useTicketHistory;
