// React
import { useCallback } from 'react';

// ENUMS
import { UserStatus, StatusColor } from '../../../pages/page-content/header/components/user/User.types';

function useUserStatusHook() {
  const getStatus = useCallback((status: string) => {
    switch (status) {
      case UserStatus.ONLINE:
        return StatusColor.GREEN;

      case UserStatus.OFFLINE:
        return StatusColor.GRAY;

      case UserStatus.AWAY:
        return StatusColor.ORANGE;

      case UserStatus.BUSY:
      case UserStatus.DO_NOT_DISTURB:
      case UserStatus.IN_A_MEETING:
        return StatusColor.RED;

      case UserStatus.OUT_OF_OFFICE:
        return StatusColor.PURPLE;
    }
  }, []);

  return {
    getStatus,
  };
}

export default useUserStatusHook;
