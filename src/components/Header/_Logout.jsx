import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import styled from "styled-components";

const LogoutIcon = styled(LogoutOutlinedIcon)`
  margin-left: 20px;
  opacity: 0.5;
  cursor: pointer;
`;

const Logout = () => {
  return <LogoutIcon></LogoutIcon>;
};

export default Logout;
