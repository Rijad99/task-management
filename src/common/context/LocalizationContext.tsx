// React
import { createContext, useState, useEffect } from 'react'

// HTTP
// import { getData } from '../utils/http-utils'

// English localization - Used as default or fallback
//import englishLocalization from '../../data/localization/english.json'



export interface Localization {
    [key: string]: string
}

interface LocalizationContextProps {
    userLanguage: string
    localization: Localization
    setUserLanguage: (language: string) => void
}

const LocalizationContext = createContext<LocalizationContextProps>({
    userLanguage: '',
    localization: {},
    setUserLanguage: () => null
})

interface LocalizationProviderProps {
    children: React.ReactNode
}

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
    const [userLanguage, setUserLanguage] = useState<string>('English')
    const [localization, _setLocalization] = useState<Localization>({})

    useEffect(() => {
        //const localization = localStorage.getItem('language')
        //const url = `../src/data/localization/${localization?.toLowerCase()}.json`

        /* if (localization) {
            getData(url)
                .then(localization => setLocalization(localization))
        } */
    }, [userLanguage])

    const value = {
        userLanguage,
        localization,
        setUserLanguage,
    }

    return (
        <LocalizationContext.Provider value={value}>
            {children}
        </LocalizationContext.Provider>
    )
}

export { LocalizationContext, LocalizationProvider }
