import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.config";

// export const initalizeDbListeners = onSnapshot(
//   doc(db, "projects", "projectsID"),
//   (doc) => {
//     console.log("Current data: ", doc.data());
//   }
// );

export const initalizeDbListeners = () => {
  db.collection("projects").onSnapshot((snapshot) => {
    console.log(snapshot.docs);
    //   setMessages(
    //     snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
    //   );
  });
};
