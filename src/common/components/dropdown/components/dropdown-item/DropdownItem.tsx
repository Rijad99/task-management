// React
import { useCallback, useContext } from 'react';

// CSS
import dropdownItemCSS from './DropdownItem.module.scss';

// Types
import { DropdownItem as ItemDropdown, DropdownItemProps } from './DropdownItem.types';

// Context
import { LocalizationContext } from '../../../../context/LocalizationContext';

function DropdownItem({ item, onActionChange }: DropdownItemProps) {
  const { localization } = useContext(LocalizationContext);

  const handleActionChange = useCallback(
    (item: ItemDropdown) => {
      onActionChange(item);
    },
    [onActionChange],
  );

  const renderIcon = item.icon && item.icon;
  const renderAction = localization[item.actionName];

  return (
    <li className={dropdownItemCSS.dropdownItem} onClick={() => handleActionChange(item)}>
      {renderIcon}
      {renderAction}
    </li>
  );
}

export default DropdownItem;
