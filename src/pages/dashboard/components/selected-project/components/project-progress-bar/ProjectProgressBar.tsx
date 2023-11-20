// React
import { forwardRef } from 'react'

// CSS
import projectProgressBarCSS from './ProjectProgressBar.module.scss'

// Types
import { ProjectProgressBarProps } from './ProjectProgressBar.types'



const ProjectProgressBar = forwardRef<HTMLDivElement, ProjectProgressBarProps>((props, ref) => {

    return (

        <div className={projectProgressBarCSS.progressBarContainer}>
            <div className={projectProgressBarCSS.progressBar}>
                <div ref={ref} className={projectProgressBarCSS.progress}></div>
            </div>
            <span className={projectProgressBarCSS.progressPercentage}>{`${props.completionPercentage}% Complete`}</span>
        </div>
    )
})

export default ProjectProgressBar
