import React, { useMemo } from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Card = styled.div`
  height: 350px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  padding: 25px 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: ${({ theme }) => theme.color_SubNavItem};
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 15px;
`;

const ProjectRoleCard = ({ projectCount, roleDataCount }) => {
  const options = {
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 9,
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 8,
          },
        },
        grid: {
          color: "whitesmoke",
        },
      },
      y: {
        min: 0,
        max: 6,
        stacked: true,
        ticks: {
          font: {
            size: 8,
          },
        },
        grid: {
          color: "whitesmoke",
        },
      },
    },
  };

  // Dynamically creating the labels for all projects
  const labels = useMemo(() => {
    let array = [];
    for (let i = 0; i < projectCount; i++) {
      array.push(`P${i + 1}`);
    }
    return array;
  }, [projectCount]);

  const data = {
    labels,
    datasets: [
      {
        label: "Submitters",
        data: roleDataCount.roleCount.Submitter,
        backgroundColor: "rgba(22,162,184,255)",
        barThickness: 22,
      },
      {
        label: "Developers",
        data: roleDataCount.roleCount.Developer,
        backgroundColor: "rgba(249,171,108,255)",
        barThickness: 22,
      },
      {
        label: "PMs",
        data: roleDataCount.roleCount.Manager,
        backgroundColor: "rgba(176,201,121,255)",
        barThickness: 22,
      },
    ],
  };

  return (
    <Card>
      <Header>Roles by Project</Header>

      <Bar
        style={{ width: "100%", height: "280px" }}
        data={data}
        options={options}
      />
    </Card>
  );
};

export default ProjectRoleCard;
