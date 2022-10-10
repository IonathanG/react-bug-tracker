import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 38px;
`;

const HistoryContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ItemWrap = styled.div`
  padding: 20px 0px;
`;

const Divider = styled.div`
  height: 100%;
  width: 1px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.background_Modal};
`;

const BulletTime = styled(RadioButtonCheckedIcon)`
  position: absolute;
  left: -42.5px;
  z-index: 20;
  transform: scale(0.7);
  color: ${({ theme }) => theme.background_ButtonBasic_Hover};
`;

const HistoryItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  font-weight: 400;

  div:nth-child(2) {
    padding: 5px 0px;
    color: ${({ theme }) => theme.color_SubNavItem};
  }
  div:nth-child(3) {
    font-size: 20px;
    font-weight: 500;
  }
  div:nth-child(4) {
    span {
      cursor: pointer;
      color: ${({ theme }) => theme.background_ButtonBasic};

      &:hover {
        color: ${({ theme }) => theme.background_ButtonBasic_Hover};
      }
    }
  }
`;

const TicketDetailsHistoryCard = ({ ticket = null }) => {
  const users = useSelector((state) => state.users.Users);

  return (
    <CardContainer>
      <Title>Ticket History</Title>

      {ticket?.history.length > 0 && (
        <HistoryContainer>
          <Divider />
          <div>
            {ticket.history.map((item, index) => (
              <ItemWrap key={index}>
                <HistoryItem>
                  <BulletTime />
                  <div>{item.date}</div>
                  <div>{item.title}</div>
                  <div>
                    By:{" "}
                    <Link to={`/MemberProfile/${users[item.author]?.user_id}`}>
                      <span>{users[item.author]?.user_name}</span>
                    </Link>
                  </div>
                  <div>{item.detail}</div>
                </HistoryItem>
              </ItemWrap>
            ))}
          </div>
        </HistoryContainer>
      )}
    </CardContainer>
  );
};

export default TicketDetailsHistoryCard;
