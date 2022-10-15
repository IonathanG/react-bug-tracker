import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export const MenuAdmin = [
  { id: 0, name: "Dashboard", src: DashboardSharpIcon, link: "/" },
  {
    id: 1,
    name: "Notification Inbox",
    src: EmailOutlinedIcon,
    link: "/Inbox",
  },
  {
    id: 2,
    name: "Projects",
    src: ExtensionOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "All Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/AllProjects",
      },
      {
        id: 1,
        name: "My Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/MyProjects",
      },
      {
        id: 2,
        name: "Add Project",
        src: HorizontalRuleIcon,
        link: "/Projects/AddProject",
      },
      {
        id: 3,
        name: "Manage Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/ManageProjects",
      },
      {
        id: 4,
        name: "Archived Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/ArchivedProjects",
      },
    ],
  },
  {
    id: 3,
    name: "Tickets",
    src: SellOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "All Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/AllTickets",
      },
      {
        id: 1,
        name: "My Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/MyTickets",
      },
      {
        id: 2,
        name: "Add Ticket",
        src: HorizontalRuleIcon,
        link: "/Tickets/AddTicket",
      },
      {
        id: 3,
        name: "Unassigned Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/UnassignedTickets",
      },
      {
        id: 4,
        name: "Archived Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/ArchivedTickets",
      },
    ],
  },
  {
    id: 4,
    name: "Admin",
    src: AdminPanelSettingsOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "Company Invite",
        src: HorizontalRuleIcon,
        link: "/Admin/Invite",
      },
      {
        id: 1,
        name: "Manage Roles",
        src: HorizontalRuleIcon,
        link: "/Admin/ManageRoles",
      },
      {
        id: 2,
        name: "Manage Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/ManageProjects",
      },
    ],
  },
];

export const MenuManager = [
  { id: 0, name: "Dashboard", src: DashboardSharpIcon, link: "/" },
  {
    id: 1,
    name: "Notification Inbox",
    src: EmailOutlinedIcon,
    link: "/Inbox",
  },
  {
    id: 2,
    name: "Projects",
    src: ExtensionOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "All Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/AllProjects",
      },
      {
        id: 1,
        name: "My Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/MyProjects",
      },
      {
        id: 2,
        name: "Manage Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/ManageProjects",
      },
      {
        id: 3,
        name: "Archived Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/ArchivedProjects",
      },
    ],
  },
  {
    id: 3,
    name: "Tickets",
    src: SellOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "All Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/AllTickets",
      },
      {
        id: 1,
        name: "My Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/MyTickets",
      },
      {
        id: 2,
        name: "Add Ticket",
        src: HorizontalRuleIcon,
        link: "/Tickets/AddTicket",
      },
      {
        id: 3,
        name: "Unassigned Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/UnassignedTickets",
      },
      {
        id: 4,
        name: "Archived Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/ArchivedTickets",
      },
    ],
  },
  {
    id: 4,
    name: "Manager",
    src: AdminPanelSettingsOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "Manage Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/ManageProjects",
      },
    ],
  },
];

export const MenuUser = [
  { id: 0, name: "Dashboard", src: DashboardSharpIcon, link: "/" },
  {
    id: 1,
    name: "Notification Inbox",
    src: EmailOutlinedIcon,
    link: "/Inbox",
  },
  {
    id: 2,
    name: "Projects",
    src: ExtensionOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "All Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/AllProjects",
      },
      {
        id: 1,
        name: "My Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/MyProjects",
      },
      {
        id: 2,
        name: "Archived Projects",
        src: HorizontalRuleIcon,
        link: "/Projects/ArchivedProjects",
      },
    ],
  },
  {
    id: 3,
    name: "Tickets",
    src: SellOutlinedIcon,
    sub_menu: [
      {
        id: 0,
        name: "All Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/AllTickets",
      },
      {
        id: 1,
        name: "My Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/MyTickets",
      },
      {
        id: 2,
        name: "Add Ticket",
        src: HorizontalRuleIcon,
        link: "/Tickets/AddTicket",
      },
      {
        id: 3,
        name: "Archived Tickets",
        src: HorizontalRuleIcon,
        link: "/Tickets/ArchivedTickets",
      },
    ],
  },
];
