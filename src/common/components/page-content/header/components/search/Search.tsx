// React
import { useState } from 'react'

// Components
import FormControl from "../../../../form/form-control/FormControl";

// CSS
import searchCSS from './Search.module.scss'

// Icons
import { searchIcon } from '../../../../../icons/icons';



function Search() {
    const [search, _setSearch] = useState<string>('')

    return (
        <FormControl type='text' name='search' placeholder='Search' value={search} icon={searchIcon} additionalClasses={searchCSS.search} onKeyUp={() => null} />
    )
}

export default Search
