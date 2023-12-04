// Components
import Select from "../../../../../common/components/select/Select";

// CSS
import languageSelectCSS from "./LanguageSelect.module.scss";
import utilsCSS from "../../../../../common/scss/utils.module.scss";

// Data
import { languageOptions } from "./language-select-mock-data";

// Language select hook
import useLanguageSelectHook from "./useLanguageSelectHook";

function LanguageSelect() {
  const { userLanguage, handleLanguageChange } = useLanguageSelectHook();

  return (
    <div className={languageSelectCSS.languageContainer}>
      <Select
        selectedOption={userLanguage}
        options={languageOptions}
        additionalClasses={utilsCSS.mr1_5}
        onOptionChange={handleLanguageChange}
      />
    </div>
  );
}

export default LanguageSelect;
