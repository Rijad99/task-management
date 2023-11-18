// CSS
import taskFooterCSS from './TaskFooter.module.scss'

// Types
import { TaskFooterProps } from './TaskFooter.types'

// Components
import TaskParticipants from './components/task-participants/TaskParticipants'
import TaskAttachments from './components/task-attachments/TaskAttachments'
import TaskNotes from './components/task-notes/TaskNotes'



function TaskFooter({ participants }: TaskFooterProps) {

    return (
        <div className={taskFooterCSS.footer}>
            <TaskParticipants participants={participants} />
            <div className={taskFooterCSS.buttonActions}>
                <TaskAttachments />
                <TaskNotes />
            </div>
        </div>
    )
}

export default TaskFooter
