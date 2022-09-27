import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase.config";
// import { useDispatch } from "react-redux";
// import { dbUpdateProjects } from "../features/projectsSlice";

const useProjectsListener = () => {
  const [projects, setProjects] = useState([]);
  const [obj, setObj] = useState({});
  // const dispatch = useDispatch();

  useEffect(() => {
    const obj = {};
    const unsub = onSnapshot(collection(db, "projects"), (snapshot) => {
      setProjects([]);
      snapshot.docs.forEach((doc) => {
        setProjects((prevProjects) => [...prevProjects, doc.data()]);
        console.log(doc.id);
        obj[doc.id] = doc.data();
        setObj({ ...obj, [doc.id]: doc.data() });
      });
      console.log("obj", obj);
    });
    return unsub;
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   if (projects !== null) {
  //     // console.log("dispatch");
  //     dispatch(dbUpdateProjects(projects));
  //   }
  // }, [projects, dispatch]);

  console.log("projects: ", projects);
};
export default useProjectsListener;
