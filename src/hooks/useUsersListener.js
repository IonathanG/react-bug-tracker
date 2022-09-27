import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dbUpdateUsers } from "../features/usersSlice";
import { db } from "../utils/firebase.config";

const useUsersListener = () => {
  const [users, setUsers] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) =>
      // console.log(snapshot.docs.map((doc) => doc.data()));
      snapshot.docs.forEach((doc) => setUsers({ ...users, ...doc.data() }))
    );
    return unsub;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (users !== null) {
      // console.log("dispatch");
      dispatch(dbUpdateUsers(users));
    }
  }, [users, dispatch]);

  // console.log("users: ", users);
};

export default useUsersListener;
