import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";

const useEditProject = () => {
  // Redirect once confirmed that new Manager is assigned
  const navigate = useNavigate();

  // Update the manager of the project
  const AssignManager = async (data, projectID) => {
    console.log("test Manager", data);
    const projectUsersRef = doc(db, "projectUsers", projectID);

    await updateDoc(projectUsersRef, {
      project_manager_id: data.projectManager,
    })
      .then(() => console.log("Manager Updated!"))
      .then(() => navigate(`../AssignMembers/${projectID}`))
      .catch((error) => console.log(error));
  };

  return [AssignManager];
};

export default useEditProject;
