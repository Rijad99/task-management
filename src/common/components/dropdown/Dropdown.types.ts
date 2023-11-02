export interface DropdownProps {
    items: DropdownItem[]
    onActionChange: (item: DropdownItem) => void
}

export interface DropdownItem {
    id: string | number
    actionName: string
}
