import { DropdownItem } from "./components/dropdown-item/DropdownItem.types";

export interface DropdownProps {
  items: DropdownItem[];
  isDropdownOpen: boolean;
  onActionChange: (item: DropdownItem) => void;
  onOutsideClickDropdownClose: () => void;
}
