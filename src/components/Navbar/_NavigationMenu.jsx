import React from "react";
import styled from "styled-components";
import { SideNavMenu } from "../../data/Data_SideNavMenu";
import { NavLink } from "react-router-dom";

const NavigationMenu = ({ setShowMenu }) => {
  return (
    <MenuContainer>
      {SideNavMenu.map((item) => (
        <MenuItem key={item.id} onClick={() => setShowMenu(false)}>
          <NavContainer to={`${item.link}`}>
            <ItemIcon src={item.src} alt="menu-icon" />{" "}
            <ItemName>{item.name}</ItemName>
          </NavContainer>
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default NavigationMenu;

const MenuContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MenuItem = styled.li`
  width: 100%;
  cursor: pointer;
`;

const NavContainer = styled(NavLink)`
  //background-color: #f5f5dca7;
  display: flex;
  padding: 20px;
  gap: 20px;

  color: ${({ theme }) => theme.color_NavItem};
  transition: 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.background_active_NavItem};
  }

  &.active {
    background-color: ${({ theme }) => theme.background_active_NavItem};
  }
`;

const ItemIcon = styled.img.attrs((props) => ({
  src: props.theme.SideNav_Icon[props.src],
}))`
  width: 18px;
  height: 18px;
  opacity: 0.8;
`;

const ItemName = styled.span`
  font-size: 15px;
`;
