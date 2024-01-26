"use client";
import { CloseSquare, Menu, Trash } from "iconsax-react";
import BoardTile from "./BoardTile";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { appServices } from "@/actions/actions";
import { usePathname, useRouter } from "next/navigation";
import Pomodoro from "./Pomodoro";

export default function Sidebar({}) {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [boards, setBoards] = useState([]);
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    getData();
  }, [path]);

  const getData = () => {
    const data = appServices().readDataFromLocal() || [];
    setBoards(data);
  };

  const toggle = () => {
    setsidebarOpen((prev) => !prev);
  };

  const deleteAll = () =>{
    appServices().deleteDataFromLocal();
    router.push("/");
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: "48px", opacity: 0 }}
        animate={{ width: sidebarOpen ? "256px" : "48px", opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="h-[90%] bg-primaryDark rounded-2xl m-6 p-3 flex-shrink-0 z-50"
      >
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="h-full"
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
            <div className="heads flex justify-between items-center">
              <h1 className="my-2 text-lg text-lightGrey">Your Boards</h1>
              <Trash
                className={"cursor-pointer"}
                onClick={deleteAll}
                size="24"
                color="#636366"
              />
            </div>
            <div className="boards flex flex-col gap-3 h-[40%] max-h-[40%] overflow-y-scroll pr-1">
              {boards.map((board, index) => {
                return (
                  <BoardTile
                    key={board.id}
                    BoardId={index}
                    to={board.boardName}
                    title={board.boardName}
                  />
                );
              })}
            </div>
            <BoardTile className={"mt-3 pr-2"} title={"+"} to={"addBoard"} />
            <h1 className="my-2 text-lg text-lightGrey">Pomodoro</h1>
            <Pomodoro />
          </motion.div>
        )}
        {!sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            onClick={toggle}
            className="sidebar-closed cursor-pointer mt-1 z-50"
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
