import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
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

const PreviousButton = styled(Button)`
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const NextButton = styled(Button)`
  border-left: ${(props) =>
    props.showBorder ? `1px solid ${props.theme.border_Button}` : "none"};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
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

const Pagination = ({
  pageIndex,
  pageSize,
  page,
  previousPage,
  nextPage,
  gotoPage,
  data,
  canNextPage,
  canPreviousPage,
}) => {
  return (
    <PaginationContainer>
      <span>
        Showing {pageIndex * pageSize + (data.length > 0 && 1)} to{" "}
        {pageIndex * pageSize + page.length} of {data.length} entries
      </span>

      <ChangePage>
        <PreviousButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </PreviousButton>

        {data.length > 0 && (
          <div>
            {/* Only Showing the next and previous pages on larger screens */}
            {window.innerWidth >= 1010 && canPreviousPage && (
              <PageButton onClick={() => gotoPage(pageIndex - 1)}>
                {pageIndex}
              </PageButton>
            )}

            <PageButton currentPage={true}>{pageIndex + 1}</PageButton>

            {window.innerWidth >= 1010 && canNextPage && (
              <PageButton onClick={() => gotoPage(pageIndex + 1)}>
                {pageIndex + 2}
              </PageButton>
            )}
          </div>
        )}

        <NextButton
          showBorder={!data.length > 0}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </NextButton>
      </ChangePage>
    </PaginationContainer>
  );
};

export default Pagination;
