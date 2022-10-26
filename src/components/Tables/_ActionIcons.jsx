import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import useAuth from "../../hooks/useAuth";
import { ROLES } from "../../data/Roles";
import useArchiveTicket from "../../hooks/useArchiveTicket";
import useDeleteRetrieveTicket from "../../hooks/useDeleteRetrieveTicket";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import useArchiveProject from "../../hooks/useArchiveProject";
import useDeleteRetrieveProject from "../../hooks/useDeleteRetrieveProject";

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
  cursor: pointer;
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

const DeleteIcon = styled(DeleteOutlineOutlinedIcon)`
  cursor: pointer;
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

const RetrieveIcon = styled(ReplyOutlinedIcon)`
  cursor: pointer;
  transform: scale(1.25);
  color: ${({ theme }) => theme.pale_Blue};
  border: 1px solid ${({ theme }) => theme.pale_Blue};
  border-radius: 3px;
  padding: 4px;

  transition: 0.15s ease !important;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.pale_Blue};
  }
`;

const ActionIcons = ({ links, typeProject }) => {
  const { auth } = useAuth();
  const [ArchiveTicket] = useArchiveTicket();
  const [ArchiveProject] = useArchiveProject();

  const [RetrieveTicket, DeleteTicket] = useDeleteRetrieveTicket();
  const [RetrieveProject, DeleteProject] = useDeleteRetrieveProject();

  // Handle click on archive button => ticket or project to archive
  const handleArchive = (data) => {
    if (data.type === "ticket") {
      ArchiveTicket(data.projectID, data.ticketID);
    } else if (data.type === "project") {
      ArchiveProject(data.projectID);
    }
  };

  // Handle click on archive button => ticket or project to delete
  const handleDelete = (data) => {
    if (data.type === "ticket") {
      DeleteTicket(data.projectID, data.ticketID);
    } else if (data.type === "project") {
      DeleteProject(data.projectID);
    }
  };

  // Handle click on archive button => ticket or project to retrieve
  const handleRetrieve = (data) => {
    if (data.type === "ticket") {
      RetrieveTicket(data.projectID, data.ticketID);
    } else if (data.type === "project") {
      RetrieveProject(data.projectID);
    }
  };

  return (
    <Container>
      <Link to={links.view}>
        <ViewIcon />
      </Link>

      {/* Only showing Edit and Archive Options to Admin and Manager */}
      {/* Only showing Edit Option to Developer ONLY for TICKETS */}
      {/* Not showing Edit and Archive for already Archived Tickets and Projects */}
      {!links.archive.isArchived &&
        (auth?.roles?.includes(ROLES.Admin) ||
          auth?.roles?.includes(ROLES.Manager) ||
          (auth?.roles?.includes(ROLES.Developer) && !typeProject)) && (
          <>
            <Link to={links.edit}>
              <EditIcon />
            </Link>

            {!links.archive.isArchived &&
              (auth?.roles?.includes(ROLES.Admin) ||
                auth?.roles?.includes(ROLES.Manager)) && (
                <ArchiveIcon onClick={() => handleArchive(links.archive)} />
              )}
          </>
        )}

      {/* For Archived Tickets and Projects Only Showing Retrieve and Delete to Admin and Manager */}
      {links.archive.isArchived &&
        (auth?.roles?.includes(ROLES.Admin) ||
          auth?.roles?.includes(ROLES.Manager)) && (
          <>
            <RetrieveIcon onClick={() => handleRetrieve(links.archive)} />
            <DeleteIcon onClick={() => handleDelete(links.archive)} />
          </>
        )}
    </Container>
  );
};

export default ActionIcons;
