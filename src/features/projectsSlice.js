import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Projects: {},
  // isLoading: false,
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
          ticket_name: "Ticket One",
          created_by: "Tromso Two",
          developer_assigned: "Tromso Three",
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
          ticket_name: "Ticket Two",
          created_by: "Tromso One",
          developer_assigned: "Tromso Three",
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
          ticket_name: "Ticket One",
          created_by: "Tromso Two",
          developer_assigned: "Tromso Three",
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
          ticket_name: "Ticket Two",
          created_by: "Tromso One",
          developer_assigned: "Tromso Three",
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
  },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
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
