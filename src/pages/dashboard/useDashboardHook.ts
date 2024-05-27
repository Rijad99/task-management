// React
import {useState, useEffect, useCallback} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Types
import { Project } from './Dashboard.types';

// ENUMS
import { Paths } from '../../common/utils/paths';

// HTTP
import { getData } from '../../common/utils/http';

function useDashboardHook() {
  const [project, setProject] = useState<Project>({
    id: null,
    name: '',
    image: '',
    participants: [],
    tasks: {
      todoTasks: [],
      inProgressTasks: [],
      underReviewTasks: [],
      readyForTestingTasks: [],
      completedTasks: [],
    },
  });

  const [isTaskFormOpen, setIsTaskFormOpen] = useState<boolean>(false);

  const dashboardSidebarVariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const projectName = location.pathname.split('/')[2];

    if (projectName) {
      getData(`../../../src/pages/dashboard/components/sidebar/components/projects/data/${projectName}.json`).then((data) => handleUpdateProjectData(data));
    }
  }, []);

  const handleUpdateProjectData = useCallback((data: Project) => {
    setProject(data)
  }, [project])

  const handleProjectChange = useCallback((project: Project) => {
    navigate(`${Paths.DASHBOARD}/${project.name.toLowerCase()}`);

    getData(`../../../src/pages/dashboard/components/sidebar/components/projects/data/${project.name.toLowerCase()}.json`).then((data) =>
      handleUpdateProjectData(data),
    );
  }, [project]);

  const isProjectSelected = useCallback((): boolean => {
    return location.pathname !== Paths.DASHBOARD;
  }, [location.pathname]);

  return {
    project,
    dashboardSidebarVariant,
    isTaskFormOpen,
    setIsTaskFormOpen,
    handleProjectChange,
    isProjectSelected,
  };
}

export default useDashboardHook;
