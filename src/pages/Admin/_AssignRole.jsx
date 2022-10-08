import React from "react";
import ButtonActions from "../../components/Buttons/Button_Actions";

const AssignRole = ({ value, row }) => {
  console.log(value);
  console.log(row);

  const EditButtonStyle = {
    theme: "rgb(39,167,68)",
    hover: {
      color: "white",
    },
  };

  const handleAssign = (value) => {
    console.log("user :" + value + " assigned");
  };

  return (
    <div onClick={() => handleAssign(value)}>
      <ButtonActions buttonStyle={EditButtonStyle} text={"Assign Role"} />
    </div>
  );
};

export default AssignRole;
