// Components
import Button from '../../../../../common/components/button/Button';
import Svg from '../../../../../common/components/svg/Svg';

// CSS
import utilsCSS from '../../../../../common/scss/utils.module.scss';

// ENUMS
import { ButtonSize, ButtonType } from '../../../../../common/components/button/Button.types';
import { SvgColors, SvgFillRule, SvgClipRule } from '../../../../../common/components/svg/Svg.types';

// Icons
import { messageIcon } from '../../../../../common/icons/icons';

function MessageItem() {
  return (
    <Button size={ButtonSize.SMALLEST} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={utilsCSS.mr1_5}>
      <Svg
        path={messageIcon}
        width="21"
        height="19"
        viewBox="0 -1 19 22"
        color={SvgColors.NEUTRAL}
        fillRule={SvgFillRule.EVENODD}
        clipRule={SvgClipRule.EVENODD}
      />
    </Button>
  );
}

export default MessageItem;
