// Status hook
import useUserStatusHook from "./useUserStatusHook"

// Components
import Tooltip from "../tooltip/Tooltip"

// Types
import { StatusProps } from "./UserStatus.types"

// CSS
import statusCSS from './UserStatus.module.scss'
import utilsCSS from '../../scss/utils.module.scss'

// ENUMS
import { TooltipPosition } from "../tooltip/Tooltip.types"



function UserStatus({ status }: StatusProps) {
    const { getStatus } = useUserStatusHook()

    const statusColor = getStatus(status)

    return (
        <Tooltip text={status} position={TooltipPosition.BOTTOM} tooltipContainerClasses={utilsCSS.ml05} tooltipClasses={statusCSS[status.split(' ').join('_').toLowerCase()]}>
            <div className={`${statusCSS.circle} ${statusCSS.status} ${statusCSS} ${statusCSS[statusColor!]}`}></div>
        </Tooltip>
    )
}

export default UserStatus
