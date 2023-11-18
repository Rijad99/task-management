// CSS
import taskParticipantsCSS from './TaskParticipants.module.scss'

// Types
import { TaskParticipantsProps } from './TaskParticipants.types'

// Components
import TaskParticipant from './components/task-participant/TaskParticipant'
import Svg from '../../../../../../../../../../common/components/svg/Svg'
import Button from '../../../../../../../../../../common/components/button/Button'

// Icons
import { plusIcon } from '../../../../../../../../../../common/icons/icons'

// ENUMS
import { SvgColors } from '../../../../../../../../../../common/components/svg/Svg.types'
import { ButtonSize, ButtonType } from '../../../../../../../../../../common/components/button/Button.types'



function TaskParticipants({ participants }: TaskParticipantsProps) {
    const firstThreeParticipants = participants.slice(0, 3)
    const restOfParticipantsNumber = participants.slice(3, participants.length).length

    return (
        <div className={taskParticipantsCSS.participants}>
            {
                firstThreeParticipants.map(participant => {

                    return (
                        <TaskParticipant key={participant.id} participant={participant} />
                    )
                })
            }
            {
                restOfParticipantsNumber !== 0 &&
                    <div className={taskParticipantsCSS.restOfParticipants}>
                        {`+${restOfParticipantsNumber}`}
                    </div>
            }
            <Button type={ButtonType.PRIMARY} size={ButtonSize.SMALL} additionalClasses={taskParticipantsCSS.addParticipantButton} onClick={() => null}>
                <Svg path={plusIcon} width="10" height="11" viewBox="0 0 13 12" color={SvgColors.LIGHT_GRAY} />
            </Button>
        </div>
    )
}

export default TaskParticipants
