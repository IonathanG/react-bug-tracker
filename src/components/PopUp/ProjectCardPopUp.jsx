import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROLES } from "../../data/Roles";
import useAuth from "../../hooks/useAuth";

const ContainerPopUp = styled.div`
  display: ${(props) => (props.showPopUp ? "block" : "none")};

  position: absolute;
  right: 0px;
  top: 15px;

  width: 125px;
  height: fit-content;
  padding: 15px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_PopUp};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const ListPopUp = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  letter-spacing: 0.4px;
`;

const ItemPopUp = styled.li`
  cursor: pointer;
`;

const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color_SubNavItem};
  font-size: 14px;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.color_ButtonBasic};
  }
`;

const ProjectCardPopUp = ({ projectID, showPopUp }) => {
  const { auth } = useAuth();

  const menuPopUp = [
    { id: 1, name: "View", link: `/Projects/ProjectDetails/${projectID}` },
    { id: 2, name: "Edit", link: `/Projects/EditProject/${projectID}` },
    { id: 3, name: "Archive", link: "/" },
  ];
  return (
    <ContainerPopUp showPopUp={showPopUp}>
      {/* Only showing Edit and Archive Options to Admin and Manager */}
      <ListPopUp>
        {menuPopUp
          .filter((item) => {
            if (
              !(
                auth?.roles?.includes(ROLES.Admin) ||
                auth?.roles?.includes(ROLES.Manager)
              )
            ) {
              return item.id === 1;
            } else return item;
          })
          .map((item) => (
            <ItemPopUp key={item.id}>
              <ItemLink to={item.link}>{item.name}</ItemLink>
            </ItemPopUp>
          ))}
      </ListPopUp>
    </ContainerPopUp>
  );
};

export default ProjectCardPopUp;
