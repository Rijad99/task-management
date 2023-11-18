// CSS
import taskStatusCSS from './TaskStatus.module.scss'

// Types
import { TaskStatusProps } from './TaskStatus.types'



function TaskStatus({ status }: TaskStatusProps) {
    const statusStyle = status.split(' ').join('').toLowerCase()

    return ( 
        <div className={`${taskStatusCSS.status} ${taskStatusCSS[statusStyle]}`}>
            {status}
        </div>
        )
}

export default TaskStatus
