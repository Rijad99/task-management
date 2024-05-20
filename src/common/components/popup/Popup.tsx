// React
import { forwardRef, PropsWithChildren, RefObject } from 'react';

// CSS
import popupCSS from './Popup.module.scss';

// Framer motion
import { motion } from 'framer-motion';

// Types
import { PopupProps } from './Popup.types';
import usePopupHook from './usePopupHook';

const Popup = forwardRef<HTMLDivElement, PropsWithChildren<PopupProps>>((props, ref: RefObject<HTMLDivElement>) => {
  const { popupVariant } = usePopupHook(ref, props.onOutsideClickPopupClose);

  const animatePopup = props.isPopupShown ? popupVariant.visible : popupVariant.hidden;

  return (
    <motion.div
      ref={ref}
      className={popupCSS.popupContainer}
      initial={{
        opacity: 0,
        transform: 'translateY(-10px) scale(0.8)',
        pointerEvents: 'none',
      }}
      animate={animatePopup}
      variants={popupVariant}
    >
      {props.children}
    </motion.div>
  );
});

export default Popup;
