import React, { useMemo } from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import CodeIcon from "@mui/icons-material/Code";
import { useSelector } from "react-redux";

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

const DataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconWrap = styled.div`
  background-color: ${({ theme }) => theme.background_MainSection};
  padding: 12px;
  border-radius: 6px;
  display: grid;
  place-items: center;
`;

const Icon = styled.div`
  transform: scale(1.2);
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;

  span:nth-child(2) {
    font-weight: 700;
    font-size: 20px;
  }
`;

const Divider = styled.div`
  margin-top: 18px;
  height: 0.6px;
  width: 100%;
  background-color: ${({ theme }) => theme.background_Modal};
`;

const GeneralInfoCard = () => {
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);

  // total count of users
  const userCount = useMemo(() => {
    return Object.values(users).length;
  }, [users]);

  // total count of dev
  const devCount = useMemo(() => {
    let count = 0;
    Object.values(users).forEach((user) => {
      if (user.role === "Developer") count++;
    });
    return count;
  }, [users]);

  // total count of tickets in development status
  const ticketDevelopment = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.status === "Development") count++;
      });
    });
    return count;
  }, [projects]);

  const CardItems = useMemo(() => {
    return [
      {
        id: 0,
        src: PersonIcon,
        count: 1,
        label: "New Users",
      },
      {
        id: 1,
        src: SupervisorAccountIcon,
        count: userCount,
        label: "Total Users",
      },
      {
        id: 2,
        src: BookOnlineIcon,
        count: ticketDevelopment,
        label: "Tickets in Development",
      },
      {
        id: 3,
        src: CodeIcon,
        count: devCount,
        label: "Total Developers",
      },
    ];
  }, [userCount, ticketDevelopment, devCount]);

  return (
    <Card>
      {CardItems.map((item) => (
        <div key={item.id}>
          <DataItem>
            <IconWrap>
              <Icon as={item.src} />
            </IconWrap>
            <InfoWrap>
              <span>{item.label}</span>
              <span>{item.count}</span>
            </InfoWrap>
          </DataItem>
          {item.id !== CardItems.length - 1 && <Divider />}
        </div>
      ))}
    </Card>
  );
};

export default GeneralInfoCard;
