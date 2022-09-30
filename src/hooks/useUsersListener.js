import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dbUpdateUsers } from "../features/usersSlice";
import { db } from "../utils/firebase.config";

const useUsersListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let dataObj = {};
      snapshot.docs.forEach((doc) => {
        dataObj[doc.data().user_id] = doc.data();
      });
      dispatch(dbUpdateUsers(dataObj));
    });

    return unsub;
    // eslint-disable-next-line
  }, []);
};

export default useUsersListener;
