import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase.config";
import useSetInbox from "./useSetInbox";

const useAssignRole = () => {
  const [buttonText, setButtonText] = useState("Assign Role");
  const [sendMessage] = useSetInbox();

  const [status, setStatus] = useState("idle");

  const AssignRole = async (userID, roleSelected) => {
    // DB Collection References to set up and update
    const userRef = doc(db, "users", userID);

    await updateDoc(userRef, {
      user_role: roleSelected,
    })
      .then(() => {
        setButtonText("User Assigned");
        setStatus("success");
      })
      // Send a Notification to the user that he/she was assigned a project
      .then(() => sendMessage("assignRole", userID))
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };
  return [AssignRole, buttonText, status];
};

export default useAssignRole;
