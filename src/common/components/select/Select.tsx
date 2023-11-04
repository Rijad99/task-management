// React
import { createRef } from 'react'

// CSS
import selectCSS from './Select.module.scss'
import optionsCSS from './components/options/Options.module.scss'

// Components
import SelectedOption from './components/selected-option/SelectedOption'
import Options from './components/options/Options'

// Types
import { SelectProps } from './Select.types'
import { Option } from './components/options/Options.types'



function Select({ selectedOption, placeholder, options, additionalClasses, onOptionChange }: SelectProps) {
    const optionsRef = createRef<HTMLUListElement>()

    const handleSelectOpen = () => {
        optionsRef.current?.classList.toggle(optionsCSS.optionsListVisible)
    }

    const handleOptionChange = (option: Option) => {
        onOptionChange(option)

        optionsRef.current?.classList.remove(optionsCSS.optionsListVisible)
    }

    return (
        <div className={`${selectCSS.selectContainer} ${additionalClasses && additionalClasses}`}>
            <SelectedOption selectedOption={selectedOption} placeholder={placeholder} onSelectOpen={handleSelectOpen} />
            <Options ref={optionsRef} options={options} onOptionChange={handleOptionChange} />
        </div>
    )
}

export default Select
