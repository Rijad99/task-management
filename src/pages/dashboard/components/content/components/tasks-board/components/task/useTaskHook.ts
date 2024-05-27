import {useCallback} from "react";

function useTaskHook(onModalOpen: (isModalOpen: boolean) => void) {
  const handleCreateTask = useCallback(() => {
    onModalOpen(true);
  }, [onModalOpen]);

  return { handleCreateTask };
}

export default useTaskHook;
