import React, { useState } from "react";
import styled from "styled-components";
import { styled as MUI_Styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationCardPopUp from "../PopUp/NotificationCardPopup";
import useInbox from "../../hooks/useInbox";

const StyledBadge = MUI_Styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 2,
    border: "none",
    padding: "0 4px",
    backgroundColor: "rgb(92,142,212)",
    //border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const BadgeContainer = styled(StyledBadge)`
  cursor: pointer;
  opacity: 0.8;
`;

const Notification = () => {
  const [messages] = useInbox();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <BadgeContainer
        badgeContent={messages?.length}
        color="secondary"
        overlap="rectangular"
      >
        <div onClick={() => setShowPopup(!showPopup)}>
          <NotificationsOutlinedIcon />
        </div>
      </BadgeContainer>
      <NotificationCardPopUp
        showPopUp={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  );
};

export default Notification;
