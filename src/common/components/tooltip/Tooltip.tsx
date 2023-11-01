// React
import { useRef } from 'react'

// CSS
import tooltipCSS from './Tooltip.module.scss'

// Types
import { TooltipPosition, TooltipProps } from './Tooltip.types'



function Tooltip({ text, position }: TooltipProps) {
    const tooltipRef = useRef<HTMLDivElement>(null)

    const handleShowTooltip = () => {

        switch (position) {
        
            case TooltipPosition.TOP:
            case TooltipPosition.BOTTOM:
                tooltipRef.current!.style[position] = `${0 - 25}px`
                break
            
            case TooltipPosition.LEFT:
                tooltipRef.current!.style[position] = `${tooltipRef.current?.getBoundingClientRect().width! - 30}px`
                break

            case TooltipPosition.RIGHT:
                tooltipRef.current!.style[position] = `${tooltipRef.current?.getBoundingClientRect().width! - 30}px`
                break
        }

        tooltipRef.current?.classList.add(tooltipCSS.tooltipVisible)
    }

    const handleHideTooltip = () => {
        tooltipRef.current?.classList.remove(tooltipCSS.tooltipVisible)
    }

    return (
        <div ref={tooltipRef} className={`${tooltipCSS.tooltip} ${tooltipCSS[position]}`} onMouseOver={handleShowTooltip} onMouseLeave={handleHideTooltip}>
            {text}
        </div>
    )
}

export default Tooltip
