import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../features/menuSlice";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import useMenuNav from "../../hooks/useMenuNav";

const MenuContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

const LinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 20px;

  height: 49px;
  color: ${({ theme }) => theme.color_NavItem};
  transition: 0.4s ease;

  border-left: ${(props) =>
    props.selected && `5px solid ${props.theme.color_Cyan}`};

  &:hover {
    background-color: ${({ theme }) => theme.background_active_NavItem};
  }

  &.active {
    background-color: ${({ theme }) => theme.background_active_NavItem};
    border-left: 5px solid ${({ theme }) => theme.color_Cyan};
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

const Name = styled.span`
  font-size: 15px;
`;

const ExpandContainer = styled.div`
  height: ${(props) => (props.selected ? "100%" : "49px")};
  transition: 0.7s ease;
`;

const ExpandIcon = styled(NavigateBeforeIcon)`
  margin-left: auto;
  opacity: 0.3;

  transform: ${(props) =>
    props.selected ? "rotate(-90deg) scale(0.8)" : "rotate(0deg) scale(0.8)"};
`;

const SubLinkContainer = styled.div`
  overflow: hidden;
  height: ${(props) => (props.selected ? "100%" : "0")};
  // transition: 0.5s ease;
  // position: ${(props) => (props.selected ? "relative" : "absolute")};
  // opacity: ${(props) => (props.selected ? "1" : "0")};

  a {
    padding: 12px 20px;
  }
`;

const SubName = styled.span`
  font-size: 14px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.color_SubNavItem};
`;

const NavigationMenu = () => {
  const MenuNav = useMenuNav();

  const dispatch = useDispatch();
  const [subNavActive, setSubNavActive] = useState(null);

  const handleClick = (id) => {
    // Close Navbar on Link 0 and 1
    if (id === 0 || id === 1) {
      dispatch(closeMenu());
    }

    // Switch => Only one sub menu opens at a time
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
            <LinkContainer to={`${item.link}`}>
              <Icon as={item.src} />
              <Name>{item.name}</Name>
            </LinkContainer>
          )}

          {/* Dropdown Navigation */}
          {item.sub_menu && (
            <ExpandContainer selected={subNavActive === item.id}>
              <LinkContainer as="div" selected={subNavActive === item.id}>
                <Icon as={item.src} />
                <Name>{item.name}</Name>
                <ExpandIcon selected={subNavActive === item.id} />
              </LinkContainer>

              {/* Sub Navigation Links */}
              <SubLinkContainer selected={subNavActive === item.id}>
                {item.sub_menu.map((subItem) => (
                  // Close Menu on SubLink Click
                  <div key={subItem.id} onClick={() => dispatch(closeMenu())}>
                    <LinkContainer to={`${subItem.link}`}>
                      <Icon
                        as={subItem.src}
                        color="disabled"
                        fontSize="Small"
                      />
                      <SubName>{subItem.name}</SubName>
                    </LinkContainer>
                  </div>
                ))}
              </SubLinkContainer>
            </ExpandContainer>
          )}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default NavigationMenu;
