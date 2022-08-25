import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { Button_MainStyle } from "../../components/Buttons/Buttons";
import { ProjectList as projectList } from "../../data/Data_ProjectList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectContainer = styled.select`
  background-color: ${({ theme }) => theme.navbar_Background};
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
  color: ${({ theme }) => theme.main_Font_Color};
  padding: 10px 5px;
  border: none;
  font-size: 16px;

  &:focus {
    border: none;
    outline: none;
  }

  @media ${device.tablet} {
    width: 85%;
  }
`;

const OptionProject = styled.option`
  padding: 5px 0;
`;

const SubmitButton = styled(Button_MainStyle)`
  margin-top: 20px;

  @media ${device.tablet} {
    width: 85%;
  }
`;

const SelectProject = () => {
  const [roleSelected, setRoleSelected] = useState("none");

  return (
    <Container>
      <div>Select the Project to assign</div>

      <SelectContainer
        onChange={(e) => {
          setRoleSelected(e.target.value);
          console.log(roleSelected);
        }}
        defaultValue={""}
      >
        <OptionProject value={""} disabled>
          - Select Project -
        </OptionProject>
        {projectList.map((project, index) => (
          <OptionProject key={index} value={project.project_name}>
            {project.project_name}
          </OptionProject>
        ))}
      </SelectContainer>

      <SubmitButton type="submit">Submit</SubmitButton>
    </Container>
  );
};

export default SelectProject;
