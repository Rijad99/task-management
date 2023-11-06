// React
import { PropsWithChildren, createRef } from 'react'

// CSS
import accordionCSS from './Accordion.module.scss'
import accordionHeaderCSS from './components/accordion-header/AccordionHeader.module.scss'
import accordionContentCSS from './components/accordion-content/AccordionContent.module.scss'

// Components
import AccordionHeader from './components/accordion-header/AccordionHeader'
import AccordionContent from './components/accordion-content/AccordionContent'


// Types
import { AccordionProps } from './Accordion.types'



function Accordion(props: PropsWithChildren<AccordionProps>) {
    const arrowRef = createRef<SVGSVGElement>()
    const accordionContentRef = createRef<HTMLDivElement>()

    const handleShowHideContent = () => {
        accordionContentRef.current?.classList.toggle(accordionContentCSS.hideAccordionContent)
        arrowRef.current?.classList.toggle(accordionHeaderCSS.rotateArrow)
    }

    return (
        <div className={accordionCSS.accordion}>
            <AccordionHeader ref={arrowRef} title={props.title} onShowHideContent={handleShowHideContent} />
            <AccordionContent ref={accordionContentRef} children={props.children} />
        </div>
    )
}

export default Accordion
