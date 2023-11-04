// Types
import { Option } from "../options/Options.types"



export interface SelectedOptionProps {
    selectedOption: Option
    placeholder: string
    onSelectOpen: () => void
}
