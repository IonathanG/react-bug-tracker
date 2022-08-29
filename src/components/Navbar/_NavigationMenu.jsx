import React, { useState } from "react";
import styled from "styled-components";
import { MenuNav } from "../../data/Data_MenuNav";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../features/menuSlice";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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
  padding: 12px 20px;
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

const ExpandIcon = styled(NavigateBeforeIcon)`
  margin-left: auto;
  opacity: 0.3;
  transition: all 1s ease;

  transform: ${(props) =>
    props.selected ? "rotate(-90deg) scale(0.8)" : "rotate(0deg) scale(0.8)"};
`;

const SubNavContainer = styled.div`
  overflow: hidden;
  transition: 0.3s ease-out;
  height: ${(props) => (props.selected ? "100%" : "0")};

  a {
    padding: 12px 20px;
  }
`;

const SubItemName = styled.span`
  font-size: 14px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.color_SubNavItem};
`;

const NavigationMenu = () => {
  const dispatch = useDispatch();
  const [subNavActive, setSubNavActive] = useState(null);

  const handleClick = (id) => {
    if (id === 0 || id === 1) {
      dispatch(closeMenu());
    }

    if (subNavActive === id) {
      setSubNavActive(null);
    } else {
      setSubNavActive(id);
    }
  };

  return (
    <MenuContainer>
      {MenuNav.map((item) => (
        <MenuItem key={item.id} onClick={() => handleClick(item.id)}>
          {/* Simple Navigation Links */}
          {item.link && (
            <NavContainer to={`${item.link}`}>
              <Icon as={item.src} />
              <ItemName>{item.name}</ItemName>
            </NavContainer>
          )}

          {/* Dropdown Navigation */}
          {item.sub_menu && (
            <>
              <NavContainer as="div">
                <Icon as={item.src} />
                <ItemName>{item.name}</ItemName>
                <ExpandIcon selected={subNavActive === item.id} />
              </NavContainer>

              {/* Sub Navigation Links */}
              <SubNavContainer selected={subNavActive === item.id}>
                {item.sub_menu.map((subItem) => (
                  <div key={subItem.id}>
                    <NavContainer to={`${subItem.link}`}>
                      <Icon
                        as={subItem.src}
                        color="disabled"
                        fontSize="Small"
                      />
                      <SubItemName>{subItem.name}</SubItemName>
                    </NavContainer>
                  </div>
                ))}
              </SubNavContainer>
            </>
          )}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default NavigationMenu;
