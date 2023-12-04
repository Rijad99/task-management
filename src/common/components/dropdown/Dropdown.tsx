// CSS
import dropdownCSS from "./Dropdown.module.scss";

import DropdownItem from "./components/dropdown-item/DropdownItem";

// Types
import { DropdownProps } from "./Dropdown.types";

// Dropdown hook
import useDropdownHook from "./useDropdownHook";

// Framer motion
import { motion } from "framer-motion";

function Dropdown({
  items,
  isDropdownOpen,
  onActionChange,
  onOutsideClickDropdownClose,
}: DropdownProps) {
  const { dropdownRef, dropdownVariant, handleActionChange } = useDropdownHook(
    onActionChange,
    onOutsideClickDropdownClose,
  );

  return (
    <motion.div
      ref={dropdownRef}
      className={dropdownCSS.dropdown}
      initial={{ opacity: 0, transform: "translateY(-20px)" }}
      animate={
        isDropdownOpen ? dropdownVariant.visible : dropdownVariant.hidden
      }
    >
      <ul>
        {items.map((item) => {
          return (
            <DropdownItem
              key={item.id}
              item={item}
              onActionChange={handleActionChange}
            />
          );
        })}
      </ul>
    </motion.div>
  );
}

export default Dropdown;
