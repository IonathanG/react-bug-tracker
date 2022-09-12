export const Users = {
  user_id: {
    user_name: "",
    user_email: "",
    user_password: "",
    user_role: "",
    user_mobile: "",
    user_avatar: "",
    user_inbox: { message_id: { message: "" } },
    user_notifications: { notification_id: { notification: "" } },
  },
};

export const Projects_Users = {
  project_id: {
    project_manager_id: "",
    project_team_id: ["user_02", "user_03"],
  },
};

export const Projects = {
  project_id: {
    project_name: "",
    description: "",
    start_date: "",
    end_date: "",
    priority: "",
    progress: 0,
    status: "",
    attachment: "",
    tickets: {
      ticket_id: {
        ticket_name: "",
        created_by: "",
        developer_assigned: "",
        description: "",
        type: "",
        status: "",
        priority: "",
        created_date: "",
        history: { event_id: { date: "", title: "", author: "", detail: "" } },
        comments: { comment_id: { author: "", date: "", comment: "" } },
        attachments: { attachment_id: { description: "", object: "" } },
      },
    },
  },
};

// export const Projects = {
//   project_id: {
//     project_name: "",
//     description: "",
//     start_date: "",
//     end_date: "",
//     priority: "",
//     progress: 0,
//     status: "",
//     attachment: "",
//     tickets: {
//       ticket_id: "",
//     },
//   },
// };

// export const Tickets = {
//   ticket_id: {
//     project_id: "",
//     ticket_name: "",
//     created_by: "",
//     developer_assigned: "",
//     description: "",
//     type: "",
//     status: "",
//     priority: "",
//     created_date: "",
//     history: { event_id: { date: "", title: "", author: "", detail: "" } },
//     comments: { comment_id: { author: "", date: "", comment: "" } },
//     attachments: { attachment_id: { description: "", object: "" } },
//   },
// };
