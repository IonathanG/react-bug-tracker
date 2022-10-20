import React, { useMemo } from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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

const StatsChart = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-top: 10px;
  font-weight: 500;
  font-size: 13px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;

    span:nth-child(2) {
      font-weight: 700;
    }
  }
`;

const ProjectPriorityCard = ({ projectCount, projectPriorities }) => {
  const priorityStats = useMemo(() => {
    return {
      urgent: Math.round((projectPriorities.urgent / projectCount) * 100),
      high: Math.round((projectPriorities.high / projectCount) * 100),
      medium: Math.round((projectPriorities.medium / projectCount) * 100),
      low: Math.round((projectPriorities.low / projectCount) * 100),
    };
  }, [projectPriorities, projectCount]);

  const options = {
    maintainAspectRatio: true,
    responsive: true,

    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 11,
          },
        },
      },
    },
  };

  const data = {
    labels: ["Urgent", "High", "Medium", "Low"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(220, 52, 69, 0.7)",
          "rgba(244, 173, 2, 0.7)",
          "rgba(92, 142, 212, 0.7)",
          "rgba(156, 156, 156, 0.7)",
        ],
        borderColor: [
          "rgb(220,52,68)",
          "rgb(244,173,2)",
          "rgb(92,142,212)",
          "rgb(156,156,156)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card>
      <Title>
        <span>Priority Projects</span>
        <span>Project Priorities</span>
      </Title>

      <StatsChart>
        <div>
          <span>Urgent</span>
          <span>{priorityStats.urgent}%</span>
        </div>
        <div>
          <span>High</span>
          <span>{priorityStats.high}%</span>
        </div>
        <div>
          <span>Medium</span>
          <span>{priorityStats.medium}%</span>
        </div>
        <div>
          <span>Low</span>
          <span>{priorityStats.low}%</span>
        </div>
      </StatsChart>

      <Pie
        data={data}
        style={{ width: "200px", height: "auto", margin: "0 auto" }}
        options={options}
      />
    </Card>
  );
};

export default ProjectPriorityCard;
