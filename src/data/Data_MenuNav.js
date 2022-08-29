import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

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
    link: "/projects",
  },
  { id: 3, name: "Tickets", src: SellOutlinedIcon, link: "/tickets" },
  {
    id: 4,
    name: "Admin",
    src: AdminPanelSettingsOutlinedIcon,
    link: "/profile",
  },
];
