export interface DropdownItemProps {
  item: DropdownItem
  onActionChange: (item: DropdownItem) => void
}

export interface DropdownItem {
  id: string | number
  actionName: string
  icon?: React.ReactElement
}
