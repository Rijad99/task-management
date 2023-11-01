// Status hook
import useStatusHook from "./useStatusHook"

// Components
import Tooltip from "../tooltip/Tooltip"

// Types
import { StatusProps } from "./Status.types"

// CSS
import statusCSS from './Status.module.scss'

// ENUMS
import { TooltipPosition } from "../tooltip/Tooltip.types"



function Status({ status }: StatusProps) {
    const { getStatus } = useStatusHook()

    const statusColor = getStatus(status)

    return (
        <div className={`${statusCSS.circle} ${statusCSS.status} ${statusCSS} ${statusCSS[statusColor!]}`}>
            <Tooltip text={status} position={TooltipPosition.TOP} />
        </div>
    )
}

export default Status
