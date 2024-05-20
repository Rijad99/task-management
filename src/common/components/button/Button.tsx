// React
import { PropsWithChildren } from 'react';

// CSS
import buttonCSS from './Button.module.scss';

// Types
import { ButtonProps } from './Button.types';

// Button hook
import useButtonHook from './useButtonHook';

function Button(props: PropsWithChildren<ButtonProps>) {
  const { getButtonCSS } = useButtonHook();

  const buttonStyle = getButtonCSS(props.size, props.type);

  return (
    <button className={`${buttonCSS.button} ${buttonStyle} ${props?.additionalClasses && props.additionalClasses}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
