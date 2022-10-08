import SingleAvatar from "../components/Avatar/SingleAvatar";
import UserAvatars from "../components/Avatar/UserAvatars";
import ActionIcons from "../components/Tables/_ActionIcons";
import TagInfo from "../components/Tags/Tag_Info";
import AssignRole from "../pages/Admin/_AssignRole";
import SelectRole from "../pages/Admin/_SelectRole";

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
  },
  {
    Header: "Team",
    accessor: "team",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "links",
    Cell: ({ value }) => {
      return <ActionIcons links={value} />;
    },
  },
];

export const Tickets_Columns = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Assigned by",
    accessor: "assigned_by",
  },
  {
    Header: "Assigned to",
    accessor: "assigned_to",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Priority",
    accessor: "priority",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Action",
    accessor: "links",
    Cell: ({ value }) => {
      return <ActionIcons links={value} />;
    },
  },
];

export const MembersDashboard_Columns = [
  {
    Header: "Avatar",
    accessor: "avatar",
    // Cell: ({ value }) => ({ value }),
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
  },
];

export const ProjectsDashboard_Columns = [
  {
    Header: "Project",
    accessor: "project_name",
  },
  {
    Header: "Start Date",
    accessor: "start_date",
  },
  {
    Header: "End Date",
    accessor: "end_date",
  },
  {
    Header: "Team",
    accessor: "team",
  },
  {
    Header: "Ticket Count",
    accessor: "ticket_count",
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
];

export const TicketsDashboard_Columns = [
  {
    Header: "Title",
    accessor: "ticket_title",
  },
  {
    Header: "Developer",
    accessor: "developer",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Priority",
    accessor: "priority",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Action",
    accessor: "links",
    Cell: ({ value }) => {
      return <ActionIcons links={value} />;
    },
  },
];

export const Manage_Roles = [
  {
    Header: "",
    accessor: "avatar",
    Cell: ({ value }) => {
      return <SingleAvatar avatar={value} />;
    },
  },
  {
    Header: "Name",
    accessor: "name_contact",
    Cell: ({ value }) => {
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
      return <TagInfo tagText={value} tagColor={"Blue"} />;
    },
  },
  {
    Header: "Manage Role",
    accessor: "manageRrole",
    Cell: ({ value }) => {
      return <SelectRole />;
    },
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ cell: { value }, row: { original } }) => {
      return <AssignRole value={value} row={original} />;
    },
  },
];
