// CSS
import taskFooterCSS from './TaskFooter.module.scss'

// Types
import { TaskFooterProps } from './TaskFooter.types'

// Components
import Participants from '../../../../../../../sidebar/components/projects/components/participants/Participants'
import TaskAttachments from './components/task-attachments/TaskAttachments'
import TaskNotes from './components/task-notes/TaskNotes'



function TaskFooter({ participants }: TaskFooterProps) {

    return (
        <div className={taskFooterCSS.footer}>
            <Participants participants={participants} />
            <div className={taskFooterCSS.buttonActions}>
                <TaskAttachments />
                <TaskNotes />
            </div>
        </div>
    )
}

export default TaskFooter
