import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { dbUpdateProjects } from "../features/projectsSlice";

const useProjectsListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects"), (snapshot) => {
      let dataObj = {};
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().project_id] = doc.data();
      });
      dispatch(dbUpdateProjects(dataObj));
    });

    return unsub;
    // eslint-disable-next-line
  }, []);
};
export default useProjectsListener;
