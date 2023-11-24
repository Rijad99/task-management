// CSS
import selectedProjectCSS from './SelectedProject.module.scss'

// Types
import { SelectProjectProps } from './SelectedProject.types'

// Components
import ProjectProgressBar from './components/project-progress-bar/ProjectProgressBar'

// Selected project hook
import useSelectedProjectHook from './useSelectedProjectHook'



function SelectedProject({ name, image, tasks }: SelectProjectProps) {
    const { completionPercentage } = useSelectedProjectHook(name, tasks)

    return (
        
        <div className={selectedProjectCSS.selectedProjectContainer}>
            <div className={selectedProjectCSS.project}>
                <img src={image} />
                <div className={selectedProjectCSS.info}>
                    <h4 className={selectedProjectCSS.projectName}>{name}</h4>
                    <ProjectProgressBar completionPercentage={completionPercentage!} />
                </div>
            </div>
        </div>
    )
}

export default SelectedProject
