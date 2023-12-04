// CSS
import selectCSS from "./Select.module.scss";

// Components
import SelectedOption from "./components/selected-option/SelectedOption";
import Options from "./components/options/Options";

// Types
import { SelectProps } from "./Select.types";

// Select hook
import useSelectHook from "./useSelectHook";

function Select({
  selectedOption,
  placeholder,
  options,
  selectedOptionAdditionalClasses,
  additionalClasses,
  onOptionChange,
}: SelectProps) {
  const { optionsRef, isSelectOpen, handleSelectOpen, handleOptionChange } =
    useSelectHook(onOptionChange);

  return (
    <div
      className={`${selectCSS.selectContainer} ${
        additionalClasses && additionalClasses
      }`}
    >
      <SelectedOption
        isSelectOpen={isSelectOpen}
        selectedOption={selectedOption}
        placeholder={placeholder}
        selectedOptionAdditionalClasses={selectedOptionAdditionalClasses}
        onSelectOpen={handleSelectOpen}
      />
      <Options
        ref={optionsRef}
        isSelectOpen={isSelectOpen}
        options={options}
        onOptionChange={handleOptionChange}
      />
    </div>
  );
}

export default Select;
