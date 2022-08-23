import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Divider } from "../../components/Divider/Divider";

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //gap: 20px;
  gap: 0px;

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
  margin-top: -48px;
  padding: 10px;
  border-radius: 6px;

  letter-spacing: 0.3px;
  color: white;

  background-color: rgba(30, 30, 30, 0.45);
  box-shadow: ${({ theme }) => theme.navbar_Shadow};

  span:nth-child(1) {
    font-size: 16px;
  }
  span:nth-child(2) {
    display: flex;
    gap: 10px;
    margin-left: 10px;
    font-size: 14px;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    text-decoration: underline;
    color: white;
  }
`;

const EntryFlexContainer = styled.ul`
  display: flex;
  flex-direction: row;
  //justify-content: flex-start;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  font-size: 13px;
`;

const EntryItem = styled.li`
  flex: ${(props) => (props.styleFlex ? `${props.styleFlex}` : "1")};
  display: flex;
  flex-direction: column;

  border-bottom: none;
  font-weight: 600;
  text-transform: capitalize;

  padding: ${(props) =>
    props.styleItem?.padding ? `${props.styleItem.padding}` : "0px 20px"};

  font-size: ${(props) =>
    props.styleItem?.fontSize ? `${props.styleItem.fontSize}` : "14px"};

  span {
    padding: 10px 0 0 5px;
    font-size: 13px;
    font-weight: normal;
    text-transform: none;
  }
`;

const ArrowIcon = styled(KeyboardArrowRightIcon)`
  transform: scale(0.8);
`;

const BlockTypeInfo = ({ Styles, HeaderText, Links, ListItem }) => {
  return (
    <Block>
      {/* ----- Header ----- */}
      <Header>
        <span>{HeaderText.mainText}</span>
        <span>
          {Links.map((item, index) => (
            <Link to={`/${item.route}`} key={index}>
              {item.title}
              <ArrowIcon />
            </Link>
          ))}
        </span>
      </Header>

      {/* ----- List Data Displayed ----- */}
      {ListItem.map((item, indexItem) => (
        // Container to include divider
        <div key={indexItem}>
          {/* Single Line */}
          <EntryFlexContainer>
            {item.map((entry, indexEntry) => (
              //    Single Item
              <EntryItem
                key={indexEntry}
                styleFlex={Styles.EntryFlex[indexEntry]}
                styleItem={Styles.EntryItem}
              >
                {entry.name}
                <span>{entry.description}</span>
              </EntryItem>
            ))}
          </EntryFlexContainer>
          {indexItem < ListItem.length - 1 && <Divider />}
        </div>
      ))}
    </Block>
  );
};

export default BlockTypeInfo;
