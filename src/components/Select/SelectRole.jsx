import React, { useState } from "react";
import styled from "styled-components";
import { RoleList as roleList } from "../../data/Data_RoleList";

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
`;

const OptionRole = styled.option`
  padding: 5px 0;
`;

const SelectRole = () => {
  const [roleSelected, setRoleSelected] = useState("none");

  return (
    <Container>
      <div>Select the Role to assign</div>

      <SelectContainer
        onChange={(e) => {
          setRoleSelected(e.target.value);
          console.log(roleSelected);
        }}
        defaultValue={""}
      >
        <OptionRole value={""} disabled>
          - Select Role -
        </OptionRole>
        {roleList.map((role, index) => (
          <OptionRole key={index} value={role.value}>
            {role.label}
          </OptionRole>
        ))}
      </SelectContainer>
    </Container>
  );
};

export default SelectRole;
