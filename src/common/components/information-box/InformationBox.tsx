// CSS
import popupCSS from './InformationBox.module.scss';

// Types
import { InformationBoxProps } from './InformationBox.types';

// Components
import { InformationBoxContent } from './information-box-content/InformationBoxContent';

function InformationBox({ title, description }: InformationBoxProps) {
  return (
    <div className={popupCSS.informationBoxContainer}>
      <InformationBoxContent title={title} description={description} />
    </div>
  );
}

export default InformationBox;
