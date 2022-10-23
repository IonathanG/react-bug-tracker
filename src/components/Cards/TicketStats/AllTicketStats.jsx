import React, { useMemo } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useAllTicketsStats from "../../../hooks/useAllTicketsStats";

const Container = styled.div`
  margin: 30px 0px 35px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-content: space-between;
  grid-gap: 40px;
`;

const Card = styled.div`
  height: 200px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Header = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const AllTicketStats = () => {
  const [
    openTicketCount,
    resolvedTicketCount,
    developmentTicketCount,
    urgentTicketCount,
  ] = useAllTicketsStats();

  const StatsData = useMemo(() => {
    return [
      {
        id: 0,
        title: "Open Tickets",
        value: openTicketCount / 100,
        color: "rgb(217,83,80)",
      },
      {
        id: 1,
        title: "Resolved Tickets",
        value: resolvedTicketCount / 100,
        color: "rgb(92,184,91)",
      },
      {
        id: 2,
        title: "Development Tickets",
        value: developmentTicketCount / 100,
        color: "rgb(90,192,222)",
      },
      {
        id: 3,
        title: "Urgent Tickets",
        value: urgentTicketCount / 100,
        color: "rgb(139,195,254)",
      },
    ];
  }, [
    openTicketCount,
    resolvedTicketCount,
    developmentTicketCount,
    urgentTicketCount,
  ]);

  return (
    <Container>
      {StatsData.map((item) => (
        <Card key={item.id}>
          <Header>{item.title}</Header>
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbar
              value={item.value}
              maxValue={1}
              text={`${item.value * 100}`}
              strokeWidth={6}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "26px",
                trailColor: "rgb(214, 214, 214)",
                pathColor: item.color,
                textColor: item.color,
              })}
            />
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default AllTicketStats;
