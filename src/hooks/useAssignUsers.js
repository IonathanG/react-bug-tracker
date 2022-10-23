import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";

const useAssignUsers = () => {
  // Redirect once confirmed that new Users are assigned
  const navigate = useNavigate();

  const [status, setStatus] = useState("idle");

  // Update the userlist of the project
  const AssignUsers = async (list, projectID) => {
    const projectUsersRef = doc(db, "projectUsers", projectID);

    await updateDoc(projectUsersRef, {
      project_team_id: list,
    })
      .then(() => {
        setStatus("success");
        navigate(`../AssignMembers/${projectID}`);
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };

  return [AssignUsers, status];
};

export default useAssignUsers;
