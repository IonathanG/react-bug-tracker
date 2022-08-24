import React from "react";
import styled from "styled-components";

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

const Block_Options = () => {
  return (
    <>
      <Options>
        {" "}
        <div>Show X entries</div>
        <div>Search</div>
      </Options>
    </>
  );
};

export default Block_Options;
