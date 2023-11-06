// React
import { forwardRef } from 'react'

// CSS
import accordionHeaderCSS from './AccordionHeader.module.scss'

// Components
import Svg from '../../../svg/Svg'

// Types
import { AccordionHeaderProps } from './AccordionHeader.types'

// ENUMS
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../svg/Svg.types'

// Icons
import { arrowIcon } from '../../../../icons/icons'



const AccordionHeader = forwardRef<SVGSVGElement, AccordionHeaderProps>((props, ref) => {

    return (
        <div onClick={props.onShowHideContent} className={accordionHeaderCSS.accordionHeader}>
            <h4 className={accordionHeaderCSS.title}>{props.title}</h4>
            <Svg ref={ref} path={arrowIcon} width='8' height='6' strokeWidth='1.5' viewBox='0 0 12 7' stroke={SvgColors.BLACK} strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} />
        </div>
    )
})

export default AccordionHeader
