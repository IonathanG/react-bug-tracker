import React from "react";
import styled from "styled-components";
import { MenuNav } from "../../data/Data_MenuNav";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../features/menuSlice";

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
  display: flex;
  align-items: center;
  padding: 15px 20px;
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

const Icon = styled.svg`
  width: 16px;
  height: 16px;

  display: grid;
  place-items: center;

  opacity: 0.8;
  color: ${({ theme }) => theme.color_Cyan};
`;

const ItemName = styled.span`
  font-size: 15px;
`;

const NavigationMenu = () => {
  const dispatch = useDispatch();

  return (
    <MenuContainer>
      {MenuNav.map((item) => (
        <MenuItem key={item.id} onClick={() => dispatch(closeMenu())}>
          <NavContainer to={`${item.link}`}>
            <Icon as={item.src} />
            <ItemName>{item.name}</ItemName>
          </NavContainer>
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default NavigationMenu;
