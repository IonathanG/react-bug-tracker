import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./shared/Theme";
import { GlobalStyles } from "./shared/globalStyles";
import useProjectsListener from "./hooks/useProjectsListener";
import useUsersListener from "./hooks/useUsersListener";
import useProjectUsersListener from "./hooks/useProjectUsersListener";
import RequireAuth from "./utils/RequireAuth";

// Single Pages
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";

import HomeDashboard from "./pages/Home/HomeDashboard";
import Inbox from "./pages/Inbox/Inbox";
import MemberProfile from "./pages/MemberProfile/MemberProfile";
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

  // ----- Defines Roles for Private Protected Routes -----
  const ROLES = {
    Admin: 100,
    Manager: 200,
    Developer: 300,
    Submitter: 400,
    User: 500,
  };

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

              {/* ----- PROTECTED ROUTES -  LOGGED IN USERS ONLY ----- */}
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                {/* All logged in Users can access these routes */}
                <Route path="/" element={<HomeDashboard />} />
                <Route path="/Inbox" element={<Inbox />} />
                <Route
                  path="/MemberProfile/:userID"
                  element={<MemberProfile />}
                />

                {/* -- PROJECTS -- */}
                <Route path="/Projects">
                  <Route index element={<AllProjects />} />

                  <Route
                    path="/Projects/AllProjects"
                    element={<AllProjects />}
                  />
                  <Route path="/Projects/MyProjects" element={<MyProjects />} />
                  <Route
                    path="/Projects/ArchivedProjects"
                    element={<ArchivedProjects />}
                  />
                  <Route
                    path="/Projects/ProjectDetails/:id"
                    element={<ProjectDetails />}
                  />

                  <Route
                    element={
                      <RequireAuth
                        allowedRoles={[ROLES.Admin, ROLES.Manager]}
                      />
                    }
                  >
                    {/* Only ADMIN and PROJECT MANAGER can access these routes */}
                    <Route
                      path="/Projects/EditProject/:id"
                      element={<EditProject />}
                    />
                    <Route
                      path="/Projects/ManageProjects"
                      element={<ManageProjects />}
                    />
                    <Route
                      path="/Projects/AssignMembers/:id"
                      element={<AssignMembers />}
                    />
                  </Route>

                  {/* Only ADMIN can access these routes */}
                  <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route
                      path="/Projects/AddProject"
                      element={<AddProject />}
                    />
                    <Route
                      path="/Projects/AssignManager/:id"
                      element={<AssignManager />}
                    />
                  </Route>
                </Route>

                {/* -- TICKETS -- */}
                <Route path="/Tickets">
                  <Route index element={<AllTickets />} />
                  <Route path="/Tickets/AllTickets" element={<AllTickets />} />
                  <Route path="/Tickets/MyTickets" element={<MyTickets />} />
                  <Route
                    path="/Tickets/ArchivedTickets"
                    element={<ArchivedTickets />}
                  />
                  <Route path="/Tickets/AddTicket" element={<AddTicket />} />
                  <Route
                    path="/Tickets/TicketDetails/:ProjectID/:TicketID"
                    element={<TicketDetails />}
                  />

                  {/* Only ADMIN, PROJECT MANAGER and DEVELOPER can access these routes */}
                  <Route
                    element={
                      <RequireAuth
                        allowedRoles={[
                          ROLES.Admin,
                          ROLES.Manager,
                          ROLES.Developer,
                        ]}
                      />
                    }
                  >
                    <Route
                      path="/Tickets/EditTicket/:ProjectID/:TicketID"
                      element={<EditTicket />}
                    />
                  </Route>

                  <Route
                    element={
                      <RequireAuth
                        allowedRoles={[ROLES.Admin, ROLES.Manager]}
                      />
                    }
                  >
                    {/* Only ADMIN and PROJECT MANAGER can access these routes */}
                    <Route
                      path="/Tickets/UnassignedTickets"
                      element={<UnassignedTickets />}
                    />
                    <Route
                      path="/Tickets/AssignDeveloper/:ProjectID/:TicketID"
                      element={<AssignDeveloper />}
                    />
                  </Route>
                </Route>

                {/* -- ADMIN -- */}
                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  {/* Only ADMIN can access these routes */}
                  <Route path="/Admin">
                    <Route index element={<ManageRoles />} />
                    <Route
                      path="/Admin/ManageRoles"
                      element={<ManageRoles />}
                    />
                    <Route path="/Admin/Invite" element={<Invite />} />
                  </Route>
                </Route>
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
