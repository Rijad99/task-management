// React
import { useContext } from "react";

// Types
import { Option } from "../../../../../common/components/select/components/options/Options.types";

// Context and Types
import {
  Language,
  LocalizationContext,
} from "../../../../../common/context/LocalizationContext";

function useLanguageSelectHook() {
  const { userLanguage, setUserLanguage } = useContext(LocalizationContext);

  const handleLanguageChange = (option: Option) => {
    setUserLanguage(option as Language);

    localStorage.setItem("language", JSON.stringify(option));
  };

  return { userLanguage, handleLanguageChange };
}

export default useLanguageSelectHook;
