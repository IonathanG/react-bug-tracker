import React from "react";
import styled from "styled-components";
import { styled as MUI_Styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const StyledBadge = MUI_Styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 2,
    border: "none",
    padding: "0 4px",
    //border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const BadgeContainer = styled(StyledBadge)`
  cursor: pointer;
  opacity: 0.8;
`;

const Notification = () => {
  const NotificationIndex = 0;

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
