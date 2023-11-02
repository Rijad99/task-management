// React
import { useRef, useEffect } from 'react'

// CSS
import tooltipCSS from './Tooltip.module.scss'

// Types
import { TooltipPosition, TooltipProps } from './Tooltip.types'



function Tooltip({ text, position, children, additionalClasses }: TooltipProps) {
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        
        switch (position) {

            case TooltipPosition.TOP:
            case TooltipPosition.BOTTOM:
                tooltipRef.current!.style[position] = `-${28}px`
                tooltipRef.current!.style.left= `50%`
                tooltipRef.current!.style.transform = 'translateX(-50%)'
                break
            
            case TooltipPosition.LEFT:
            case TooltipPosition.RIGHT:
                tooltipRef.current!.style[position] = `${+tooltipRef.current?.getBoundingClientRect().width! - 95}px`
                tooltipRef.current!.style.top= `50%`
                tooltipRef.current!.style.transform = 'translateY(-50%)'
                break
        }
    }, [])

    const handleShowTooltip = () => {
        tooltipRef.current?.classList.add(tooltipCSS.tooltipVisible)
    }

    const handleHideTooltip = () => {
        tooltipRef.current?.classList.remove(tooltipCSS.tooltipVisible)
    }

    return (
        <div className={`${tooltipCSS.tooltipContainer} ${additionalClasses && additionalClasses}`} onMouseOver={handleShowTooltip} onMouseLeave={handleHideTooltip}>
            {children}
            <div ref={tooltipRef} className={`${tooltipCSS.tooltip} ${tooltipCSS[position]}`}>
                {text}
            </div>
        </div>
    )
}

export default Tooltip
