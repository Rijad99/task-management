// React
import { useCallback } from 'react';

// CSS
import selectedOptionCSS from './SelectedOption.module.scss';

// Types
import { SelectedOptionProps } from './SelectedOption.types';

// Icons
import { arrowIcon } from '../../../../icons/icons';

// Components
import Svg from '../../../svg/Svg';
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../svg/Svg.types';

function SelectedOption({ selectedOption, isSelectOpen, placeholder, selectedOptionAdditionalClasses, onSelectOpen }: SelectedOptionProps) {
  const handleSelectOpen = useCallback(() => {
    onSelectOpen();
  }, [onSelectOpen]);

  const renderIcon = selectedOption.icon && <img src={selectedOption.icon} />;
  const renderValue = selectedOption.value ? selectedOption.value : placeholder;

  return (
    <div
      className={`${selectedOptionCSS.selectedOptionContainer} ${selectedOptionAdditionalClasses ? selectedOptionAdditionalClasses : ''}`}
      onClick={handleSelectOpen}
    >
      <div className={`${selectedOptionCSS.option} ${selectedOption && selectedOptionCSS.placeholder}`}>
        <div className={selectedOptionCSS.selectedOption}>
          {renderIcon}
          {renderValue}
        </div>
        <Svg
          path={arrowIcon}
          width="8"
          height="6"
          strokeWidth="1.5"
          viewBox="0 0 12 7"
          stroke={SvgColors.BLACK}
          strokeLinecap={SvgStrokeLineCap.ROUND}
          strokeLinejoin={SvgStrokeLineJoin.ROUND}
          additionalClasses={`${isSelectOpen ? selectedOptionCSS.rotateArrow : selectedOptionCSS.arrow}`}
        />
      </div>
    </div>
  );
}

export default SelectedOption;
