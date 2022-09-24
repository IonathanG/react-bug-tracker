import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase.config";

const useProjectUsersListener = () => {
  const [projectUsers, setProjectUsers] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "projectUsers"), (snapshot) =>
        // console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.forEach((doc) =>
          setProjectUsers({ ...projectUsers, ...doc.data() })
        )
      ),
    // eslint-disable-next-line
    []
  );

  console.log("projectUsers: ", projectUsers);
};

export default useProjectUsersListener;
