// CSS
import projectItemCSS from './ProjectItem.module.scss'

// Types
import { ProjectItemProps } from './ProjectItem.types'
import { Project } from './ProjectItem.types'

// Components
import Button from '../../../../../../common/components/button/Button'
import Svg from '../../../../../../common/components/svg/Svg'

// ENUMS
import { ButtonSize, ButtonType } from '../../../../../../common/components/button/Button.types'
import { SvgColors, SvgFillRule, SvgClipRule } from '../../../../../../common/components/svg/Svg.types'

// Icons
import { dotsIcon } from '../../../../../../common/icons/icons'



function ProjectItem({ project, activeProject, onProjectChange }: ProjectItemProps) {

    const handleProjectChange = (project: Project) => {
        onProjectChange(project)
    }

    return (
        <Button type={ButtonType.PRIMARY} size={ButtonSize.LARGE} additionalClasses={`${projectItemCSS.projectButton} ${activeProject ? projectItemCSS.activeProjectButton : ''}`} onClick={() => handleProjectChange(project)}>
            <div className={projectItemCSS.projectInfo}>
                <img src='/src/common/images/projects/project.png' />
                <span className={projectItemCSS.name}>{project.name}</span>
            </div>
            <Svg path={dotsIcon} width='20' height='19' viewBox='0 -3 1 24' color={SvgColors.NEUTRAL} fillRule={SvgFillRule.EVENODD} clipRule={SvgClipRule.EVENODD} />
        </Button>
    )
}

export default ProjectItem
