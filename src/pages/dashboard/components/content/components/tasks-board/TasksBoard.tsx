// React
import { useContext } from 'react'

// CSS
import tasksBoardCSS from './TasksBoard.module.scss'

// Types
import { Task, TasksBoardProps } from './TasksBoard.types'

// Components
import TasksColumn from './components/tasks-column/TasksColumn'

// Data
import { tasksCategory } from './utils/tasks-category-mock-data'

// Context
import { LocalizationContext } from '../../../../../../common/context/LocalizationContext'



function TasksBoard({ tasks }: TasksBoardProps) {
    const { localization } = useContext(LocalizationContext)

    return (
        <div className={tasksBoardCSS.tasksBoardGrid}>
            {
                Object.keys(tasks).map((key, index) => {
                    const title = localization[tasksCategory[index].category]
                    const tasksByCategory = tasks[key as keyof typeof tasks] as unknown as Task[]
                    
                    return (
                        <TasksColumn key={index} title={title} tasks={tasksByCategory} category={key} />
                    )
                })
            }
        </div>
    )
}

export default TasksBoard
