// CSS
import buttonCSS from './Button.module.scss'

// ENUMS
import { ButtonSize, ButtonType } from './Button.types'



export const getButtonCSS = (size: ButtonSize, type: ButtonType) => {
    let buttonSize = ''
    let buttonType = ''

    switch (size) {

        case 'small':
            buttonSize = ButtonSize.SMALL
            break

        case 'large':
            buttonSize = ButtonSize.LARGE
            break
    }

    switch (type) {

        case 'primary':
            buttonType = ButtonType.PRIMARY
            break

        case 'disabled':
            buttonType = ButtonType.DISABLED
            break
    }

    return `${buttonCSS[buttonSize]} ${buttonCSS[buttonType]}`
}
