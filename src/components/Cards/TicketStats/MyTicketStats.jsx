import React, { useMemo } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useMyTicketsStats from "../../../hooks/useMyTicketsStats";

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

  p {
    padding: 27px 0px;
    font-weight: 500;
    font-size: 56px;
  }
`;

const Header = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const MyTicketStats = () => {
  const [
    submittedTicketCount,
    assignedTicketCount,
    pendingTicket,
    resolvedTicket,
  ] = useMyTicketsStats();

  const StatsData = useMemo(() => {
    return [
      {
        id: 0,
        title: "Submitted Tickets",
        value: submittedTicketCount,
        useGraph: false,
      },
      {
        id: 1,
        title: "Assigned Tickets",
        value: assignedTicketCount,
        useGraph: false,
      },
      {
        id: 2,
        title: "Pending Tickets %",
        value: pendingTicket / 100,
        useGraph: true,
        color: "rgb(90,192,222)",
      },
      {
        id: 3,
        title: "Resolved Tickets %",
        value: resolvedTicket / 100,
        useGraph: true,
        color: "rgb(139,195,254)",
      },
    ];
  }, [
    submittedTicketCount,
    assignedTicketCount,
    pendingTicket,
    resolvedTicket,
  ]);

  return (
    <Container>
      {StatsData.map((item) => (
        <Card key={item.id}>
          <Header>{item.title}</Header>
          {item.useGraph ? (
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
          ) : (
            <p>{item.value}</p>
          )}
        </Card>
      ))}
    </Container>
  );
};

export default MyTicketStats;
