import React from "react";
import { SectionContent } from "../../shared/Section";
import styled from "styled-components";
import { PageTitle } from "../Shared/PageTitle";

const Title = styled(PageTitle)``;

const ManageProjects = () => {
  return (
    <SectionContent>
      <Title>Manage Projects Page</Title>
    </SectionContent>
  );
};

export default ManageProjects;
