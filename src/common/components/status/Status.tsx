// Status hook
import useStatusHook from "./useStatusHook"

// Components
import Tooltip from "../tooltip/Tooltip"

// Types
import { StatusProps } from "./Status.types"

// CSS
import statusCSS from './Status.module.scss'
import utilsCSS from '../../scss/utils.module.scss'

// ENUMS
import { TooltipPosition } from "../tooltip/Tooltip.types"



function Status({ status }: StatusProps) {
    const { getStatus } = useStatusHook()

    const statusColor = getStatus(status)

    return (
        <Tooltip text={status} position={TooltipPosition.BOTTOM} additionalClasses={utilsCSS.ml05}>
            <div className={`${statusCSS.circle} ${statusCSS.status} ${statusCSS} ${statusCSS[statusColor!]}`}></div>
        </Tooltip>
    )
}

export default Status
