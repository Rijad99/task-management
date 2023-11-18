// React
import { createRef } from 'react'

// CSS
import selectedOptionCSS from './SelectedOption.module.scss'

// Types
import { SelectedOptionProps } from './SelectedOption.types'

// Icons
import { arrowIcon } from '../../../../icons/icons'

// Components
import Svg from '../../../svg/Svg'
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../svg/Svg.types'



function SelectedOption({ selectedOption, placeholder, selectedOptionAdditionalClasses, onSelectOpen }: SelectedOptionProps) {
    const arrowRef = createRef<SVGSVGElement>()

    const handleSelectOpen = () => {
        onSelectOpen()

        arrowRef.current?.classList.toggle(selectedOptionCSS.rotateArrow)
    }

    return (
        <div className={`${selectedOptionCSS.selectedOptionContainer} ${selectedOptionAdditionalClasses ? selectedOptionAdditionalClasses : ''}`} onClick={handleSelectOpen}>
            <span className={`${selectedOptionCSS.option} ${selectedOption ? selectedOptionCSS.currentOption : selectedOptionCSS.placeholder}`}>
                <div className={selectedOptionCSS.selectedOption}>
                    {selectedOption.icon && <img src={selectedOption.icon} />} 
                    {selectedOption.value ? selectedOption.value : placeholder}
                </div>
                <Svg ref={arrowRef} path={arrowIcon} width='8' height='6' strokeWidth='1.5' viewBox='0 0 12 7' stroke={SvgColors.BLACK} strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} additionalClasses={selectedOptionCSS.arrow} />
            </span>
        </div>
    )
}

export default SelectedOption
