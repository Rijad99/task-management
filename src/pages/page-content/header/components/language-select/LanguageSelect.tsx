// Components
import Select from '../../../../../common/components/select/Select'

// CSS
import languageSelectCSS from './LanguageSelect.module.scss'
import utilsCSS from '../../../../../common/scss/utils.module.scss'

// Data
import { languageOptions } from './language-select-mock-data'

// Language select hook
import useLanguageSelectHook from './useLanguageSelectHook'



function LanguageSelect() {
    const { userLanguage, handleLanguageChange } = useLanguageSelectHook()

    return (
        <Select placeholder='Choose language' selectedOption={userLanguage} options={languageOptions} additionalClasses={`${languageSelectCSS.languageSelect} ${utilsCSS.mr1_5}`} onOptionChange={handleLanguageChange} />
    )
}

export default LanguageSelect
