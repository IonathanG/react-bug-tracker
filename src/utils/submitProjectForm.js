// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
// import moment from "moment/moment";
// import { db } from "./firebase.config";

// const submitProjectForm = async (data, editMode) => {
//   // DB Collection References to set up and update
//   const projectsRef = doc(db, "projects", `projectID-${data.projectName}`);
//   const projectUsersRef = doc(
//     db,
//     "projectUsers",
//     `projectID-${data.projectName}`
//   );

//   // Editing Mode Updates Firestore
//   if (editMode) {
//     await updateDoc(projectsRef, {
//       project_name: data.projectName,
//       description: data.projectDescription,
//       start_date: moment(data.startDate).format("DD-MM-YYYY"),
//       end_date: moment(data.endDate).format("DD-MM-YYYY"),
//       priority: data.priority,
//     })
//       .then(() => {
//         console.log("Project Updated!");

//         updateDoc(projectUsersRef, {
//           project_manager_id: data.projectManager,
//         })
//           .then(() => console.log("ProjectUsers Updated"))
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => console.log(error));
//   }

//   // If not editing => Creates new project
//   else if (!editMode) {
//     // Checking if Project Name is already taken in the database before creating it
//     const docSnap = await getDoc(projectsRef);

//     if (docSnap.exists()) {
//       console.log("This name is taken");
//     } else {
//       console.log("No such document!");

//       await setDoc(projectsRef, {
//         project_id: `projectID-${data.projectName}`,
//         project_name: data.projectName,
//         description: data.projectDescription,
//         start_date: moment(data.startDate).format("DD-MM-YYYY"),
//         end_date: moment(data.endDate).format("DD-MM-YYYY"),
//         priority: data.priority,
//         progress: 0,
//         status: "Open",
//         attachment: {},
//         tickets: {},
//       })
//         .then(() => {
//           console.log("Project added");
//           setDoc(doc(db, "projectUsers", `projectID-${data.projectName}`), {
//             project_id: `projectID-${data.projectName}`,
//             project_manager_id: data.projectManager,
//             project_team_id: [],
//           })
//             .then(() => {
//               console.log("ProjectUsers added");
//             })
//             .catch((error) => console.log(error));
//         })
//         .catch((error) => console.log(error));
//     }
//   }
// };

// export default submitProjectForm;
