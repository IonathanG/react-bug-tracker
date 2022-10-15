import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import useAuth from "../../hooks/useAuth";
import { ROLES } from "../../data/Roles";

const Container = styled.div`
  display: flex;
  gap: 12px;
`;

const ViewIcon = styled(RemoveRedEyeOutlinedIcon)`
  transform: scale(1.25);
  color: ${({ theme }) => theme.color_Cyan};
  border: 1px solid ${({ theme }) => theme.color_Cyan};
  border-radius: 3px;
  padding: 4px;
  transition: 0.15s ease !important;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.color_Cyan};
  }
`;

const EditIcon = styled(ModeEditOutlineOutlinedIcon)`
  transform: scale(1.25);
  color: ${({ theme }) => theme.color_Greyish};
  border: 1px solid ${({ theme }) => theme.color_Greyish};
  border-radius: 3px;
  padding: 4px;

  transition: 0.15s ease !important;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.color_Greyish};
  }
`;

const ArchiveIcon = styled(ClassOutlinedIcon)`
  transform: scale(1.25);
  color: ${({ theme }) => theme.color_Red};
  border: 1px solid ${({ theme }) => theme.color_Red};
  border-radius: 3px;
  padding: 4px;

  transition: 0.15s ease !important;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.color_Red};
  }
`;

const ActionIcons = ({ links, typeProject }) => {
  const { auth } = useAuth();

  return (
    <Container>
      <Link to={links.view}>
        <ViewIcon />
      </Link>

      {/* Only showing Edit and Archive Options to Admin and Manager */}
      {/* Only showing Edit Option to Developer ONLY for TICKETS */}
      {(auth?.roles?.includes(ROLES.Admin) ||
        auth?.roles?.includes(ROLES.Manager) ||
        (auth?.roles?.includes(ROLES.Developer) && !typeProject)) && (
        <>
          <Link to={links.edit}>
            <EditIcon />
          </Link>

          {(auth?.roles?.includes(ROLES.Admin) ||
            auth?.roles?.includes(ROLES.Manager)) && (
            <Link to={links.archive}>
              <ArchiveIcon />
            </Link>
          )}
        </>
      )}
    </Container>
  );
};

export default ActionIcons;
