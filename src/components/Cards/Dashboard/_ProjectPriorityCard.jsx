import React, { useMemo } from "react";
import styled from "styled-components";

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

const PieChart = styled.div``;

const StatsChart = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 14px;

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

  return (
    <Card>
      <Title>
        <span>Priority Projects</span>
        <span>Project Priorities</span>
      </Title>

      <PieChart>Pie Chart</PieChart>

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
    </Card>
  );
};

export default ProjectPriorityCard;
