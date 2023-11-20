// React
import { useContext } from 'react'

// CSS
import taskStatusCSS from './TaskStatus.module.scss'

// Types
import { TaskStatusProps } from './TaskStatus.types'

// Context
import { LocalizationContext } from '../../../../../../../../common/context/LocalizationContext'



function TaskStatus({ status }: TaskStatusProps) {
    const { localization } = useContext(LocalizationContext)

    const statusStyle = status.split(' ').join('').toLowerCase()
    const taskStatus = status.split(' ').join('').toLowerCase()

    return ( 
        <div className={`${taskStatusCSS.status} ${taskStatusCSS[statusStyle]}`}>
            {localization[taskStatus]}
        </div>
        )
}

export default TaskStatus
