// React
import { RefObject } from 'react';

// Custom Hooks
import useOutsideClickHook from '../../custom-hooks/useOutsideClickHook';

function usePopupHook(ref: RefObject<HTMLElement>, onOutsideClickPopupClose: () => void) {
  useOutsideClickHook(ref, onOutsideClickPopupClose);

  const popupVariant = {
    visible: {
      opacity: 1,
      transform: 'translateY(0px) scale(1)',
      pointerEvents: 'unset',
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transform: 'translateY(-10px) scale(0.8)',
      pointerEvents: 'none',
      transition: {
        duration: 0.25,
      },
    },
  };

  return {
    ref,
    popupVariant,
  };
}

export default usePopupHook;
