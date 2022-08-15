import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitch = styled.div``;

const ThemeSwitchMenu = () => {
  const { toggleTheme } = useTheme();
  return (
    <ThemeSwitch>
      <button onClick={() => toggleTheme()}>Theme Switch</button>
    </ThemeSwitch>
  );
};

export default ThemeSwitchMenu;
