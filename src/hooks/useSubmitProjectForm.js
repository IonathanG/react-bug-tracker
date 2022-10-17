import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import moment from "moment/moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";

const useSubmitProjectForm = () => {
  const [status, setStatus] = useState("idle");
  const [errorName, setErrorName] = useState(false);

  // Redirect once confirmed the form is submitted
  const navigate = useNavigate();

  // On Submit the Form => Create new Project or Edit existing Project
  const onSubmit = async (data, editMode) => {
    console.log(data);
    setStatus("fetching");

    // DB Collection References to set up and update
    const projectsRef = doc(db, "projects", `projectID-${data.projectName}`);
    const projectUsersRef = doc(
      db,
      "projectUsers",
      `projectID-${data.projectName}`
    );

    // Editing Mode Updates Firestore
    if (editMode) {
      await updateDoc(projectsRef, {
        project_name: data.projectName,
        description: data.projectDescription,
        start_date: moment(data.startDate).format("DD-MM-YYYY"),
        end_date: moment(data.endDate).format("DD-MM-YYYY"),
        priority: data.priority,
      })
        .then(() => {
          console.log("Project Updated!");

          updateDoc(projectUsersRef, {
            project_manager_id: data.projectManager,
          })
            .then(() => {
              console.log("ProjectUsers Updated");
              setStatus("fetched");
              navigate(`/Projects/AllProjects`);
            })
            .catch((error) => {
              console.log(error);
              setStatus("failed");
            });
        })
        .catch((error) => {
          console.log(error);
          setStatus("failed");
        });
    }

    // If not editing => Creates new project
    else if (!editMode) {
      // Checking if Project Name is already taken in the database before creating it
      const docSnap = await getDoc(projectsRef);

      if (docSnap.exists()) {
        console.log("This name is taken");
        setStatus("failed");
        setErrorName(true);
      } else {
        console.log("No such document!");

        await setDoc(projectsRef, {
          project_id: `projectID-${data.projectName}`,
          project_name: data.projectName,
          description: data.projectDescription,
          start_date: moment(data.startDate).format("DD-MM-YYYY"),
          end_date: moment(data.endDate).format("DD-MM-YYYY"),
          priority: data.priority,
          progress: 0,
          status: "Open",
          attachment: {},
          tickets: {},
        })
          .then(() => {
            console.log("Project added");
            setDoc(doc(db, "projectUsers", `projectID-${data.projectName}`), {
              project_id: `projectID-${data.projectName}`,
              project_manager_id: data.projectManager,
              project_team_id: [],
            })
              .then(() => {
                console.log("ProjectUsers added");
                setStatus("fetched");
              })
              .catch((error) => {
                console.log(error);
                setStatus("failed");
              });
          })
          .catch((error) => {
            console.log(error);
            setStatus("failed");
          });
      }
    }
  };

  return [onSubmit, status, errorName];
};

export default useSubmitProjectForm;
