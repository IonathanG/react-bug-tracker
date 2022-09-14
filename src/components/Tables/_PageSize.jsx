import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  select {
    border: 1px solid ${({ theme }) => theme.border_Input};
    padding: 8px 12px;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }
`;

const PageSize = ({ pageSize, setPageSize, pageSizeOptions }) => {
  return (
    <SelectContainer>
      Show{" "}
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {pageSizeOptions.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>{" "}
      entries
    </SelectContainer>
  );
};

export default PageSize;
