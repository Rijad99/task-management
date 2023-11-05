// React
import { useContext } from 'react'

// Components
import Select from '../../../../../common/components/select/Select'

// CSS
import languageSelectCSS from './LanguageSelect.module.scss'
import utilsCSS from '../../../../../common/scss/utils.module.scss'

// Types
import { Option } from '../../../../../common/components/select/components/options/Options.types'

// Data
import { languageOptions } from './language-select-mock-data'

// Context and Types
import { Language, LocalizationContext } from '../../../../../common/context/LocalizationContext'



function LanguageSelect() {
    const { userLanguage, setUserLanguage } = useContext(LocalizationContext)

    const handleLanguageChange = (option: Option) => {
        setUserLanguage(option as Language)

        localStorage.setItem('language', JSON.stringify(option))
    }

    return (
        <Select placeholder='Choose language' selectedOption={userLanguage} options={languageOptions} additionalClasses={`${languageSelectCSS.languageSelect} ${utilsCSS.mr1_5}`} onOptionChange={handleLanguageChange} />
    )
}

export default LanguageSelect
