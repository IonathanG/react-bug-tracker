import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dbUpdateProjectUsers } from "../features/projectUsersSlice";
import { db } from "../utils/firebase.config";

const useProjectUsersListener = () => {
  const [projectUsers, setProjectUsers] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projectUsers"), (snapshot) =>
      snapshot.docs.forEach((doc) =>
        setProjectUsers({ ...projectUsers, ...doc.data() })
      )
    );
    return unsub;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (projectUsers !== null) {
      console.log("dispatch");
      dispatch(dbUpdateProjectUsers(projectUsers));
    }
  }, [projectUsers, dispatch]);

  // console.log("projectUsers: ", projectUsers);
};

export default useProjectUsersListener;
