// CSS
import SvgCSS from './Svg.module.scss'

// Types
import { SvgProps } from './Svg.types'



function Svg({ width, height, viewBox, path, color, fillRule, clipRule, stroke, strokeWidth, strokeLinejoin, strokeLinecap, additionalClasses }: SvgProps) {

    return (
        <svg className={`${SvgCSS.svg} ${additionalClasses ? additionalClasses : ''}`} width={width} height={height} viewBox={viewBox} fill='none'>
            <path className={color && SvgCSS[color]} fillRule={fillRule} clipRule={clipRule} d={path} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap} />
        </svg>
    )
}

export default Svg
