// CSS
import projectItemCSS from "./ProjectItem.module.scss"

// Types
import { ProjectItemProps } from "./ProjectItem.types"
import { Project } from "../../../../../../Dashboard.types"

// Components
import Button from "../../../../../../../../common/components/button/Button"

// ENUMS
import {
  ButtonSize,
  ButtonType,
} from "../../../../../../../../common/components/button/Button.types"

function ProjectItem({
  project,
  activeProject,
  onProjectChange,
}: ProjectItemProps) {
  const handleProjectChange = (project: Project) => {
    onProjectChange(project)
  }

  return (
    <Button
      type={ButtonType.PRIMARY}
      size={ButtonSize.LARGE}
      additionalClasses={`${projectItemCSS.projectButton} ${
        activeProject ? projectItemCSS.activeProjectButton : ""
      }`}
      onClick={() => handleProjectChange(project)}
    >
      <div className={projectItemCSS.projectInfo}>
        <img src={project.image} />
        <span className={projectItemCSS.name}>{project.name}</span>
      </div>
    </Button>
  )
}

export default ProjectItem
