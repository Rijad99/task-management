function useTaskHook(onModalOpen: (isModalOpen: boolean) => void) {
  const handleCreateTask = () => {
    onModalOpen(true);
  };

  return { handleCreateTask };
}

export default useTaskHook;
