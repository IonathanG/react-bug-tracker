import React from "react";
import ButtonActions from "../../components/Buttons/Button_Actions";

const AssignRole = ({ userRow }) => {
  console.log(userRow.currentRole);

  const EditButtonStyle = {
    theme: "rgb(39,167,68)",
    hover: {
      color: "white",
    },
  };

  const handleAssign = () => {
    console.log(userRow.currentRole);
    console.log("user assigned");
  };

  return (
    <div onClick={() => handleAssign()}>
      <ButtonActions buttonStyle={EditButtonStyle} text={"Assign Role"} />
    </div>
  );
};

export default AssignRole;
