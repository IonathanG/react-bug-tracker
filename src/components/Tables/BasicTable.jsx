import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import styled from "styled-components";
import SearchFilter from "./_SearchFilter";
import Pagination from "./_Pagination";
import PageSize from "./_PageSize";

const TableContainer = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Table};
  box-shadow: ${({ theme }) => theme.boxShadow_Table};
  font-weight: 400;
  font-size: 14px;
`;

const TableTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 15px 0px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  td,
  th {
    padding: 20px 5px;
  }

  th {
    border-bottom: 2px solid ${({ theme }) => theme.borderColor_Table};
    cursor: pointer;
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

const ArrowsContainer = styled.span`
  font-size: 13px;
  margin: 0px 15px;
`;

const Arrow = styled.span`
  color: ${(props) =>
    props.isSorted
      ? props.isSortedDesc
        ? props.theme.color_Font_Main
        : props.theme.color_Font_Arrow
      : props.theme.color_Font_Arrow};
`;

const TableBodyRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.hover_Table};
  }
`;

const BasicTable = ({ COLUMNS, DATA }) => {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => DATA, [DATA]);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "project_name",
        desc: false,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    setPageSize,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      disableSortRemove: true,
      defaultCanSort: true,
      initialState: {
        sortBy: defaultSortBy,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;
  const pageSizeOptions = [2, 5, 10, 25, 50, 100];

  return (
    <TableContainer>
      {/* Rows per page + Search Input */}
      <TableTools>
        {/* Set Page Size */}
        <PageSize
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageSizeOptions={pageSizeOptions}
        />
        {/* Search Filter input */}
        <SearchFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </TableTools>

      {/* Table Data => Header + Data */}
      <Table {...getTableProps()}>
        {/* -- Header Data -- */}
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}

                  <ArrowsContainer>
                    <Arrow
                      isSorted={column.isSorted}
                      isSortedDesc={!column.isSortedDesc}
                    >
                      ↑
                    </Arrow>
                    <Arrow
                      isSorted={column.isSorted}
                      isSortedDesc={column.isSortedDesc}
                    >
                      ↓
                    </Arrow>
                  </ArrowsContainer>
                </th>
              ))}
            </tr>
          ))}
        </TableHead>

        {/* -- Body Data -- */}
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableBodyRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </TableBodyRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Table Pagination Infos + Change page */}
      <Pagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        page={page}
        previousPage={previousPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        data={data}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
      />
    </TableContainer>
  );
};

export default BasicTable;
