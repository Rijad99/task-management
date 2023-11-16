// CSS
import tasksBoardCSS from './TasksBoard.module.scss'

// Types
import { Task, TasksBoardProps } from './TasksBoard.types'

// Components
import TasksColumn from './components/tasks-column/TasksColumn'

// Data
import { tasksCategory } from './utils/tasks-category-mock-data'



function TasksBoard({ tasks }: TasksBoardProps) {

    return (
        <div className={tasksBoardCSS.tasksBoardGrid}>
            {
                Object.keys(tasks).map((key, index) => {
                    const title = tasksCategory[index].category
                    const tasksByCategory = tasks[key as keyof typeof tasks] as unknown as Task[]
                    
                    return (
                        <TasksColumn key={index} title={title} tasks={tasksByCategory} />
                    )
                })
            }
        </div>
    )
}

export default TasksBoard
