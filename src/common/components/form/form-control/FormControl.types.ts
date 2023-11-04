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
    onInput: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
