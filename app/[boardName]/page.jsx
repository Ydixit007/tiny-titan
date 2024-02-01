"use client";
import AddBoard from "@/components/AddBoard";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Share } from "iconsax-react";
import TodoCard from "@/components/TodoCard";
import { useEffect, useRef, useState } from "react";
import { appServices } from "@/actions/actions";
import AddTodo from "@/components/AddTodo";
import EditBoard from "@/components/EditBoard";
import EditTodo from "@/components/EditTodo";
import html2canvas from "html2canvas";

export default function page({ params }) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const boardImgRef = useRef(null);
  const [todos, setToDos] = useState([]);
  const [captureMode, setCaptureMode] = useState(false);

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

  if (path.startsWith("/editBoard")) {
    return (
      <main>
        <EditBoard />
      </main>
    );
  }

  if (path.startsWith("/editTodo")) {
    return (
      <main>
        <EditTodo />
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

  const handleConvertAndCopy = async () => {
    try {
      const canvas = await html2canvas(boardImgRef.current);
      canvas.toBlob(async (blob) => {
        if (blob) {
          // Copy image blob to clipboard
          const clipboardData = new ClipboardItem({ "image/png": blob });
          await navigator.clipboard.write([clipboardData]);
          alert("Image copied to clipboard!");
          setCaptureMode(false);
        } else {
          console.error("Error creating image blob.");
          setCaptureMode(false);
        }
      }, "image/png");
    } catch (error) {
      console.error("Error converting and copying image:", error);
      setCaptureMode(false);
    }
  };

  useEffect(() => {
    if (captureMode === true) {
      handleConvertAndCopy();
    }
  }, [captureMode]);

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
            onClick={() => {
              setCaptureMode(true);
            }}
            className="text-grey2 cursor-pointer"
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
                  boardName={params.boardName}
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
        <div className="img-container min-w-[25%] opacity-0">
          {captureMode && (
            <div
              ref={boardImgRef}
              className="boardImage bg-greyDarK flex flex-col justify-center items-center px-8 pt-1 pb-4 gap-4"
            >
              <h1 className="text-2xl font-semibold text-lighterGrey mb-2">
                {params.boardName.toString()}
              </h1>
              <div className="cards-container flex flex-wrap gap-4 overflow-y-auto justify-center items-center">
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
                        boardName={params.boardName}
                        boardIndex={searchParams.get("boardIndex") || 0}
                      />
                    );
                  })}
              </div>
              <p className="text-sm text-lightGrey mb-1">Made with tiny-titan.vercel.app</p>
            </div>
          )}
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
