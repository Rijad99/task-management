// React
import { useContext } from 'react';

// CSS
import taskHeaderCSS from './TaskHeader.module.scss';

// Types
import { TaskHeaderProps } from './TaskHeader.types';
import { TooltipPosition } from '../../../../../../../../../../common/components/tooltip/Tooltip.types';

// Components
import Svg from '../../../../../../../../../../common/components/svg/Svg';
import Tooltip from '../../../../../../../../../../common/components/tooltip/Tooltip';
import TaskStatus from '../task-status/TaskStatus';
import TaskCategories from '../task-categories/TaskCategories';

// Icons
import { priorityIcon } from '../../../../../../../../../../common/icons/icons';

// Utils
import { getPriorityIconColor } from '../../utils/utils';

// Context
import { LocalizationContext } from '../../../../../../../../../../common/context/LocalizationContext';

function TaskHeader({ title, priority, status, categories }: TaskHeaderProps) {
  const { localization } = useContext(LocalizationContext);

  const priorityIconColor = getPriorityIconColor(priority);

  const getPriorityText = () => {
    switch (priority) {
      case 1:
        return {
          priority: 'Low Priority',
          localization: localization.lowPriority,
        };

      case 2:
        return {
          priority: 'Medium Priority',
          localization: localization.mediumPriority,
        };

      case 3:
        return {
          priority: 'High Priority',
          localization: localization.highPriority,
        };
    }
  };

  return (
    <div className={taskHeaderCSS.header}>
      <TaskCategories taskCategories={categories} />
      <div className={taskHeaderCSS.info}>
        <Tooltip
          text={getPriorityText()!.localization}
          position={TooltipPosition.TOP}
          tooltipClasses={taskHeaderCSS[getPriorityText()!.priority.split(' ').join('').toLowerCase()]}
        >
          <Svg
            path={priorityIcon}
            width="17"
            height="14"
            viewBox="0 0 17 14"
            color={priorityIconColor}
            additionalClasses={taskHeaderCSS.priorityIcon}
          />
        </Tooltip>
        <h4 className={taskHeaderCSS.title}>{title}</h4>
        <TaskStatus status={status} />
      </div>
    </div>
  );
}

export default TaskHeader;
