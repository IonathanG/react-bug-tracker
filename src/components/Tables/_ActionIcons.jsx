import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";

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

const ActionIcons = ({ links }) => {
  return (
    <Container>
      <Link to={links.view}>
        <ViewIcon />
      </Link>
      <Link to={links.edit}>
        <EditIcon />
      </Link>
      <Link to={links.archive}>
        <ArchiveIcon />
      </Link>
    </Container>
  );
};

export default ActionIcons;
