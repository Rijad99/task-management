// React
import { forwardRef } from 'react'

// CSS
import accordionContentCSS from './AccordionContent.module.scss'

// Types
import { AccordionContentProps } from './AccordionContent.types'



const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>((props, ref) => {

    return (
        <div ref={ref} className={accordionContentCSS.accordionContent}>
            {props.children}
        </div>
    )
})

export default AccordionContent
