// Types
import { Option } from "../../../../../../../../common/components/select/components/options/Options.types"



export interface TaskStatusProps {
    status: Option
    onTaskStatusChange: (status: Option) => void
}
