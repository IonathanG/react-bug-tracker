import ActionIcons from "../components/Tables/_ActionIcons";

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
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Projects",
    accessor: "projects_count",
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
