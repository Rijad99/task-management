// CSS
import tooltipCSS from './Tooltip.module.scss'

// Types
import { TooltipProps } from './Tooltip.types'

// Tooltip hook
import useTooltipHook from './useTooltipHook'



function Tooltip({ text, children, position, tooltipContainerClasses, tooltipClasses }: TooltipProps) {
    const { tooltipRef, handleShowTooltip, handleHideTooltip } = useTooltipHook(text, position)

    return (
        <div className={`${tooltipCSS.tooltipContainer} ${tooltipContainerClasses && tooltipContainerClasses}`} onMouseOver={handleShowTooltip} onMouseLeave={handleHideTooltip}>
            {children}
            <div ref={tooltipRef} className={`${tooltipCSS.tooltip} ${tooltipCSS[position]} ${tooltipClasses && tooltipClasses}`}>
                {text}
            </div>
        </div>
    )
}

export default Tooltip
