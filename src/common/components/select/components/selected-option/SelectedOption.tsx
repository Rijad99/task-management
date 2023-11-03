// CSS
import selectedOptionCSS from './SelectedOption.module.scss'

// Types
import { SelectedOptionProps } from './SelectedOption.types'



function SelectedOption({ selectedOption, placeholder, onSelectOpen }: SelectedOptionProps) {

    return (
        <div className={selectedOptionCSS.selectedOptionContainer} onClick={onSelectOpen}>
            <span className={`${selectedOptionCSS.selectedOption} ${selectedOption ? selectedOptionCSS.currentOption : selectedOptionCSS.placeholder}`}>{selectedOption ? selectedOption : placeholder}</span>
        </div>
    )
}

export default SelectedOption
