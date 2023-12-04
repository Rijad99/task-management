// Types
import { Option } from "../options/Options.types";

export interface SelectedOptionProps {
  selectedOption: Option;
  isSelectOpen: boolean;
  placeholder?: string;
  selectedOptionAdditionalClasses?: string;
  onSelectOpen: () => void;
}
