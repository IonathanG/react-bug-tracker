import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { dbUpdateProjects } from "../features/projectsSlice";

const useProjectsListener = () => {
  //const [projects, setProjects] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const dataObj = {};

    const unsub = onSnapshot(collection(db, "projects"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().project_id] = doc.data();
      });
      dispatch(dbUpdateProjects(dataObj));
    });

    return unsub;
    // eslint-disable-next-line
  }, []);

  //console.log("projects: ", projects);
};
export default useProjectsListener;
