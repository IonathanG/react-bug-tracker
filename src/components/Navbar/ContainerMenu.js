import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";

const MenuContainer = styled.ul`
  //background-color: rgba(249, 44, 140, 0.2);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuItem = styled.li`
  //background-color: rgba(149, 144, 140, 0.2);
  width: 100%;
  padding: 0px 20px;
  margin: 25px 0px;
  cursor: pointer;
`;

const NavItem = styled(NavLink)`
  display: flex;
  gap: 15px;

  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.main_Font_Color};

  @media ${device.phone} {
    font-size: 16px;
  }

  &.active {
    color: ${({ theme }) => theme.active_Link};
  }
`;

const MenuIcon = styled.img.attrs((props) => ({
  src: props.theme.Menu_Icon_Source[props.src],
}))`
  width: 18px;
  height: 18px;
  opacity: 0.8;
  transition: 0.3s ease;
`;

const ContainerMenu = ({ setShowMenu }) => {
  const dashboardMenu = [
    { name: "Dashboard Home", src: "dashboard_Home", link: "/" },
    {
      name: "Manage Role Assignment",
      src: "manage_Role",
      link: "/manage-role",
    },
    {
      name: "Manage Project Users",
      src: "manage_Users",
      link: "/manage-project",
    },
    { name: "My Projects", src: "projects", link: "/projects" },
    { name: "My Tickets", src: "tickets", link: "/tickets" },
    { name: "User Profile", src: "profile", link: "/profile" },
  ];

  return (
    <MenuContainer>
      {dashboardMenu.map((item, index) => (
        <MenuItem key={index} onClick={() => setShowMenu(false)}>
          <NavItem to={`${item.link}`}>
            <MenuIcon src={item.src} alt="menu-icon" /> <div>{item.name}</div>
          </NavItem>
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default ContainerMenu;
