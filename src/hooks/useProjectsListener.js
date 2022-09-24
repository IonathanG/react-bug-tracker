import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase.config";

const useProjectsListener = () => {
  const [projects, setProjects] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "projects"), (snapshot) =>
        // console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.forEach((doc) =>
          setProjects({ ...projects, ...doc.data() })
        )
      ),
    // eslint-disable-next-line
    []
  );

  console.log("projects: ", projects);
};

export default useProjectsListener;
