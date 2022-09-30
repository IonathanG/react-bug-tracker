import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
//import { device } from "../../shared/breakpoints";

const Container = styled.div``;

const ManageProjects = () => {
  return (
    <Container>
      {" "}
      <Navigation headerText={"Manage Projects"} />
    </Container>
  );
};

export default ManageProjects;
