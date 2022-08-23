import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { device } from "../../shared/breakpoints";

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

  height: 65px;
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
`;

const EntryFlexContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  font-size: 13px;
`;

const EntryTitle = styled.li`
  border-bottom: 2px grey solid;
  flex: ${(props) => (props.styleFlex ? `${props.styleFlex}` : "1")};
  padding: 4px 0;
  font-weight: 600;

  font-size: 14px;

  /* @media ${device.phone} {
    font-size: 13px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  } */
  /* @media ${device.phone} {
    font-size: ${(props) =>
    props.styleTitle?.fontSize ? `${props.styleTitle.fontSize}` : "14px"};
    } */
`;

const EntryItem = styled.li`
  border-bottom: 0.5px grey solid;
  display: flex;
  align-items: center;
  flex: ${(props) => (props.styleFlex ? `${props.styleFlex}` : "1")};

  padding: ${(props) =>
    props.styleItem?.padding ? `${props.styleItem.padding}` : "4px 0px"};

  font-size: ${(props) =>
    props.styleItem?.fontSize ? `${props.styleItem.fontSize}` : "13px"};

  /* @media ${device.tablet} {
    font-size: 13px;
  } */

  .links {
    width: 100%;
    font-weight: 600;
    font-size: 12px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media ${device.phone} {
      font-size: 13px;
    }

    a {
      display: flex;
      align-items: center;

      margin: 2px 0;
      color: ${({ theme }) => theme.scrollbar_Color};
      cursor: pointer;
    }
  }
`;

const ArrowIcon = styled(KeyboardArrowRightIcon)`
  transform: scale(0.8);
`;

const BlockTypeData = ({
  Styles,
  HeaderText,
  ListCategories,
  ListData,
  Links,
}) => {
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
        <EntryFlexContainer>
          {ListCategories.map((item, index) => (
            <EntryTitle
              key={index}
              styleTitle={Styles.EntryTitle}
              styleFlex={Styles.EntryFlex[index]}
            >
              {item}
            </EntryTitle>
          ))}
        </EntryFlexContainer>

        {/* ----- Data ----- */}
        {ListData.map((item, itemIndex) => (
          // For each Unique Data Entry
          <EntryFlexContainer key={itemIndex}>
            {/* - Display Each Entry (Object) on one line - */}
            {/* - Number of EntryItem per line must match number of EntryTitle - */}
            {Object.values(item).map((entry, entryIndex) => {
              return (
                <EntryItem
                  key={entryIndex}
                  styleItem={Styles.EntryItem}
                  styleFlex={Styles.EntryFlex[entryIndex]}
                >
                  {entry}
                </EntryItem>
              );
            })}
            {/* ----- If Links are present in the list ----- */}
            {Links && (
              <EntryItem
                styleItem={Styles.EntryItem}
                styleFlex={Styles.EntryFlex[Object.keys(item).length]}
              >
                <div className="links">
                  {Links.map((item, index) => (
                    <Link to={`/${item.route}/${itemIndex}`} key={index}>
                      {item.title}
                      <ArrowIcon />
                    </Link>
                  ))}
                </div>
              </EntryItem>
            )}
          </EntryFlexContainer>
        ))}
      </EntriesContainer>
    </Block>
  );
};

export default BlockTypeData;
