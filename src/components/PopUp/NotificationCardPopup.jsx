import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { device } from "../../shared/breakpoints";
import useInbox from "../../hooks/useInbox";

const ContainerPopUp = styled.div`
  display: ${(props) => (props.showPopUp ? "block" : "none")};

  position: absolute;
  right: 120px;
  top: 55px;

  width: 400px;
  height: fit-content;
  padding: 15px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_PopUp};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};

  @media ${device.phone} {
    width: 95%;
    left: 2.5%;
  }
`;

const ListPopUp = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  letter-spacing: 0.4px;

  p {
    color: ${({ theme }) => theme.color_ButtonBasic};
    opacity: 0.8;
  }
`;

const ItemPopUp = styled.li`
  cursor: pointer;
`;

const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.color_SubNavItem};
  transition: 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color_ButtonBasic};
  }
`;

const Icon = styled(SellOutlinedIcon)`
  transform: rotate(90deg);
  color: ${({ theme }) => theme.color_Cyan};
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const ItemInfo = styled.div`
  font-weight: 400;
  font-size: 13px;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.color_Cyan};
  opacity: 0.8;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const NotificationCardPopUp = ({ setShowPopup, showPopUp }) => {
  const [messages] = useInbox();

  return (
    <ContainerPopUp showPopUp={showPopUp}>
      <ListPopUp>
        {messages?.map((item) => (
          <ItemPopUp key={item.id}>
            <div onClick={() => setShowPopup(false)}>
              <ItemLink to={`/Inbox`}>
                <Icon />
                <ItemWrap>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemInfo>{item.date}</ItemInfo>
                </ItemWrap>
              </ItemLink>
            </div>
          </ItemPopUp>
        ))}
        {messages?.length === 0 && <p>No new notification</p>}
      </ListPopUp>
      <div
        style={{ margin: "25px 0px 0px 0px" }}
        onClick={() => setShowPopup(false)}
      >
        <FooterLink to={"/Inbox"}>See all notifications</FooterLink>
      </div>
    </ContainerPopUp>
  );
};

export default NotificationCardPopUp;
