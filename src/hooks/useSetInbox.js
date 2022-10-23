import { doc, updateDoc } from "firebase/firestore";
import moment from "moment/moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../utils/firebase.config";

const useSetInbox = () => {
  const users = useSelector((state) => state.users.Users);
  const [status, setStatus] = useState("idle");

  // Set up the correct message to send and update the user inbox
  const sendMessage = async (type, receiverID) => {
    const userRef = doc(db, "users", receiverID);
    const messages = users[receiverID]?.user_notifications;

    let messageDetails = {};

    switch (type) {
      case "assignTicket":
        messageDetails = Object.assign({
          title: "Ticket Assigned",
          content: "A new ticket has been assigned to you",
          type: "ticket",
        });
        break;
      case "assignProject":
        messageDetails = Object.assign({
          title: "Project Assigned",
          content: "A new project has been assigned to you",
          type: "project",
        });
        break;
      case "assignRole":
        messageDetails = Object.assign({
          title: "Role Assigned",
          content: "Update: A new role has been assigned to you",
          type: "role",
        });
        break;
      default:
        return null;
    }

    await updateDoc(userRef, {
      [`user_notifications`]: [
        ...messages,
        {
          title: messageDetails.title,
          content: messageDetails.content,
          type: messageDetails.type,
          date: moment().format("DD/MM/yyyy"),
          id: messages.length,
        },
      ],
    })
      .then(() => setStatus("success"))
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };

  return [sendMessage, status];
};

export default useSetInbox;
