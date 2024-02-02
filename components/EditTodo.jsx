import { motion } from "framer-motion";
import EditTodoModal from "./EditTodoModal";

export default function EditTodo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="add-board h-screen w-full flex absolute top-0 left-0 justify-center items-center backdrop-blur-sm"
    >
      <EditTodoModal />
    </motion.div>
  );
}
