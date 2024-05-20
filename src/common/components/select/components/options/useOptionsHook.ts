// Types
import { Option } from './Options.types';
import { useCallback } from 'react';

function useOptionsHook(onOptionChange: (option: Option) => void) {
  const handleOptionChange = useCallback(
    (option: Option) => {
      onOptionChange(option);
    },
    [onOptionChange],
  );

  const optionsVariant = {
    visible: {
      opacity: 1,
      transform: 'translateY(5px) scale(1)',
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
    optionsVariant,
    handleOptionChange,
  };
}

export default useOptionsHook;
