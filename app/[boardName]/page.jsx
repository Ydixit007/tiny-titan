"use client";
import AddBoard from "@/components/AddBoard";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Share } from "iconsax-react";
import TodoCard from "@/components/TodoCard";
import { useEffect, useState } from "react";
import { appServices } from "@/actions/actions";
import AddTodo from "@/components/AddTodo";

export default function page({ params }) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const [todos, setToDos] = useState([]);

  if (path.startsWith("/addBoard")) {
    return (
      <main>
        <AddBoard />
      </main>
    );
  }

  if (path.startsWith("/addTodo")) {
    return (
      <main>
        <AddTodo />
      </main>
    );
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const data = appServices().readDataFromLocal() || [];
    if (data) {
      const currentBoard = data.filter((board) => {
        return board.boardName === params.boardName;
      });
      if (currentBoard.length >= 1) {
        const tasks = currentBoard[0].toDos || [];
        // const sortedTasks = tasks.sort((a, b) => (a.isCompleted - b.isCompleted));
        setToDos(tasks);
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ delay: 0.1 }}
        className="w-full h-screen flex justify-start items-start flex-col px-8 mr-8"
      >
        <div className="heading mt-8">
          <h1 className="text-lighterGrey text-2xl font-semibold">
            Tiny-Titan
          </h1>
          <p className="text-grey2 text-lg">
            Empowers you to achieve big things with small steps.
          </p>
        </div>
        <div className="board-Name text-xl my-6 flex justify-between w-full items-center">
          <h3 className="text-md font-semibold text-lighterGrey">
            {params.boardName.toString()}
          </h3>

          <Share
            className="text-grey2 cursor-pointer hidden"
            size="24"
            variant="Bold"
          />
        </div>
        <div className="cards-container flex flex-wrap gap-4 overflow-y-auto max-sm:justify-center">
          {todos &&
            todos.map((todo, index) => {
              return (
                <TodoCard
                  key={index}
                  index={index}
                  title={todo.toDoTitle}
                  description={todo.toDoDescription}
                  isCompleted={todo.isCompleted}
                  isAdd={false}
                  updateState={getData}
                  boardIndex={searchParams.get("boardIndex") || 0}
                />
              );
            })}
          <TodoCard
            updateState={setToDos}
            boardIndex={searchParams.get("boardIndex") || 0}
            boardName={params.boardName}
            isAdd={true}
          />
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
