// React
import { PropsWithChildren } from "react"

// CSS
import buttonCSS from "./Button.module.scss"

// Types
import { ButtonProps } from "./Button.types"

// Utils
import { getButtonCSS } from "./utils"

function Button(props: PropsWithChildren<ButtonProps>) {
  const buttonStyle = getButtonCSS(props.size, props.type)

  return (
    <button
      className={`${buttonCSS.button} ${buttonStyle} ${
        props?.additionalClasses && props.additionalClasses
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
