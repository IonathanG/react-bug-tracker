import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";

const useDeleteRetrieveProject = () => {
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const RetrieveProject = async (projectID) => {
    // DB Collection References
    const projectRef = doc(db, "projects", projectID);

    // update the isArchived boolean
    await updateDoc(projectRef, {
      isArchived: false,
    })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };

  const DeleteProject = async (projectID) => {
    // DB Collection References
    const projectRef = doc(db, "projects", projectID);

    await deleteDoc(projectRef)
      .then(() => {
        setStatus("success");
        navigate("/Projects/ArchivedProjects");
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };
  return [RetrieveProject, DeleteProject, status];
};

export default useDeleteRetrieveProject;
