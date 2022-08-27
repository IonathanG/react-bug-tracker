import React from "react";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import styled from "styled-components";

const SettingsIcon = styled(TuneSharpIcon)`
  cursor: pointer;
  opacity: 0.5;
`;

const Settings = () => {
  return <SettingsIcon></SettingsIcon>;
};

export default Settings;
