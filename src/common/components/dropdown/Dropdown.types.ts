import { DropdownItem } from "./components/dropdown-item/DropdownItem.types"

export interface DropdownProps {
    items: DropdownItem[]
    onActionChange: (item: DropdownItem) => void
}
