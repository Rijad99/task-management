// React
import { useContext, useState } from 'react'

// Components
import Select from '../../../../../common/components/select/Select'

// CSS
import utilsCSS from '../../../../../common/scss/utils.module.scss'

// Data
import { languageOptions } from './language-select-mock-data'



function LanguageSelect() {

    return (
        <Select placeholder='Choose language' options={languageOptions} additionalClasses={utilsCSS.mr1} onOptionChange={() => null} />
    )
}

export default LanguageSelect
