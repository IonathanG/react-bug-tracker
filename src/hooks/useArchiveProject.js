import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../utils/firebase.config";

const useArchiveProject = () => {
  const projects = useSelector((state) => state.projects.Projects);
  const [status, setStatus] = useState("idle");

  const ArchiveProject = async (projectID) => {
    // DB Collection References
    const projectRef = doc(db, "projects", projectID);
    const archivedProjectsRef = doc(db, "archivedProjects", projectID);

    await setDoc(
      archivedProjectsRef,
      // Update the archived projects collection first
      projects[projectID]
    )
      .then(() => {
        deleteDoc(projectRef);
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
