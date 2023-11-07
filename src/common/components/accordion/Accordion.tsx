// React
import { PropsWithChildren } from 'react'

// CSS
import accordionCSS from './Accordion.module.scss'

// Components
import AccordionHeader from './components/accordion-header/AccordionHeader'
import AccordionContent from './components/accordion-content/AccordionContent'

// Types
import { AccordionProps } from './Accordion.types'

// Accordion hook
import useAccordionHook from './useAccordionHook'



function Accordion(props: PropsWithChildren<AccordionProps>) {
    const { arrowRef, accordionContentRef, handleShowHideContent} = useAccordionHook()

    return (
        <div className={accordionCSS.accordion}>
            <AccordionHeader ref={arrowRef} title={props.title} onShowHideContent={handleShowHideContent} />
            <AccordionContent ref={accordionContentRef} children={props.children} />
        </div>
    )
}

export default Accordion
