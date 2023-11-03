export interface OptionsProps {
    options: Option[]
    onOptionChange: (option: Option) => void
}

export interface Option {
    id: string | number
    value: string
    icon?: React.ReactElement
}
