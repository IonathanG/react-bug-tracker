import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../shared/breakpoints";

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.navbar_Background};
  backdrop-filter: blur(10px);

  flex: 2;
  max-width: 280px;
  height: 100%;
  min-height: 100vh;

  display: grid;
  place-items: center;

  position: absolute;
  top: 0;
  left: ${(props) => (props.showMenu ? "0" : "-1000px")};
  transition: 0.3s ease-out;
  z-index: 15;

  @media ${device.phone} {
    position: relative;
    left: 0;
  }
`;

const NavbarContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
`;

const Logo = styled.div`
  //cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-weight: 600;

  img {
    width: 30px;
    height: 30px;
  }
`;

const MenuHamburger = styled.div`
  z-index: 20;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 10px;

  @media ${device.phone} {
    display: none;
  }

  div:nth-child(2) {
    width: 25px;
  }

  div:nth-child(3) {
    width: 20px;
  }

  &:hover {
    div:nth-child(2),
    div:nth-child(3) {
      width: 30px;
    }
  }
`;

const Slice = styled.div`
  display: block;
  height: 2px;
  width: 30px;
  background: ${({ theme }) => theme.hamburger_Theme};
  margin: 8px 0;
  transition: all 0.7s ease;
`;

const TopSlice = styled(Slice)`
  transform: ${(props) => props.showMenu && "translateY(10px) rotateZ(405deg)"};
  background-color: ${(props) =>
    props.showMenu && props.theme.active_HamburgerColor};
  width: ${(props) => props.showMenu && "30px"} !important;
`;

const BottomSlice = styled(Slice)`
  transform: ${(props) =>
    props.showMenu && "translateY(-10px) rotateZ(-405deg)"};
  background-color: ${(props) =>
    props.showMenu && props.theme.active_HamburgerColor};
  width: ${(props) => props.showMenu && "30px"} !important;
`;

const MiddleSlice = styled(Slice)`
  width: ${(props) => props.showMenu && "0px"} !important;
`;

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

const LayerBackgroundDim = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  left: 0;
  top: 0;
  z-index: 10;
  filter: brightness(65%);
`;

const Navbar = () => {
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

  const [showMenu, setShowMenu] = useState(false);

  const btnRef = useRef();
  const containerRef = useRef();
  const menuRef = useRef();

  // open/close side menu when hamburger is clicked
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  // disable scrolling on the body when menu is open
  useEffect(() => {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [showMenu]);

  // Close Menu if window is resized >= phone size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 780) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close menu if click outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !btnRef.current.contains(e.target) &&
        !containerRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      )
        setShowMenu(false);
    };
    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, []);

  return (
    <>
      <MenuHamburger showMenu={showMenu} onClick={handleMenu} ref={btnRef}>
        <TopSlice showMenu={showMenu}></TopSlice>
        <MiddleSlice showMenu={showMenu}></MiddleSlice>
        <BottomSlice showMenu={showMenu}></BottomSlice>
      </MenuHamburger>
      <NavbarContainer showMenu={showMenu}>
        <NavbarContent ref={containerRef}>
          <Logo>
            <img src="/icons/Logo.svg" alt="logo" /> Bug_Tracker
          </Logo>
          <MenuContainer ref={menuRef}>
            {dashboardMenu.map((item, index) => (
              <MenuItem key={index} onClick={() => setShowMenu(false)}>
                <NavItem to={`${item.link}`}>
                  <MenuIcon src={item.src} alt="menu-icon" />{" "}
                  <div>{item.name}</div>
                </NavItem>
              </MenuItem>
            ))}
          </MenuContainer>
          <div>Theme Switch</div>
        </NavbarContent>
      </NavbarContainer>
      {showMenu && <LayerBackgroundDim></LayerBackgroundDim>}
    </>
  );
};

export default Navbar;
