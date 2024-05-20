// Types
import { Option } from './components/options/Options.types';

export interface SelectProps {
  selectedOption: Option;
  placeholder?: string | undefined;
  options: Option[];
  additionalClasses?: string;
  selectedOptionAdditionalClasses?: string | undefined;
  onOptionChange: (option: Option) => void;
}
