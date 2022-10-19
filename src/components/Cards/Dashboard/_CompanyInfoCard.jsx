import React, { useMemo } from "react";
import styled from "styled-components";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FolderIcon from "@mui/icons-material/Folder";
import TagInfo from "../../Tags/Tag_Info";

const Card = styled.div`
  height: 350px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  padding: 25px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: ${({ theme }) => theme.color_SubNavItem};

  span:nth-child(1) {
    font-weight: 600;
    font-size: 15px;
  }
  span:nth-child(2) {
    font-size: 13px;
  }
`;

const DataItem = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.div`
  transform: scale(1.05);
  color: ${({ theme }) => theme.color_SubNavItem};
`;

const Divider = styled.div`
  margin-top: 18px;
  height: 0.6px;
  width: 100%;
  background-color: ${({ theme }) => theme.background_Modal};
`;

const CompanyInfoCard = ({ userCount, projectCount, ticketCount }) => {
  const CardItems = useMemo(() => {
    return [
      {
        id: 0,
        src: SupervisorAccountIcon,
        count: userCount,
        label: "Members",
        color: "Green",
      },
      {
        id: 1,
        src: FolderIcon,
        count: projectCount,
        label: "Projects",
        color: "Blue",
      },
      {
        id: 2,
        src: BookOnlineIcon,
        count: ticketCount,
        label: "Tickets",
        color: "Cyan",
      },
      {
        id: 3,
        src: NotificationsOutlinedIcon,
        count: 0,
        label: "Notifications",
        color: "Red",
      },
    ];
  }, [projectCount, ticketCount, userCount]);

  return (
    <Card>
      <Title>
        <span>Company Data</span>
        <span>Bug Tracker</span>
      </Title>

      {CardItems.map((item) => (
        <div key={item.id}>
          <DataItem>
            <LabelWrap>
              <Icon as={item.src} />
              <span>{item.label}</span>
            </LabelWrap>

            <span>
              {" "}
              <TagInfo tagText={item.count} tagColor={item.color} />
            </span>
          </DataItem>
          {item.id !== CardItems.length - 1 && <Divider />}
        </div>
      ))}
    </Card>
  );
};

export default CompanyInfoCard;
