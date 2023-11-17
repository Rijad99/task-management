// Types
import { Option } from "../../../../../../../../common/components/select/components/options/Options.types"



export interface TaskHeaderProps {
    title: string
    priority: number
    status: Option
    onTaskStatusChange: (status: Option) => void
}
