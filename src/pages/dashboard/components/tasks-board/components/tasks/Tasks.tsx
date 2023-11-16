// CSS
import tasksCSS from './Tasks.module.scss'

// Components
import Task from '../task/Task'

// Types
import { TasksProps } from './Tasks.types'



function Tasks({ tasks }: TasksProps) {

    return (
        <div className={tasksCSS.tasksContainer}>
            {
                tasks.map(task => {
        
                    return (
                        <Task key={task.id} task={task} />
                    )
                })
            }    
        </div>
    )
}

export default Tasks
