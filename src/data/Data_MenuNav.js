import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export const MenuNav = [
  { id: 0, name: "Dashboard", src: DashboardSharpIcon, link: "/" },
  {
    id: 1,
    name: "Notification Inbox",
    src: EmailOutlinedIcon,
    link: "/unauthorized",
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
        link: "/profile",
      },
      {
        id: 1,
        name: "My Projects",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
      {
        id: 2,
        name: "Add Project",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
      {
        id: 3,
        name: "Manage Projects",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
      {
        id: 4,
        name: "Archived Projects",
        src: HorizontalRuleIcon,
        link: "/profile",
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
        link: "/profile",
      },
      {
        id: 1,
        name: "My Tickets",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
      {
        id: 2,
        name: "Add Ticket",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
      {
        id: 3,
        name: "Manage Tickets",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
      {
        id: 4,
        name: "Archived Tickets",
        src: HorizontalRuleIcon,
        link: "/profile",
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
        link: "/profile",
      },
      {
        id: 1,
        name: "Manage Roles",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
      {
        id: 2,
        name: "Manage Projects",
        src: HorizontalRuleIcon,
        link: "/profile",
      },
    ],
  },
];
