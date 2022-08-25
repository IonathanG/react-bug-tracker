import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { SectionContent } from "../../shared/Section";
import FormProjectAssign from "../../components/Forms/Form_ProjectAssign";
import UserList from "../../components/UserList/UserList";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  transition: 0.3s ease;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ManageProjects = () => {
  return (
    <SectionContent>
      <h1>Manage Project Users</h1>

      <Container>
        {/* ----- Form to Assign a Project to Users ----- */}
        <FormProjectAssign />

        {/* ----- Current list of Users and their Roles ----- */}
        <UserList />
      </Container>
    </SectionContent>
  );
};

export default ManageProjects;
