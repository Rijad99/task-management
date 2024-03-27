// Components
import Modal from "../../../../common/components/modal/Modal"

// Types
import {TaskFormProps} from "./TaskForm.types"

function TaskForm({ isTaskFormOpen, onModalClose }: TaskFormProps) {

  return (
    <Modal isModalShown={isTaskFormOpen} onModalClose={onModalClose}>

    </Modal>
  )
}

export default TaskForm
