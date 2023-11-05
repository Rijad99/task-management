// React
import { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'

// CSS
import optionsCSS from './Options.module.scss'
import selectedOptionCSS from '../selected-option/SelectedOption.module.scss'

// Types
import { Option, OptionsProps } from './Options.types'



const Options = forwardRef<HTMLUListElement, OptionsProps>((props, outerRef) => {
    const listRef = useRef<HTMLUListElement>(null)

    useImperativeHandle(outerRef, () => listRef.current!, []);

    const handleOptionChange = (option: Option, e?: React.MouseEvent<HTMLLIElement>) => {
        const arrow = e?.currentTarget.parentElement?.parentElement?.firstChild?.firstChild?.lastChild as SVGSVGElement
 
        props.onOptionChange(option)

        arrow.classList.remove(selectedOptionCSS.rotateArrow)
    }

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if (listRef.current && !listRef.current.contains(e.target as Node)) {
                listRef.current.classList.remove(optionsCSS.optionsListVisible)
                
                const arrow = listRef.current.parentElement?.firstChild?.firstChild?.lastChild as SVGSVGElement
                arrow.classList.remove(selectedOptionCSS.rotateArrow)
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return (   
        <ul ref={listRef} className={optionsCSS.optionsList}>

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
