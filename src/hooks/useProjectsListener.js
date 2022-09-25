import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../utils/firebase.config";
import { dbUpdateProjects } from "../features/projectsSlice";

const useProjectsListener = () => {
  const [projects, setProjects] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects"), (snapshot) => {
      snapshot.docs.forEach((doc) =>
        setProjects({ ...projects, ...doc.data() })
      );
    });
    return unsub;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (projects !== null) {
      console.log("dispatch");
      dispatch(dbUpdateProjects(projects));
    }
  }, [projects, dispatch]);

  // console.log("projects: ", projects);
};
export default useProjectsListener;
