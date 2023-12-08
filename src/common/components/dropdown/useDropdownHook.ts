// React
import { useRef } from "react"

// Types
import { DropdownItem } from "./components/dropdown-item/DropdownItem.types"

// Custom Hooks
import useOutsideClickHook from "../../custom-hooks/useOutsideClickHook"

function useDropdownHook(
  onActionChange: (item: DropdownItem) => void,
  onOutsideClickDropdownClose: () => void,
) {
  const dropdownRef = useRef<HTMLDivElement>(null as HTMLDivElement)

  useOutsideClickHook(dropdownRef, onOutsideClickDropdownClose)

  const dropdownVariant = {
    visible: {
      opacity: 1,
      transform: "translateY(10px) scale(1)",
      zIndex: 10000,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transform: "translateY(-20px) scale(0.8)",
      transition: {
        duration: 0.25,
      },
    },
  }

  const handleActionChange = (item: DropdownItem) => {
    onActionChange(item)
  }

  return {
    dropdownRef,
    dropdownVariant,
    handleActionChange,
  }
}

export default useDropdownHook
