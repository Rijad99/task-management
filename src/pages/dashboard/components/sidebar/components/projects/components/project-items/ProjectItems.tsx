// Types
import { ProjectItemsProps } from './ProjectItems.types';

// Components
import ProjectItem from '../project-item/ProjectItem';

// Project items hook
import useProjectItemHook from './useProjectItemsHook';

function ProjectItems({ projects, onProjectChange }: ProjectItemsProps) {
  const { handleActiveProject } = useProjectItemHook();

  return projects.map((project) => {
    return <ProjectItem key={project.id} project={project} activeProject={handleActiveProject(project)} onProjectChange={onProjectChange} />;
  });
}

export default ProjectItems;
