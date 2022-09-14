import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import styled from "styled-components";
import GlobalFilter from "./_GlobalFilter";

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
  justify-content: space-between;
  align-items: center;
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

const TableHeadRow = styled.tr``;

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

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 0px 0px;
`;

const ChangePage = styled.span`
  display: flex;
  align-items: center;

  button {
    padding: 8.3px 12px;
    cursor: pointer;

    /* &:hover {
      background-color: ${({ theme }) => theme.pale_Blue};
    } */
  }

  button:first-child {
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button:last-child {
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const Button = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")} !important;
  border: 1px solid ${({ theme }) => theme.border_Button};
  background-color: ${({ theme }) => theme.color_ButtonBasic};
  color: ${(props) => !props.disabled && props.theme.color_Font_Main};

  &:hover {
    border: ${(props) =>
      !props.disabled && `1px solid ${props.theme.pale_Blue}`};
    background-color: ${(props) => !props.disabled && props.theme.pale_Blue};
    color: ${(props) => !props.disabled && props.theme.color_PageIndex};
  }
`;

const PageButton = styled.button`
  border: 1px solid
    ${(props) =>
      props.currentPage
        ? props.theme.background_PageIndex
        : props.theme.border_Button};
  background-color: ${(props) =>
    props.currentPage
      ? props.theme.background_PageIndex
      : props.theme.color_ButtonBasic};
  color: ${(props) => props.currentPage && props.theme.color_PageIndex};

  &:hover {
    border: ${(props) =>
      !props.currentPage && `1px solid ${props.theme.pale_Blue}`};
    background-color: ${(props) => !props.currentPage && props.theme.pale_Blue};
    color: ${(props) => !props.currentPage && props.theme.color_PageIndex};
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
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </TableTools>

      {/* Table Data => Head + Data */}
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableHeadRow {...headerGroup.getHeaderGroupProps()}>
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
            </TableHeadRow>
          ))}
        </TableHead>

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
      <Pagination>
        <span>
          Showing {pageIndex * pageSize + 1} to{" "}
          {pageIndex * pageSize + page.length} of {data.length} entries
        </span>

        <ChangePage>
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          {canPreviousPage && (
            <PageButton onClick={() => gotoPage(pageIndex - 1)}>
              {pageIndex}
            </PageButton>
          )}
          <PageButton currentPage={true}>{pageIndex + 1}</PageButton>
          {canNextPage && (
            <PageButton onClick={() => gotoPage(pageIndex + 1)}>
              {pageIndex + 2}
            </PageButton>
          )}
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </ChangePage>
      </Pagination>
    </TableContainer>
  );
};

export default BasicTable;
