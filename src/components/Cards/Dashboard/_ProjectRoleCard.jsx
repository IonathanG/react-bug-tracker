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
import { useSelector } from "react-redux";

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

const ProjectRoleCard = ({ projectCount }) => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const options = {
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 10,
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

  // Sorting out each role count for every single project
  // => How many Submitter, Developer and Manager per project
  const roleData = useMemo(() => {
    let Submitter = [];
    let Developer = [];
    let Manager = [];

    Object.values(projectUsers).forEach((project, index) => {
      Submitter[index] = 0;
      Developer[index] = 0;
      Manager[index] = 0;

      let projectMembers = [];
      projectMembers.push(project.project_manager_id);
      project.project_team_id.map((user) => projectMembers.push(user));

      projectMembers.forEach((member) => {
        switch (users[member]?.user_role) {
          case "Submitter":
            Submitter[index] += 1;
            break;
          case "Developer":
            Developer[index] += 1;
            break;
          case "Project Manager":
            Manager[index] += 1;
            break;
          default:
            return null;
        }
      });
    });
    return {
      Submitter,
      Developer,
      Manager,
    };
  }, [projectUsers, users]);

  const data = {
    labels,
    datasets: [
      {
        label: "Submitters",
        data: roleData.Submitter,
        backgroundColor: "rgba(22,162,184,255)",
        barThickness: 22,
      },
      {
        label: "Developers",
        data: roleData.Developer,
        backgroundColor: "rgba(249,171,108,255)",
        barThickness: 22,
      },
      {
        label: "PMs",
        data: roleData.Manager,
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
