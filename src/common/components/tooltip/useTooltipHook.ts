// React
import { useRef, useEffect } from 'react'

// CSS
import tooltipCSS from './Tooltip.module.scss'

// Types
import { TooltipPosition } from './Tooltip.types'



function useTooltipHook(text: string, position: string) {
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        
        switch (position) {

            case TooltipPosition.TOP:
            case TooltipPosition.BOTTOM:
                tooltipRef.current!.style[position] = `-${35}px`
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

    return { tooltipRef, handleShowTooltip, handleHideTooltip }
}

export default useTooltipHook
