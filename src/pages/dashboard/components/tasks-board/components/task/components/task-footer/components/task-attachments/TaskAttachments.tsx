// CSS 
import taskAttachmentsCSS from './TaskAttachments.module.scss'
import utilsCSS from '../../../../../../../../../../common/scss/utils.module.scss'

// Components
import Button from '../../../../../../../../../../common/components/button/Button'
import Svg from '../../../../../../../../../../common/components/svg/Svg'

// ENUMS
import { ButtonSize, ButtonType } from '../../../../../../../../../../common/components/button/Button.types'
import { SvgColors, SvgFillRule, SvgClipRule } from '../../../../../../../../../../common/components/svg/Svg.types'

// Icons
import { fileIcon } from '../../../../../../../../../../common/icons/icons'



function TaskAttachments() {

    return (
        <Button size={ButtonSize.SMALLEST} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={utilsCSS.mr1}>
            <Svg path={fileIcon} width='21' height='26' viewBox='0 0 25 24' color={SvgColors.LIGHT_GRAY} fillRule={SvgFillRule.EVENODD} clipRule={SvgClipRule.EVENODD} />
            <span className={taskAttachmentsCSS.number}>2</span>
        </Button>
    )
}

export default TaskAttachments
