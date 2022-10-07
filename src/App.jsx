import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./shared/Theme";
import { GlobalStyles } from "./shared/globalStyles";
import useProjectsListener from "./hooks/useProjectsListener";
import useUsersListener from "./hooks/useUsersListener";
import useProjectUsersListener from "./hooks/useProjectUsersListener";

// Single Pages
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import HomeDashboard from "./pages/Home_Dashboard/HomeDashboard";
import Inbox from "./pages/Inbox/Inbox";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import Missing from "./pages/Missing/Missing";

// Projects
import AllProjects from "./pages/Projects/AllProjects";
import MyProjects from "./pages/Projects/MyProjects";
import AddProject from "./pages/Projects/AddProject";
import EditProject from "./pages/Projects/EditProject";
import ManageProjects from "./pages/Projects/ManageProjects";
import ArchivedProjects from "./pages/Projects/ArchivedProjects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import AssignManager from "./pages/Projects/AssignManager";
import AssignMembers from "./pages/Projects/AssignMembers";

// Tickets
import AllTickets from "./pages/Tickets/AllTickets";
import MyTickets from "./pages/Tickets/MyTickets";
import AddTicket from "./pages/Tickets/AddTicket";
import EditTicket from "./pages/Tickets/EditTicket";
import UnassignedTickets from "./pages/Tickets/UnassignedTickets";
import ArchivedTickets from "./pages/Tickets/ArchivedTickets";
import TicketDetails from "./pages/Tickets/TicketDetails";
import AssignDeveloper from "./pages/Tickets/AssignDeveloper";

// Admin
import Invite from "./pages/Admin/Invite";
import ManageRoles from "./pages/Admin/ManageRoles";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.main_Background};
`;

function App() {
  // ----- Initialise theme and toggle theme -----
  const { theme } = useTheme();

  const themeMode = useMemo(() => {
    return theme === "light" ? lightTheme : darkTheme;
  }, [theme]);
  // ----- -----

  // ----- Initialise DataBase Listeners -----
  useProjectsListener();
  useUsersListener();
  useProjectUsersListener();

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* ----- PUBLIC ROUTES ----- */}
              <Route path="Login" element={<Login />} />
              <Route path="Unauthorized" element={<Unauthorized />} />
              {/* ----- END PUBLIC ROUTES ----- */}

              {/* ----- PROTECTED ROUTES ----- */}
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/Inbox" element={<Inbox />} />

              {/* -- Projects -- */}
              <Route path="/Projects">
                <Route index element={<AllProjects />} />
                <Route path="/Projects/AllProjects" element={<AllProjects />} />
                <Route path="/Projects/MyProjects" element={<MyProjects />} />
                <Route path="/Projects/AddProject" element={<AddProject />} />
                <Route
                  path="/Projects/EditProject/:id"
                  element={<EditProject />}
                />
                <Route
                  path="/Projects/ManageProjects"
                  element={<ManageProjects />}
                />
                <Route
                  path="/Projects/ArchivedProjects"
                  element={<ArchivedProjects />}
                />
                <Route
                  path="/Projects/ProjectDetails/:id"
                  element={<ProjectDetails />}
                />
                <Route
                  path="/Projects/AssignMembers/:id"
                  element={<AssignMembers />}
                />
                <Route
                  path="/Projects/AssignManager/:id"
                  element={<AssignManager />}
                />
              </Route>

              {/* -- Tickets -- */}
              <Route path="/Tickets">
                <Route index element={<AllTickets />} />
                <Route path="/Tickets/AllTickets" element={<AllTickets />} />
                <Route path="/Tickets/MyTickets" element={<MyTickets />} />
                <Route path="/Tickets/AddTicket" element={<AddTicket />} />
                <Route
                  path="/Tickets/EditTicket/:ProjectID/:TicketID"
                  element={<EditTicket />}
                />
                <Route
                  path="/Tickets/UnassignedTickets"
                  element={<UnassignedTickets />}
                />
                <Route
                  path="/Tickets/ArchivedTickets"
                  element={<ArchivedTickets />}
                />
                <Route
                  path="/Tickets/TicketDetails/:ProjectID/:TicketID"
                  element={<TicketDetails />}
                />
                <Route
                  path="/Tickets/AssignDeveloper/:ProjectID/:TicketID"
                  element={<AssignDeveloper />}
                />
              </Route>

              {/* -- Admin -- */}
              <Route path="/Admin">
                <Route index element={<ManageRoles />} />
                <Route path="/Admin/ManageRoles" element={<ManageRoles />} />
                <Route path="/Admin/Invite" element={<Invite />} />
              </Route>

              {/* ----- END PROTECTED ROUTES ----- */}

              {/* -- Catches All -- */}
              <Route path="*" element={<Missing />} />
            </Route>
          </Routes>
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
