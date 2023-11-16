// CSS
import tasksColumnHeaderCSS from './TasksColumnHeader.module.scss'

// Types
import { TasksColumnHeaderProps } from './TasksColumnHeader.types'



function TasksColumnHeader({ title, tasks }: TasksColumnHeaderProps) {

    return (
        <div className={tasksColumnHeaderCSS.header}>
            <h3 className={tasksColumnHeaderCSS.title}>{title}</h3>
            <div className={tasksColumnHeaderCSS.tasksNumber}>{tasks.length}</div>
        </div>
    )
}

export default TasksColumnHeader
