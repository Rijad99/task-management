// React
import { useRef, useEffect } from 'react'

// CSS
import tooltipCSS from './Tooltip.module.scss'

// Types
import { TooltipPosition, TooltipProps } from './Tooltip.types'



function Tooltip({ text, position, children, tooltipContainerClasses, tooltipClasses }: TooltipProps) {
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        
        switch (position) {

            case TooltipPosition.TOP:
            case TooltipPosition.BOTTOM:
                tooltipRef.current!.style[position] = `-${30}px`
                tooltipRef.current!.style.left= `50%`
                tooltipRef.current!.style.transform = 'translateX(-50%)'
                break
            
            case TooltipPosition.LEFT:
            case TooltipPosition.RIGHT:
                tooltipRef.current!.style[position] = `12px`
                tooltipRef.current!.style.top= `50%`
                tooltipRef.current!.style.transform = 'translateY(-50%)'
                break
        }
    }, [text])

    const handleShowTooltip = () => {
        tooltipRef.current?.classList.add(tooltipCSS.tooltipVisible)
    }

    const handleHideTooltip = () => {
        tooltipRef.current?.classList.remove(tooltipCSS.tooltipVisible)
    }

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
