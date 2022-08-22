import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { styled as MUI_Styled } from "@mui/material/styles";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const StyledBadge = MUI_Styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 2,
    //border: `2px solid ${theme.palette.background.paper}`,
    border: "none",
    padding: "0 4px",
  },
}));

const BadgeContainer = styled(StyledBadge)`
  cursor: pointer;
  color: ${({ theme }) => theme.notification_Color};
`;

const Notification = () => {
  const NotificationIndex = 3;

  return (
    <BadgeContainer
      badgeContent={NotificationIndex}
      color="secondary"
      overlap="rectangular"
    >
      <NotificationsOutlinedIcon />
    </BadgeContainer>
  );
};

export default Notification;
