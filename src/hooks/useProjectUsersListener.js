import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dbUpdateProjectUsers } from "../features/projectUsersSlice";
import { db } from "../utils/firebase.config";

const useProjectUsersListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projectUsers"), (snapshot) => {
      let dataObj = {};
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().project_id] = doc.data();
      });
      dispatch(dbUpdateProjectUsers(dataObj));
    });

    return unsub;
    // eslint-disable-next-line
  }, []);
};

export default useProjectUsersListener;
