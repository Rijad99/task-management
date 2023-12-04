// Framer motion
import { motion } from "framer-motion";

// CSS
import tasksCSS from "./Tasks.module.scss";

// Components
import Task from "../task/Task";

// Types
import { TasksProps } from "./Tasks.types";

function Tasks({ tasks }: TasksProps) {
  const tasksContainerVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={tasksCSS.tasksContainer}
      initial="hidden"
      animate={tasks.length > 0 && "visible"}
      variants={tasksContainerVariant}
    >
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </motion.div>
  );
}

export default Tasks;
