import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase.config";

const useAssignRole = () => {
  const [buttonText, setButtonText] = useState("Assign Role");

  const AssignRole = async (userID, roleSelected) => {
    // DB Collection References to set up and update
    const userRef = doc(db, "users", userID);

    await updateDoc(userRef, {
      user_role: roleSelected,
    })
      .then(() => {
        console.log("User Assigned!");
        setButtonText("User Assigned");
      })
      .catch((error) => console.log(error));
  };
  return [AssignRole, buttonText];
};

export default useAssignRole;
