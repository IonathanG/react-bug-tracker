import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";
import useSetInbox from "./useSetInbox";

const useEditProject = () => {
  // Redirect once confirmed that new Manager is assigned
  const navigate = useNavigate();

  const [sendMessage] = useSetInbox();
  const [status, setStatus] = useState("idle");

  // Update the manager of the project
  const AssignManager = async (data, projectID) => {
    console.log("test Manager", data);
    const projectUsersRef = doc(db, "projectUsers", projectID);

    await updateDoc(projectUsersRef, {
      project_manager_id: data.projectManager,
    })
      // Send a Notification to the user that he/she was assigned a project
      .then(() => sendMessage("assignProject", data.projectManager))
      .catch((error) => {
        console.log(error);
        setStatus("failed");
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

  return [AssignManager, status];
};

export default useEditProject;
