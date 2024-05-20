// React
import { useCallback, useContext, useState } from 'react';

// CSS
import sortCSS from './Sort.module.scss';
import utilsCSS from '../../scss/utils.module.scss';

// Components
import Button from '../button/Button.tsx';
import Svg from '../svg/Svg.tsx';

// ENUMS
import { ButtonSize, ButtonType } from '../button/Button.types.ts';
import { SvgColors } from '../svg/Svg.types.ts';

// Icons
import { sortIcon } from '../../icons/icons.ts';

// Context
import { LocalizationContext } from '../../context/LocalizationContext.tsx';
import Dropdown from '../dropdown/Dropdown.tsx';

// Data
import { sortOptionsData } from '../../../pages/dashboard/components/sub-header/utils/sort-options-mock-data.ts';

function Sort() {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState<boolean>(false);

  const { localization } = useContext(LocalizationContext);

  const handleActionChange = () => {};

  const handleOpenCloseSortDropdown = useCallback(() => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  }, [isSortDropdownOpen]);

  return (
    <div className={sortCSS.sortDropdownContainer}>
      <Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} onClick={handleOpenCloseSortDropdown} additionalClasses={sortCSS.sortButton}>
        {localization.sortBy}
        <Svg path={sortIcon} width="16" height="11" viewBox="0 0 13 12" color={SvgColors.NEUTRAL} additionalClasses={utilsCSS.ml05} />
      </Button>
      <Dropdown
        items={sortOptionsData}
        isDropdownOpen={isSortDropdownOpen}
        onActionChange={handleActionChange}
        onOutsideClickDropdownClose={() => setIsSortDropdownOpen(false)}
      />
    </div>
  );
}

export default Sort;
