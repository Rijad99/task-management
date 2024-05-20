// React
import { RefObject, useCallback } from 'react';

// Types
import { DropdownItem } from './components/dropdown-item/DropdownItem.types';

// Custom Hooks
import useOutsideClickHook from '../../custom-hooks/useOutsideClickHook';

function useDropdownHook(ref: RefObject<HTMLDivElement>, onActionChange: (item: DropdownItem) => void, onOutsideClickDropdownClose: () => void) {
  useOutsideClickHook(ref, onOutsideClickDropdownClose);

  const dropdownVariant = {
    visible: {
      opacity: 1,
      transform: 'translateY(10px) scale(1)',
      pointerEvents: 'unset',
      zIndex: 10000,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transform: 'translateY(-20px) scale(0.8)',
      pointerEvents: 'none',
      transition: {
        duration: 0.25,
      },
    },
  };

  const handleActionChange = useCallback(
    (item: DropdownItem) => {
      onActionChange(item);
    },
    [onActionChange],
  );

  return {
    dropdownVariant,
    handleActionChange,
  };
}

export default useDropdownHook;
