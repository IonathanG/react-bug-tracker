import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./shared/Theme";
import { GlobalStyles } from "./shared/globalStyles";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import Home from "./pages/Home";
import ManageRoles from "./pages/ManageRoles";
import ManageProjects from "./pages/ManageProjects";
import ProjectsPage from "./pages/ProjectsPage";
import TicketsPage from "./pages/TicketsPage";
import ProfilePage from "./pages/ProfilePage";
import Missing from "./pages/Missing";

const AppContainer = styled.div``;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* public routes */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="unauthorized" element={<Unauthorized />} />

              {/* protected routes */}
              <Route path="/" element={<Home />} />
              <Route path="/manage-role" element={<ManageRoles />} />
              <Route path="/manage-project" element={<ManageProjects />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/tickets" element={<TicketsPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              {/* catch all */}
              <Route path="*" element={<Missing />} />
            </Route>
          </Routes>
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
