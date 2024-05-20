// React
import { useRef, useState } from 'react';

// Types
import { Option } from './components/options/Options.types';
import useOutsideClickHook from '../../custom-hooks/useOutsideClickHook';

function useSelectHook(onOptionChange: (option: Option) => void) {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const selectRef = useRef<HTMLDivElement | null>(null);
  useOutsideClickHook(selectRef, setIsSelectOpen);

  const handleSelectOpen = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleOptionChange = (option: Option) => {
    onOptionChange(option);

    setIsSelectOpen(false);
  };

  return {
    selectRef,
    isSelectOpen,
    setIsSelectOpen,
    handleSelectOpen,
    handleOptionChange,
  };
}

export default useSelectHook;
