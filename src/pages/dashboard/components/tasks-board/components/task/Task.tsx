// CSS
import taskCSS from './Task.module.scss'

// Types
import { TaskProps } from './Task.types'

// Components
import TaskHeader from './components/task-header/TaskHeader'
import TaskContent from './components/task-content/TaskContent'
import TaskFooter from './components/task-footer/TaskFooter'



function Task({ task }: TaskProps) {

    return (
        
        <div className={taskCSS.task}>
            <TaskHeader title={task.title} priority={task.priority} status={task.status} />
            <TaskContent description={task.description} fromDate={task.fromDate} toDate={task.toDate} />
            <TaskFooter participants={task.participants} />
        </div>
    )
}

export default Task
