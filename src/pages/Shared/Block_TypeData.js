import React from "react";
import styled from "styled-components";

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 12px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.navbar_Background};
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: -42px;
  padding: 10px;
  border-radius: 6px;

  letter-spacing: 0.3px;
  color: white;

  background-color: rgba(30, 30, 30, 0.45);
  box-shadow: ${({ theme }) => theme.navbar_Shadow};

  span:nth-child(1) {
    font-size: 15px;
  }
  span:nth-child(2) {
    margin-left: 10px;
    font-size: 13px;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    text-decoration: underline;
    color: white;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

const EntriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  font-size: 14px;
  //background-color: beige;
`;

const EntryFlexList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  font-size: 13px;
  //background-color: aqua;
  li:nth-child(1),
  li:nth-child(3) {
    flex: 3;
  }
  li:nth-child(2) {
    flex: 5;
  }
`;

const EntryTitle = styled.li`
  padding: 4px 0;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px grey solid;
`;

const EntryItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props.style.padding ? `${props.style.padding}` : "4px 0px"};

  font-size: 13px;
  border-bottom: 0.5px grey solid;

  .links {
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      display: flex;
      align-items: center;

      margin: 2px 0;
      cursor: pointer;
      color: ${({ theme }) => theme.scrollbar_Color};
    }
  }
`;

const BlockTypeData = ({ Styles, HeaderText, ListCategories, ListData }) => {
  return (
    <Block>
      {/* ----- Header ----- */}
      <Header>
        <span>{HeaderText.mainText}</span>
        <span>{HeaderText.subText}</span>
      </Header>

      {/* ----- Options ----- */}
      {Styles.ShowOptions && (
        <Options>
          <div>Show X entries</div>
          <div>Search</div>
        </Options>
      )}

      {/* ----- MAIN LIST ----- */}
      <EntriesContainer>
        {/* ----- Category Titles ----- */}
        <EntryFlexList>
          {ListCategories.map((item, index) => (
            <EntryTitle key={index}>{item}</EntryTitle>
          ))}
        </EntryFlexList>

        {/* ----- Data ----- */}
        {ListData.map((item) => (
          // For each Unique Data Entry
          <EntryFlexList key={item.email}>
            {/* - Display Each Entry (Object) on one line - */}
            {/* - Number of EntryItem per line must match number of EntryTitle - */}
            {Object.values(item).map((entry, index) => {
              return (
                <EntryItem key={index} style={Styles.EntryItem}>
                  <span>{entry}</span>
                </EntryItem>
              );
            })}
          </EntryFlexList>
        ))}
      </EntriesContainer>
    </Block>
  );
};

export default BlockTypeData;
