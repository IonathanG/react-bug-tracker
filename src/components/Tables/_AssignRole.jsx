import React from "react";
import ButtonActions from "../Buttons/Button_Actions";
import useAssignRole from "../../hooks/useAssignRole.js";

const AssignRole = ({ userRow }) => {
  const [AssignRole, buttonText] = useAssignRole();

  const EditButtonStyle = {
    theme: "rgb(39,167,68)",
    hover: {
      color: "white",
    },
  };

  return (
    <div onClick={() => AssignRole(userRow.user_id, userRow.manageRole)}>
      <ButtonActions buttonStyle={EditButtonStyle} text={buttonText} />
    </div>
  );
};

export default AssignRole;
