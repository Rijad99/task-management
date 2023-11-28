// CSS
import tasksCSS from './TasksColumn.module.scss'

// Types
import { TasksColumnProps } from './TasksColumn.types'

// Components
import TasksColumnHeader from '../tasks-column-header/TasksColumnHeader'
import Tasks from '../tasks/Tasks'



function TasksColumn({ tasks, title }: TasksColumnProps) {

    return (
        <div className={tasksCSS.tasksColumn}>
            <TasksColumnHeader title={title} tasks={tasks} />
            <Tasks tasks={tasks} />
        </div>
    )
}

export default TasksColumn
