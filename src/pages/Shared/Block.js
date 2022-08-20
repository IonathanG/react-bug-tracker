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

export const Block_Header = styled.header`
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

export const Block_Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

export const Block_EntriesContainer = styled.div`
  //background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
`;

export const Block_EntryFlexList = styled.ul`
  //background-color: aqua;
  display: flex;
  flex-direction: row;
  width: 100%;

  //border-bottom: 1px solid rgba(25, 25, 25, 0.2);
  font-size: 13px;
`;

export const Block_EntryTitle = styled.li`
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px grey solid;
  padding: 4px 0;
`;

export const Block_EntryItem = styled.li`
  font-size: 13px;
  border-bottom: 0.5px grey solid;
  padding: 8px 0;
`;
