// React
import { useLocation } from "react-router-dom";

// Types
import { Project } from "../project-item/ProjectItem.types";
import { Paths } from "../../../../../../../../common/utils/paths";

function useProjectItemHook() {
  const location = useLocation();

  const handleActiveProject = (project: Project) => {
    return (
      location.pathname === `${Paths.DASHBOARD}/${project.name.toLowerCase()}`
    );
  };

  return { handleActiveProject };
}

export default useProjectItemHook;
