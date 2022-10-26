import { useMemo } from "react";
import { useSelector } from "react-redux";

// Keep up to date List of Projects to assign a ticket to
const useProjectList = () => {
  const projects = useSelector((state) => state.projects.Projects);

  const ProjectList = useMemo(() => {
    return Object.values(projects)
      .filter((project) => project.isArchived !== true)
      .map((project) => ({
        project_name: project.project_name,
        project_id: project.project_id,
      }));
  }, [projects]);

  return ProjectList;
};

export default useProjectList;
