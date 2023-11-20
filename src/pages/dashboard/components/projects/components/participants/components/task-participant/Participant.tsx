// CSS
import taskParticipantCSS from './Participant.module.scss'

// Types
import { TaskParticipantProps } from './Participant.types'



function Participant({ participant }: TaskParticipantProps) {

    return (
        <div className={taskParticipantCSS.participant}>
            <img src={participant.photo} className={taskParticipantCSS.participantPhoto} />
        </div>
    )
}

export default Participant
