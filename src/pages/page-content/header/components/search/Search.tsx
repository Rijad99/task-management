// React
import { useContext } from "react";

// Components
import FormControl from "../../../../../common/components/form/form-control/FormControl";

// CSS
import searchCSS from "./Search.module.scss";

// Icons
import { searchIcon } from "../../../../../common/icons/icons";

// Context
import { LocalizationContext } from "../../../../../common/context/LocalizationContext";

// Search hook
import useSearchHook from "./useSearchHook";

function Search() {
  const { search, handleSearch } = useSearchHook();

  const { localization } = useContext(LocalizationContext);

  return (
    <FormControl
      type="text"
      name="search"
      placeholder={localization.search}
      value={search}
      icon={searchIcon}
      additionalClasses={searchCSS.search}
      onInput={handleSearch}
    />
  );
}

export default Search;
