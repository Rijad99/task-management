// CSS
import taskHeaderCSS from './TaskHeader.module.scss'

// Types
import { TaskHeaderProps } from './TaskHeader.types'

// Components
import Svg from '../../../../../../../../common/components/svg/Svg'
import Tooltip from '../../../../../../../../common/components/tooltip/Tooltip'

// Icons
import { priorityIcon } from '../../../../../../../../common/icons/icons'

// Utils
import { getPriorityIconColor } from '../../utils/utils'
import { TooltipPosition } from '../../../../../../../../common/components/tooltip/Tooltip.types'



function TaskHeader({ title, priority }: TaskHeaderProps) {
    const priorityIconColor = getPriorityIconColor(priority)

    const getPriorityText = () => {

        switch (priority) {
        
            case 1:
                return 'Low Priority'
    
            case 2:
                return 'Medium Priority'
    
            case 3:
                return 'High priority'
        }
    }

    return (
        <div className={taskHeaderCSS.header}>
            <Tooltip text={getPriorityText()!} position={TooltipPosition.TOP} tooltipClasses={taskHeaderCSS[getPriorityText()!.split(' ').join('').toLowerCase()]}>
                <Svg path={priorityIcon} width='17' height='14' viewBox='0 0 17 14' color={priorityIconColor} additionalClasses={taskHeaderCSS.priorityIcon} />
            </Tooltip>
            <h4 className={taskHeaderCSS.title}>{title}</h4>
        </div>
    )
}

export default TaskHeader
