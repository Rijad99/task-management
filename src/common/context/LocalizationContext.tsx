// React
import { createContext, useState, useEffect } from 'react';

// HTTP
import { getData } from '../utils/http';

// English localization - Used as default or fallback
import englishLocalization from '../../data/localization/english.json';

export interface Localization {
  [key: string]: string;
}

interface LocalizationContextProps {
  userLanguage: Language;
  localization: Localization;
  setUserLanguage: (language: Language) => void;
}

const LocalizationContext = createContext<LocalizationContextProps>({
  userLanguage: {
    id: null,
    value: '',
    icon: '',
  },
  localization: {},
  setUserLanguage: () => null,
});

interface LocalizationProviderProps {
  children: React.ReactNode;
}

export interface Language {
  id: string | number | null;
  value: string;
  icon: string;
}

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState<Language>({
    id: 0,
    value: 'English',
    icon: '/src/common/images/flags/english.png',
  });
  const [localization, setLocalization] = useState<Localization>(englishLocalization);

  useEffect(() => {
    const localization = JSON.parse(localStorage.getItem('language')!);
    const url = `../src/data/localization/${localization.value.toLowerCase()}.json`;

    setUserLanguage({
      id: localization.id,
      value: localization.value!,
      icon: `/src/common/images/flags/${localization.value?.toLowerCase()}.png`,
    });

    if (userLanguage.value) {
      getData(url).then((localization) => setLocalization(localization));
    }
  }, [userLanguage.value]);

  const value = {
    userLanguage,
    localization,
    setUserLanguage,
  };

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
};

export { LocalizationContext, LocalizationProvider };
