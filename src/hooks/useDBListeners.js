import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { dbUpdateProjects } from "../features/projectsSlice";
import { dbUpdateProjectUsers } from "../features/projectUsersSlice";
import { dbUpdateUsers } from "../features/usersSlice";
import { dbUpdateArchivedProjects } from "../features/archivedProjectsSlice";

// ----- Initialise DataBase Listeners => Projects, ProjectUsers and Users -----
const useDBListeners = () => {
  const dispatch = useDispatch();

  // Initialise Projects DB
  const projectsListener = () => {
    const unsub = onSnapshot(collection(db, "projects"), (snapshot) => {
      let dataObj = {};
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().project_id] = doc.data();
      });
      dispatch(dbUpdateProjects(dataObj));
    });

    return unsub;
  };

  // Initialise ProjectUsers DB
  const projectUsersListener = () => {
    const unsub = onSnapshot(collection(db, "projectUsers"), (snapshot) => {
      let dataObj = {};
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().project_id] = doc.data();
      });
      dispatch(dbUpdateProjectUsers(dataObj));
    });

    return unsub;
  };

  // Initialise Users DB
  const usersListener = () => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let dataObj = {};
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().user_id] = doc.data();
      });
      dispatch(dbUpdateUsers(dataObj));
    });

    return unsub;
  };

  // Initialise Archived Projects DB
  const archivedProjectsListener = () => {
    const unsub = onSnapshot(collection(db, "archivedProjects"), (snapshot) => {
      let dataObj = {};
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().project_id] = doc.data();
      });
      dispatch(dbUpdateArchivedProjects(dataObj));
    });

    return unsub;
  };

  return [
    projectsListener,
    projectUsersListener,
    usersListener,
    archivedProjectsListener,
  ];
};
export default useDBListeners;
