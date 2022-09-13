import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Table};
  box-shadow: ${({ theme }) => theme.boxShadow_Table};

  font-weight: 400;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  td,
  th {
    padding: 15px 5px;
  }

  th {
    border-bottom: 2px solid ${({ theme }) => theme.borderColor_Table};
  }

  td {
    border-top: 1px solid ${({ theme }) => theme.borderColor_Table};
  }
`;

const TableHead = styled.thead`
  font-weight: 700;
`;

const TableBody = styled.tbody`
  font-weight: 400;
`;

const TableRow = styled.tr``;

const TableTools = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px 15px 0px;
`;

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

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 10px 0px;
`;

const ChangePage = styled.span`
  display: flex;
  align-items: center;

  button,
  span {
    padding: 8px 12px;
  }

  button {
    border: 1px solid ${({ theme }) => theme.border_Input};
    background-color: ${({ theme }) => theme.color_ButtonBasic};
  }

  button:nth-child(1) {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button:nth-child(3) {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  span {
    background-color: ${({ theme }) => theme.background_ButtonBasic};
    color: ${({ theme }) => theme.color_ButtonBasic};
    border: 0.5px solid ${({ theme }) => theme.background_ButtonBasic};
  }
`;

const BasicTable = ({ COLUMNS, DATA }) => {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => DATA, [DATA]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <TableContainer>
      {/* Rows per page + Search Input */}
      <TableTools>
        <SelectContainer>
          Show{" "}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>{" "}
          entries
        </SelectContainer>
        <p>Input Here</p>
      </TableTools>

      {/* Table Data */}
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Table Pagination Infos + Change page */}
      <Pagination>
        <span>
          Showing {pageIndex * pageSize + 1} to{" "}
          {pageIndex * pageSize + page.length} of {data.length} entries
        </span>

        <ChangePage>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <span>{pageIndex + 1}</span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </ChangePage>
      </Pagination>
    </TableContainer>
  );
};

export default BasicTable;
