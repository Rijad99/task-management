// React
import { forwardRef } from 'react'

// CSS
import optionsCSS from './Options.module.scss'

// Types
import { OptionsProps } from './Options.types'

// Framer motion
import {motion} from "framer-motion"

// Options hook
import useOptionsHook from "./useOptionsHook"



const Options = forwardRef<HTMLUListElement, OptionsProps>((props, ref) => {
    const { optionsVariant, handleOptionChange } = useOptionsHook(props.onOptionChange)

    return (
        <motion.ul ref={ref} className={optionsCSS.optionsList} initial={{ opacity: 0, transform: "translateY(-20px)" }} animate={props.isSelectOpen ? optionsVariant.visible : optionsVariant.hidden}>

            {
                props.options.map(option => {

                    return (
                        <li key={option.id} className={optionsCSS.option} onClick={() => handleOptionChange(option)}>{option?.icon && <img src={option.icon} />} {option.value}</li>
                    )
                })
            }

        </motion.ul>
    )
})

export default Options
