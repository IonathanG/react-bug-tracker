import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase.config";

const useArchiveProject = () => {
  const [status, setStatus] = useState("idle");

  const ArchiveProject = async (projectID) => {
    // DB Collection References
    const projectRef = doc(db, "projects", projectID);

    // update the isArchived boolean
    await updateDoc(projectRef, {
      isArchived: true,
    })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  };
  return [ArchiveProject, status];
};

export default useArchiveProject;
