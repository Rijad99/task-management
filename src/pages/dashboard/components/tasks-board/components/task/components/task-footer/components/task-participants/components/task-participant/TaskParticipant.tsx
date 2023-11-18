// CSS
import taskParticipantCSS from './TaskParticipant.module.scss'

// Types
import { TaskParticipantProps } from './TaskParticipant.types'



function TaskParticipant({ participant }: TaskParticipantProps) {

    return (
        <div className={taskParticipantCSS.participant}>
            <img src={participant.photo} className={taskParticipantCSS.participantPhoto} />
        </div>
    )
}

export default TaskParticipant
