import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase.config";

const useUsersListener = () => {
  const [users, setUsers] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "users"), (snapshot) =>
        // console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.forEach((doc) => setUsers({ ...users, ...doc.data() }))
      ),
    // eslint-disable-next-line
    []
  );

  console.log("users: ", users);
};

export default useUsersListener;
