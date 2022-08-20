import styled from "styled-components";

export const Block = styled.div`
  //background-color: ${({ theme }) => theme.block_Background};
  background-color: ${({ theme }) => theme.navbar_Background};
  box-shadow: ${({ theme }) => theme.navbar_Shadow};

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 12px;
  border-radius: 6px;
`;

export const BlockHeader = styled.header`
  //background-color: ${({ theme }) => theme.button_Color};
  background-color: rgba(30, 30, 30, 0.3);
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
  color: white;
  letter-spacing: 0.3px;
  padding: 10px;
  margin-top: -42px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  span:nth-child(1) {
    font-size: 15px;
  }
  span:nth-child(2) {
    font-size: 13px;
    margin-left: 10px;
  }
`;

export const BlockOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

export const BlockListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 100%;
`;

export const BlockCategoryTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px grey solid;
  padding-bottom: 4px;
`;

export const BlockCategoryContainer = styled.ul`
  font-size: 13px;
`;

export const BlockCategoryItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid rgba(25, 25, 25, 0.2);
`;
