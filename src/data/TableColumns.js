import SingleAvatar from "../components/Avatar/SingleAvatar";
import UserAvatars from "../components/Avatar/UserAvatars";
import ActionIcons from "../components/Tables/_ActionIcons";
import EditableSelectCell from "../components/Tables/_EditableSelectCell";
import TagInfo from "../components/Tags/Tag_Info";
import AssignRole from "../components/Tables/_AssignRole";
import { Link } from "react-router-dom";
import AssignDev from "../components/Tables/_AssignDev";

// DATA for Column Display of all Tables in react-tables
export const Projects_Columns = [
  {
    Header: "Project",
    accessor: "project_name",
  },
  {
    Header: "End Date",
    accessor: "end_date",
  },
  {
    Header: "Progress",
    accessor: "progress",
  },
  {
    Header: "Project Manager",
    accessor: "project_manager",
    Cell: ({ value }) => {
      // Project Name + Manager displayed in single Cell
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <span style={{ marginLeft: "-20px" }}>
            <SingleAvatar avatar={value.project_manager_avatar} size={"40px"} />
          </span>
          <span>{value.project_manager_name}</span>
        </div>
      );
    },
  },
  {
    Header: "Team",
    accessor: "team",
    Cell: ({ value }) => {
      return <UserAvatars team={value} />; // User Avatars array link to their profiles
    },
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} tagColor={"Green"} />; // Priority display tag
    },
  },
  {
    Header: "Action",
    accessor: "links",
    Cell: ({ value }) => {
      return <ActionIcons links={value} typeProject={true} />; // View, Edit and Archive Icons
    },
  },
];

export const Tickets_Columns = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Created by",
    accessor: "assigned_by",
  },
  {
    Header: "Assigned to",
    accessor: "assigned_to",
    Cell: ({ row: { original } }) => {
      if (!original.assigned_to) {
        return <AssignDev original={original} />; // If ticket is not assigned, shows Assign Dev Option to Admin and Manager
      } else {
        return original.assigned_to;
      }
    },
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} tagColor={"Blue"} />; // Priority display tag
    },
  },
  {
    Header: "Priority",
    accessor: "priority",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} />; // Priority display tag
    },
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Action",
    accessor: "links",
    Cell: ({ value }) => {
      return <ActionIcons links={value} typeProject={false} />; // View, Edit and Archive Icons
    },
  },
];

export const MembersDashboard_Columns = [
  {
    Header: "Avatar",
    accessor: "avatar",
    Cell: ({ value }) => {
      return <SingleAvatar avatar={value} />; // User Avatar link to its user profile
    },
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Projects",
    accessor: "projects_count",
    Cell: ({ value }) => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        {value}
      </div>
    ),
  },
  {
    Header: "Role",
    accessor: "role",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} tagColor={"Grey"} />; // User Avatars array link to their profiles
    },
  },
];

export const ProjectsDashboard_Columns = [
  {
    Header: "Project",
    accessor: "project_info",
    Cell: ({ value, row }) => {
      // Project Name + Manager displayed in single Cell
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <Link to={`/Projects/ProjectDetails/${row.original.project_id}`}>
            <span
              style={{
                fontWeight: "700",
                color: "rgb(92,142,212)",
              }}
            >
              {value.project_name}
            </span>
          </Link>
          <span style={{ color: "rgb(119,119,119)" }}>
            Project Manager: {value.project_manager_name}
          </span>
        </div>
      );
    },
  },
  {
    Header: "Start Date",
    accessor: "start_date",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} tagColor={"Green"} />; // User Avatars array link to their profiles
    },
  },
  {
    Header: "End Date",
    accessor: "end_date",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} tagColor={"Red"} />; // User Avatars array link to their profiles
    },
  },
  {
    Header: "Team",
    accessor: "team",
    Cell: ({ value }) => {
      return <UserAvatars team={value} />; // User Avatars array link to their profiles
    },
  },
  {
    Header: "Ticket Count",
    accessor: "ticket_count",
    Cell: (
      { value } // Centers Number in Cell
    ) => (
      <div
        style={{
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        {value}
      </div>
    ),
  },
];

export const TicketsDashboard_Columns = [
  {
    Header: "Title",
    accessor: "ticket_title",
  },
  {
    Header: "Developer",
    accessor: "developer",
    Cell: ({ row: { original } }) => {
      if (!original.developer) {
        return <AssignDev original={original} />; // If ticket is not assigned, shows Assign Dev Option to Admin and Manager
      } else {
        return original.developer;
      }
    },
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} tagColor={"Blue"} />; // User Avatars array link to their profiles
    },
  },
  {
    Header: "Priority",
    accessor: "priority",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} />; // Priority display tag
    },
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Action",
    accessor: "links",
    Cell: ({ value }) => {
      return <ActionIcons links={value} typeProject={false} />; // View, Edit and Archive Icons
    },
  },
];

export const Manage_Roles = [
  {
    Header: "",
    accessor: "avatar",
    Cell: ({ value }) => {
      return <SingleAvatar avatar={value} size={"60px"} />; // User Avatar display
    },
  },
  {
    Header: "Name",
    accessor: "name_contact",
    Cell: ({ value }) => {
      // Name + Email displayed in single Cell
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span
            style={{
              fontWeight: "700",
            }}
          >
            {value.name}
          </span>
          <span>{value.email}</span>
        </div>
      );
    },
  },
  {
    Header: "Current Role",
    accessor: "currentRole",
    Cell: ({ value }) => {
      return <TagInfo tagText={value} tagColor={"Blue"} />; // Role of the User
    },
  },
  {
    Header: "Manage Role",
    accessor: "manageRole",
    Cell: EditableSelectCell,
    // Select dropdown Menu - update initial value of userRole Cell to the option selected
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row: { original } }) => {
      return <AssignRole userRow={original} />;
      // Action Button to Update the User Role into DB
    },
  },
];
