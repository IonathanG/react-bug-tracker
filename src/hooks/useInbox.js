import { doc, updateDoc } from "firebase/firestore";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../utils/firebase.config";
import useAuth from "./useAuth";

const useInbox = () => {
  const users = useSelector((state) => state.users.Users);
  const { auth } = useAuth();
  const [status, setStatus] = useState("idle");

  // Return the Notification Inbox of the current user
  const messages = useMemo(() => {
    return users[auth?.id]?.user_notifications;
  }, [users, auth]);

  // Delete and Update the message list
  const deleteMessage = async (id) => {
    setStatus("fetching");

    const newMessages = [...messages.filter((message) => message.id !== id)];
    const userRef = doc(db, "users", auth?.id);

    await updateDoc(userRef, {
      [`user_notifications`]: newMessages,
    })
      .then(() => setStatus("success"))
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };

  return [messages, deleteMessage, status];
};

export default useInbox;
