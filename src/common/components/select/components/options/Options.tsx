// React
import { forwardRef } from 'react'

// CSS
import optionsCSS from './Options.module.scss'

// Types
import { OptionsProps } from './Options.types'



const Options = forwardRef<HTMLUListElement, OptionsProps>((props, ref) => {

    return (   
        <ul ref={ref} className={optionsCSS.optionsList}>

            {
                props.options.map(option => {

                    return (
                        <li className={optionsCSS.option} onClick={() => props.onOptionChange(option)}>{option.value}</li>
                    )
                })
            }

        </ul>
    )
})

export default Options
