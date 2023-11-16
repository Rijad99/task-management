// CSS
import dueDateCSS from './DueDate.module.scss'

// Icons
import { deadlineIcon } from "../../../../../../../../common/icons/icons"

// Components
import Svg from "../../../../../../../../common/components/svg/Svg"

// ENUMS
import { SvgColors } from "../../../../../../../../common/components/svg/Svg.types"

// Types
import { DueDateProps } from "./DueDate.types"

// Utils
import { formatDueDate } from "../../../../../../../../common/utils/date"



function DueDate({ fromDate, toDate }: DueDateProps) {
    const dueDate = formatDueDate(fromDate, toDate)

    return (
        
        <div className={dueDateCSS.dueDate}>
            <Svg path={deadlineIcon} width='19' height='22' viewBox='0 0 19 22' color={SvgColors.ORANGE} />
            <span className={dueDateCSS.deadline}>Deadline</span><span>:</span>
            <span className={dueDateCSS.date}>{dueDate}</span>
        </div>
    )
}

export default DueDate
