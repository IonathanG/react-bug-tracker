import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LogoutIcon = styled(LogoutOutlinedIcon)`
  margin-left: 20px;
  opacity: 0.5;
  cursor: pointer;
`;

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return <LogoutIcon onClick={() => logout()}></LogoutIcon>;
};

export default Logout;
