export interface FormControlProps {
    type: string
    name: string
    placeholder: string
    value: string
    id?: string
    label?: string
    icon?: string
    disabled?: boolean
    additionalClasses?: string
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
