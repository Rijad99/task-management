// React
import { useContext } from 'react'

// Components
import Accordion from '../../../../common/components/accordion/Accordion'
import ProjectItems from './components/project-items/ProjectItems'

// Data
import { projectsData } from './utils/projects-mock-data'

// Projects hook
import useProjectsHook from './useProjectsHook'

// Context
import { LocalizationContext } from '../../../../common/context/LocalizationContext'



function Projects() {
    const { localization } = useContext(LocalizationContext)

    const { handleProjectChange } = useProjectsHook()

    return (
        <Accordion title={localization.projects}>
            <ProjectItems projects={projectsData} onProjectChange={handleProjectChange} />
        </Accordion>
    )
}

export default Projects
