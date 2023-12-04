// Types
import { Option } from "./Options.types";

function useOptionsHook(onOptionChange: (option: Option) => void) {
  const handleOptionChange = (option: Option) => {
    onOptionChange(option);
  };

  const optionsVariant = {
    visible: {
      opacity: 1,
      transform: "translateY(5px) scale(1)",
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transform: "translateY(-10px) scale(0.8)",
      transition: {
        duration: 0.25,
      },
    },
  };

  return { optionsVariant, handleOptionChange };
}

export default useOptionsHook;
