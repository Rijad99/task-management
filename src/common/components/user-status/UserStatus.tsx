// React
import { useContext } from 'react';

// Status hook
import useUserStatusHook from './useUserStatusHook';

// Types
import { StatusProps } from './UserStatus.types';

// CSS
import statusCSS from './UserStatus.module.scss';

// Context
import { LocalizationContext } from '../../context/LocalizationContext';

function UserStatus({ status, showStatusText, additionalClasses, onStatusDropdownOpen }: StatusProps) {
  const { getStatus } = useUserStatusHook();

  const { localization } = useContext(LocalizationContext);

  const statusColor = getStatus(status);

  const renderStatus = showStatusText && <span className={statusCSS.statusText}>{localization[status]}</span>;

  return (
    <div className={`${statusCSS.statusContainer} ${additionalClasses ? additionalClasses : ''}`}>
      <div className={`${statusCSS.circle} ${statusCSS.status} ${statusCSS} ${statusCSS[statusColor!]}`} onClick={onStatusDropdownOpen}></div>
      {renderStatus}
    </div>
  );
}

export default UserStatus;
