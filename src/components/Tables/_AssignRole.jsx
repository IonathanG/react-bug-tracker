import React from "react";
import ButtonActions from "../Buttons/Button_Actions";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.config";

const AssignRole = ({ userRow }) => {
  const EditButtonStyle = {
    theme: "rgb(39,167,68)",
    hover: {
      color: "white",
    },
  };

  const handleAssign = async () => {
    // DB Collection References to set up and update
    const userRef = doc(db, "users", userRow.user_id);

    await updateDoc(userRef, {
      user_role: userRow.manageRole,
    })
      .then(() => console.log("User Assigned!"))
      // .then(() => navigate(-1))
      .catch((error) => console.log(error));
  };

  return (
    <div onClick={() => handleAssign()}>
      <ButtonActions buttonStyle={EditButtonStyle} text={"Assign Role"} />
    </div>
  );
};

export default AssignRole;
