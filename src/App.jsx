import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./shared/Theme";
import { GlobalStyles } from "./shared/globalStyles";

import Layout from "./layout/Layout";

import Login from "./pages/Login/Login";

import HomeDashboard from "./pages/Home_Dashboard/HomeDashboard";

import Inbox from "./pages/Inbox/Inbox";

import Projects from "./pages/Projects/Projects";
import AllProjects from "./pages/Projects/_AllProjects";
import MyProjects from "./pages/Projects/_MyProjects";
import AddProject from "./pages/Projects/_AddProject";
import ManageProjects from "./pages/Projects/_ManageProjects";
import ArchivedProjects from "./pages/Projects/_ArchivedProjects";
import ProjectDetails from "./pages/Projects/_ProjectDetails";

import Tickets from "./pages/Tickets/Tickets";
import AllTickets from "./pages/Tickets/_AllTickets";
import MyTickets from "./pages/Tickets/_MyTickets";
import AddTicket from "./pages/Tickets/_AddTicket";
import ManageTickets from "./pages/Tickets/_ManageTickets";
import UnassignedTickets from "./pages/Tickets/_UnassignedTickets";
import TicketDetails from "./pages/Tickets/_TicketDetails";

import Admin from "./pages/Admin/Admin";
import Invite from "./pages/Admin/_Invite";
import ManageRoles from "./pages/Admin/_ManageRoles";

import Unauthorized from "./pages/Unauthorized/Unauthorized";

import Missing from "./pages/Missing/Missing";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.main_Background};
`;

function App() {
  // ----- initialise and toggle theme -----
  const { theme } = useTheme();

  const themeMode = useMemo(() => {
    return theme === "light" ? lightTheme : darkTheme;
  }, [theme]);
  // ----- -----

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

              {/* Projects */}
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Projects/AllProjects" element={<AllProjects />} />
              <Route path="/Projects/MyProjects" element={<MyProjects />} />
              <Route path="/Projects/AddProject" element={<AddProject />} />
              <Route
                path="/Projects/ManageProjects"
                element={<ManageProjects />}
              />
              <Route
                path="/Projects/ArchivedProjects"
                element={<ArchivedProjects />}
              />
              <Route
                path="/Projects/ProjectDetails"
                element={<ProjectDetails />}
              />

              {/* Tickets */}
              <Route path="/Tickets" element={<Tickets />} />
              <Route path="/Tickets/AllTickets" element={<AllTickets />} />
              <Route path="/Tickets/MyTickets" element={<MyTickets />} />
              <Route path="/Tickets/AddTicket" element={<AddTicket />} />
              <Route
                path="/Tickets/ManageTickets"
                element={<ManageTickets />}
              />
              <Route
                path="/Tickets/UnassignedTickets"
                element={<UnassignedTickets />}
              />
              <Route
                path="/Tickets/TicketDetails"
                element={<TicketDetails />}
              />

              {/* Admin */}
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Admin/Invite" element={<Invite />} />
              <Route path="/Admin/ManageRoles" element={<ManageRoles />} />

              {/* ----- END PROTECTED ROUTES ----- */}

              {/* <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetails />} /> */}

              {/* Catch All */}
              <Route path="*" element={<Missing />} />
            </Route>
          </Routes>
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
