// React
import { forwardRef } from 'react'

// CSS
import optionsCSS from './Options.module.scss'
import selectedOptionCSS from '../selected-option/SelectedOption.module.scss'

// Types
import { Option, OptionsProps } from './Options.types'



const Options = forwardRef<HTMLUListElement, OptionsProps>((props, ref) => {

    const handleOptionChange = (option: Option, e?: React.MouseEvent<HTMLLIElement>) => {
        const arrow = e?.currentTarget.parentElement?.parentElement?.firstChild?.firstChild?.lastChild as SVGSVGElement
 
        props.onOptionChange(option)

        arrow.classList.remove(selectedOptionCSS.rotateArrow)
    }

    return (   
        <ul ref={ref} className={optionsCSS.optionsList}>

            {
                props.options.map(option => {

                    return (
                        <li key={option.id} className={optionsCSS.option} onClick={(e) => handleOptionChange(option, e)}>{option?.icon && <img src={option.icon} />} {option.value}</li>
                    )
                })
            }

        </ul>
    )
})

export default Options
