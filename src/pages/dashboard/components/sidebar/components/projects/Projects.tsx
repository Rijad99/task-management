// React
import { useContext } from "react"

// Components
import Accordion from "../../../../../../common/components/accordion/Accordion"
import ProjectItems from "./components/project-items/ProjectItems"

// Data
import { allProjectsData } from "./utils/projects-mock-data"

// Context
import { LocalizationContext } from "../../../../../../common/context/LocalizationContext"

// Types
import { ProjectsProps } from "./Projects.types"

function Projects({ onProjectChange }: ProjectsProps) {
  const { localization } = useContext(LocalizationContext)

  return (
    <Accordion title={localization.projects}>
      <ProjectItems
        projects={allProjectsData}
        onProjectChange={onProjectChange}
      />
    </Accordion>
  )
}

export default Projects
