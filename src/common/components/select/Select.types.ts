// Types
import { Option } from "./components/options/Options.types"



export interface SelectProps {
    selectedOption: string
    placeholder: string
    options: Option[]
    additionalClasses?: string
    onOptionChange: (option: Option) => void
}
