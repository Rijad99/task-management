// CSS 
import taskNotesCSS from './TaskNotes.module.scss'

// Components
import Button from '../../../../../../../../../../../../common/components/button/Button'
import Svg from '../../../../../../../../../../../../common/components/svg/Svg'

// ENUMS
import { ButtonSize, ButtonType } from '../../../../../../../../../../../../common/components/button/Button.types'
import { SvgColors, SvgFillRule, SvgClipRule } from '../../../../../../../../../../../../common/components/svg/Svg.types'

// Icons
import { messageIcon } from '../../../../../../../../../../../../common/icons/icons'



function TaskNotes() {

    return (
        <Button size={ButtonSize.SMALLEST} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={taskNotesCSS.notesButton}>
            <Svg path={messageIcon} width='21' height='26' viewBox='0 0 25 24' color={SvgColors.LIGHT_GRAY} fillRule={SvgFillRule.EVENODD} clipRule={SvgClipRule.EVENODD} />
            <span className={taskNotesCSS.number}>3</span>
        </Button>
    )
}

export default TaskNotes
