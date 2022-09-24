import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase.config";

// initialise data from firestore
export const getProjects = createAsyncThunk("data/getProjects", async () => {
  const docRef = doc(db, "projects", "projectsID");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return { data: docSnap.data() };
  } else {
    console.log("No such document");
  }
});

const initialState = {
  // Projects: {},
  isLoading: false,
  Projects: {
    project_01: {
      project_id: "project_01",
      project_name: "Project One",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {
        ticket_01: {
          project_id: "project_01",
          ticket_id: "project_01_ticket_01",
          ticket_name: "Ticket One",
          created_by: "Tromso Two",
          assigned_by: "Tromso One",
          assigned_to: "Tromso Three",
          description: "This is ticket one",
          type: "Bug/Errors",
          status: "Open",
          priority: "High",
          created_date: "27/08/22",
          history: {
            event_01: {
              date: "27/08/22",
              title: "Ticket Created",
              author: "Tromso Two",
              detail: "Ticket was submitted by Tromso Two",
            },
          },
          comments: {
            comment_01: {
              author: "Tromso Two",
              date: "27/08/22",
              comment: "Good luck on this first ticket",
            },
          },
          attachments: {},
        },
        ticket_02: {
          project_id: "project_01",
          ticket_id: "project_01_ticket_02",
          ticket_name: "Ticket Two",
          created_by: "Tromso Two",
          assigned_by: "Tromso One",
          assigned_to: "Tromso Three",
          description: "This is ticket two",
          type: "Design Flaw",
          status: "Open",
          priority: "Low",
          created_date: "27/08/22",
          history: {
            event_01: {
              date: "27/08/22",
              title: "Ticket Created",
              author: "Tromso One",
              detail: "Ticket was submitted by Tromso One",
            },
          },
          comments: {
            comment_01: {
              author: "Tromso One",
              date: "27/08/22",
              comment: "Good luck on this second ticket",
            },
          },
          attachments: {},
        },
      },
    },
    project_02: {
      project_id: "project_02",
      project_name: "Project Two",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {
        ticket_01: {
          project_id: "project_01",
          ticket_id: "project_01_ticket_01",
          ticket_name: "Ticket One",
          created_by: "Tromso Two",
          assigned_by: "Tromso One",
          assigned_to: "Tromso Three",
          description: "This is ticket one",
          type: "Bug/Errors",
          status: "Open",
          priority: "High",
          created_date: "27/08/22",
          history: {
            event_01: {
              date: "27/08/22",
              title: "Ticket Created",
              author: "Tromso Two",
              detail: "Ticket was submitted by Tromso Two",
            },
          },
          comments: {
            comment_01: {
              author: "Tromso Two",
              date: "27/08/22",
              comment: "Good luck on this first ticket",
            },
          },
          attachments: {},
        },
      },
    },
    project_03: {
      project_id: "project_03",
      project_name: "Project Three",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {
        ticket_01: {
          project_id: "project_01",
          ticket_id: "project_01_ticket_01",
          ticket_name: "Ticket One",
          created_by: "Tromso Two",
          assigned_by: "Tromso One",
          assigned_to: "Tromso Three",
          description: "This is ticket one",
          type: "Bug/Errors",
          status: "Open",
          priority: "High",
          created_date: "27/08/22",
          history: {
            event_01: {
              date: "27/08/22",
              title: "Ticket Created",
              author: "Tromso Two",
              detail: "Ticket was submitted by Tromso Two",
            },
          },
          comments: {
            comment_01: {
              author: "Tromso Two",
              date: "27/08/22",
              comment: "Good luck on this first ticket",
            },
          },
          attachments: {},
        },
      },
    },
    project_04: {
      project_id: "project_04",
      project_name: "Project Four",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {},
    },
    project_05: {
      project_id: "project_05",
      project_name: "Project Five",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {},
    },
    project_06: {
      project_id: "project_06",
      project_name: "Project Six",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {},
    },
    project_07: {
      project_id: "project_07",
      project_name: "Project Seven",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {},
    },
    project_08: {
      project_id: "project_08",
      project_name: "Project Eigth",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {},
    },
    project_09: {
      project_id: "project_09",
      project_name: "Project Nine",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {},
    },
    project_10: {
      project_id: "project_10",
      project_name: "Project Ten",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {},
    },
    project_11: {
      project_id: "project_11",
      project_name: "Project Eleven",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Close",
      attachment: {},
      tickets: {},
    },
    project_12: {
      project_id: "project_12",
      project_name: "Project Twelve",
      description: "This is project one",
      start_date: "27/08/22",
      end_date: "01/10/22",
      priority: "Normal",
      progress: 0,
      status: "Close",
      attachment: {},
      tickets: {
        ticket_01: {
          project_id: "project_01",
          ticket_id: "project_01_ticket_01",
          ticket_name: "Ticket One",
          created_by: "Tromso Two",
          assigned_by: "Tromso One",
          assigned_to: "Tromso Three",
          description: "This is ticket one",
          type: "Bug/Errors",
          status: "Open",
          priority: "High",
          created_date: "27/08/22",
          history: {
            event_01: {
              date: "27/08/22",
              title: "Ticket Created",
              author: "Tromso Two",
              detail: "Ticket was submitted by Tromso Two",
            },
          },
          comments: {
            comment_01: {
              author: "Tromso Two",
              date: "27/08/22",
              comment: "Good luck on this first ticket",
            },
          },
          attachments: {},
        },
      },
    },
  },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  // initialise data from firestore
  extraReducers: {
    [getProjects.pending]: (state) => {
      state.isLoading = true;
      console.log("pending");
    },
    [getProjects.fulfilled]: (state, { payload }) => {
      console.log("test");
      //state.Projects = payload.data.Projects;
      state.isLoading = false;
    },
    [getProjects.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

//export const { addItem } = usersSlice.actions;
export default projectsSlice.reducer;

// let obj = {
//   "barID1": {
//     "address": "4 East Terrace, Sydney NSW 2000",
//     "appStoreURL": "http://itunes.apple.com/app/idXXXXXXXXX",
//     "description": "description text",
//     "imgURLs": [ "Https:url1",  "https:url2", "https:url3" ],
//     "lat": -34.810585,
//     "lon": 138.616739,
//     "name": "Africola",
//     "phone": "(08) 8223 3885",
//     "status": "active",
//     "venueImgURL": "https:url"
//   },
//   "barID2": {
//     "address": "138/140 Gouger St, Sydney NSW 2000",
//     "appStoreURL": "http://itunes.apple.com/app/idXXXXXXXXX",
//      "description": "description text",
//     "imgURLs": [ "Https:url1",  "https:url2", "https:url3" ],
//     "lat": -34.848082,
//     "lon": 138.599813,
//     "name": "Disco Mexico Taqueria",
//     "phone": "0416 855 108",
//     "status": "active",
//     "venueImgURL": "https:url"
//   }
// };

// const findKeyByName = (obj, search) => Object.keys(obj).find(key => obj[key].name === search);

// console.log(findKeyByName(obj, 'Africola'));
// console.log(findKeyByName(obj,'Disco Mexico Taqueria'));
