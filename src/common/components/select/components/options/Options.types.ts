export interface OptionsProps {
    options: Option[]
    onOptionChange: (option: Option) => void
}

export interface Option {
    id: string | number | null
    value: string
    icon?: string
}
