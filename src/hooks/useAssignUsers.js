import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase.config";

const useAssignUsers = () => {
  // Redirect once confirmed that new Users are assigned
  const navigate = useNavigate();

  // Update the userlist of the project
  const AssignUsers = async (list, projectID) => {
    const projectUsersRef = doc(db, "projectUsers", projectID);

    await updateDoc(projectUsersRef, {
      project_team_id: list,
    })
      .then(() => console.log("Team Updated!"))
      .then(() => navigate(`../AssignMembers/${projectID}`))
      .catch((error) => console.log(error));
  };

  return [AssignUsers];
};

export default useAssignUsers;
