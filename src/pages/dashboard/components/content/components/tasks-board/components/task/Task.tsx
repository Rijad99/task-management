// Framer motion
import { motion } from 'framer-motion';

// CSS
import taskCSS from './Task.module.scss';

// Types
import { TaskProps } from './Task.types';

// Components
import TaskHeader from './components/task-header/TaskHeader';
import TaskContent from './components/task-content/TaskContent';
import TaskFooter from './components/task-footer/TaskFooter';

function Task({ task }: TaskProps) {
  const taskVariant = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={taskCSS.task}
      variants={taskVariant}
      whileHover={{
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.04)',
      }}
    >
      <TaskHeader title={task.title} priority={task.priority} status={task.status} categories={task.categories} />
      <TaskContent description={task.description} fromDate={task.fromDate} toDate={task.toDate} />
      <TaskFooter participants={task.participants} />
    </motion.div>
  );
}

export default Task;
