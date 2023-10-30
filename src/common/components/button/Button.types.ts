export interface ButtonProps {
    size: ButtonSize
    type: ButtonType
    additionalClasses?: string
    onClick: (e?: any) => void
}

export enum ButtonSize {
    SMALL = 'small',
    LARGE = 'large'
}

export enum ButtonType {
    PRIMARY = 'primary',
    DISABLED = 'disabled'
}
