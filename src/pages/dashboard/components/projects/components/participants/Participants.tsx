// CSS
import taskParticipantsCSS from './Participants.module.scss'

// Types
import { TaskParticipantsProps } from './Participants.types'

// Components
import Participant from './components/task-participant/Participant'
import Svg from '../../../../../../common/components/svg/Svg'
import Button from '../../../../../../common/components/button/Button'
import Tooltip from '../../../../../../common/components/tooltip/Tooltip'

// Icons
import { plusIcon } from '../../../../../../common/icons/icons'

// ENUMS
import { SvgColors } from '../../../../../../common/components/svg/Svg.types'
import { ButtonSize, ButtonType } from '../../../../../../common/components/button/Button.types'
import { TooltipPosition } from '../../../../../../common/components/tooltip/Tooltip.types'



function Participants({ participants }: TaskParticipantsProps) {
    const firstThreeParticipants = participants.slice(0, 3)
    const restOfParticipantsNumber = participants.slice(3, participants.length).length

    return (
        <div className={taskParticipantsCSS.participants}>
            {
                firstThreeParticipants.map(participant => {

                    return (
                        <Participant key={participant.id} participant={participant} />
                    )
                })
            }
            {
                restOfParticipantsNumber !== 0 &&
                    <div className={taskParticipantsCSS.restOfParticipants}>
                        {`+${restOfParticipantsNumber}`}
                    </div>
            }
            <Tooltip text='Add participant' position={TooltipPosition.TOP} tooltipContainerClasses={taskParticipantsCSS.addParticipantTooltipContainer} tooltipClasses={taskParticipantsCSS.addParticipantTooltip}>
                <Button type={ButtonType.PRIMARY} size={ButtonSize.SMALL} additionalClasses={taskParticipantsCSS.addParticipantButton} onClick={() => null}>
                    <Svg path={plusIcon} width="10" height="11" viewBox="0 0 13 12" color={SvgColors.LIGHT_GRAY} />
                </Button>
            </Tooltip>
        </div>
    )
}

export default Participants
