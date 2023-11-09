// React
import { useContext } from 'react'

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

// Context
import { LocalizationContext } from '../../context/LocalizationContext'



function UserStatus({ status, showStatusText, onStatusDropdownOpen }: StatusProps) {
    const { getStatus, handleHoverDisabled } = useUserStatusHook(showStatusText)

    const { localization } = useContext(LocalizationContext)

    const statusColor = getStatus(status)

    return (
        <Tooltip text={localization[status]} position={TooltipPosition.RIGHT} hoverDisabled={handleHoverDisabled()} tooltipContainerClasses={utilsCSS.ml05} tooltipClasses={statusCSS[status.split(' ').join('_').toLowerCase()]}>
            <div className={statusCSS.statusContainer}>
                <div className={`${statusCSS.circle} ${statusCSS.status} ${statusCSS} ${statusCSS[statusColor!]}`} onClick={onStatusDropdownOpen}></div>
                {showStatusText && <span className={statusCSS.statusText}>{status}</span>}
            </div>
        </Tooltip>
    )
}

export default UserStatus
