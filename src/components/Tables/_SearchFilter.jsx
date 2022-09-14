import React from "react";
import styled from "styled-components";
import InputBasic from "../Input/InputBasic";

const InputStyle = {
  padding: "8px 10px",
};

const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SearchFilter = ({ filter, setFilter }) => {
  return (
    <Container>
      Search:{" "}
      <InputBasic
        style={InputStyle}
        value={filter || ""}
        setValue={setFilter}
      />
    </Container>
  );
};

export default SearchFilter;
