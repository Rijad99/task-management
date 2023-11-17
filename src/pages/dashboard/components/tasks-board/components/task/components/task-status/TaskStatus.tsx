// CSS
import taskStatusCSS from './TaskStatus.module.scss'

// Components
import Select from '../../../../../../../../common/components/select/Select'

// Types
import { TaskStatusProps } from './TaskStatus.types'

// Data
import { taskStatuses } from './utils/task-statuses-mock-data'



function TaskStatus({ status, onTaskStatusChange }: TaskStatusProps) {

    return ( 
        <Select selectedOption={status} options={taskStatuses} onOptionChange={onTaskStatusChange} additionalClasses={taskStatusCSS.taskStatusSelect} />
    )
}

export default TaskStatus
