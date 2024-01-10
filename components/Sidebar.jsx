"use client";
import { CloseSquare, Menu } from "iconsax-react";
import BoardTile from "./BoardTile";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { appServices } from "@/services/services";

export default function Sidebar() {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const data = appServices().readDataFromLocal();
    if(data){
        setBoards(data);
    }
  }, [])
  

  const toggle = () => {
    setsidebarOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={{ width: sidebarOpen ? "256px" : "48px" }}
        transition={{ duration: 0.2 }}
        className="h-[90%] bg-primaryDark rounded-2xl m-6 p-3"
      >
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="heading text-lightGrey flex items-center border-b-2 border-grey">
              <CloseSquare
                onClick={toggle}
                size={24}
                color="#AEAEB2"
                className="mb-2 cursor-pointer"
              />
              <h1 className="text-2xl text-center flex-1 mb-2">Menu</h1>
            </div>
            <h1 className="my-2 text-lg text-lightGrey">Your Boards</h1>
            <div className="boards flex flex-col gap-3 max-h-[40%]">
              {boards.map((board)=>{return <BoardTile key={board.id} to={board.boardName} title={board.boardName}/>})}
            </div>
            <BoardTile className={"mt-3"} title={"+"} to={"add"} />
            <h1 className="my-2 text-lg text-lightGrey">Pomodoro</h1>
          </motion.div>
        )}
        {!sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            onClick={toggle}
            className="sidebar-closed cursor-pointer mt-1"
          >
            <div className="">
              <Menu size="24" color="#AEAEB2" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}