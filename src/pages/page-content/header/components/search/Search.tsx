// React
import { useState, useContext } from 'react'

// Components
import FormControl from '../../../../../common/components/form/form-control/FormControl';

// CSS
import searchCSS from './Search.module.scss'

// Icons
import { searchIcon } from '../../../../../common/icons/icons';

// Context
import { LocalizationContext } from '../../../../../common/context/LocalizationContext';



function Search() {
    const [search, setSearch] = useState<string>('')

    const { localization } = useContext(LocalizationContext)

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return (
        <FormControl type='text' name='search' placeholder={localization.search} value={search} icon={searchIcon} additionalClasses={searchCSS.search} onInput={handleSearch} />
    )
}

export default Search
