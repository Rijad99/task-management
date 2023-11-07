// React
import { createRef } from 'react'

// CSS
import accordionContentCSS from './components/accordion-content/AccordionContent.module.scss'
import accordionHeaderCSS from './components/accordion-header/AccordionHeader.module.scss'



function useAccordionHook() {
    const arrowRef = createRef<SVGSVGElement>()
    const accordionContentRef = createRef<HTMLDivElement>()

    const handleShowHideContent = () => {
        accordionContentRef.current?.classList.toggle(accordionContentCSS.hideAccordionContent)
        arrowRef.current?.classList.toggle(accordionHeaderCSS.rotateArrow)
    }

    return { arrowRef, accordionContentRef, handleShowHideContent }
}

export default useAccordionHook
