// React
import { forwardRef, RefObject } from 'react';

// CSS
import dropdownCSS from './Dropdown.module.scss';

import DropdownItem from './components/dropdown-item/DropdownItem';

// Types
import { DropdownProps } from './Dropdown.types';

// Dropdown hook
import useDropdownHook from './useDropdownHook';

// Framer motion
import { motion } from 'framer-motion';

const Dropdown = forwardRef<HTMLElement, DropdownProps>((props, ref: RefObject<HTMLDivElement>) => {
  const { dropdownVariant, handleActionChange } = useDropdownHook(ref, props.onActionChange, props.onOutsideClickDropdownClose);

  const listItems = props.items.map((item) => <DropdownItem key={item.id} item={item} onActionChange={handleActionChange} />);
  const animateDropdown = props.isDropdownOpen ? dropdownVariant.visible : dropdownVariant.hidden;

  return (
    <motion.div
      ref={ref}
      className={dropdownCSS.dropdown}
      initial={{
        opacity: 0,
        transform: 'translateY(-20px)',
        pointerEvents: 'none',
        zIndex: -1,
      }}
      animate={animateDropdown}
    >
      <ul>{listItems}</ul>
    </motion.div>
  );
});

export default Dropdown;
