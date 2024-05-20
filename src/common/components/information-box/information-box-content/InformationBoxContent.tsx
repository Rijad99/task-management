import { InformationBoxContentProps } from './InformationBoxContent.types';
import popupCSS from '../InformationBox.module.scss';

export function InformationBoxContent({ title, description }: InformationBoxContentProps) {
  return (
    <div className={popupCSS.informationBox}>
      <h3 className={popupCSS.title}>{title}</h3>
      <span className={popupCSS.description}>{description}</span>
    </div>
  );
}
