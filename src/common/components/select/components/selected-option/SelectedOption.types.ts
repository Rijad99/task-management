// Types
import { Option } from '../options/Options.types';

export interface SelectedOptionProps {
  selectedOption: Option;
  isSelectOpen: boolean;
  placeholder?: string | undefined;
  selectedOptionAdditionalClasses?: string | undefined;
  onSelectOpen: () => void;
}
