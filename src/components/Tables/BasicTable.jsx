import React, { useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.background_Table};
  padding: 15px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow_Table};
`;

const TableHead = styled.thead`
  text-align: left;
`;

const TableBody = styled.tbody`
  text-align: left;
`;

const BasicTable = ({ COLUMNS, MOCK_DATA }) => {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => MOCK_DATA, [MOCK_DATA]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </TableHead>

      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BasicTable;
