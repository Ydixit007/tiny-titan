"use client";
import AddBoard from "@/components/AddBoard";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Share } from "iconsax-react";
import TodoCard from "@/components/TodoCard";
import { useEffect, useState } from "react";
import { appServices } from "@/actions/actions";

export default function page({ params }) {
  const path = usePathname();
  const [ToDos, setToDos] = useState([]);

  if (path.startsWith("/add")) {
    return (
      <main>
        <AddBoard />
      </main>
    );
  }

  useEffect(() => {
    const data = appServices().readDataFromLocal();
    if(data){
      console.log(data.filter);
    }
  }, [])
  
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
            {params.boardName}
          </h3>
          
          <Share className="text-grey2 cursor-pointer" size="24" variant="Bold" />
        </div>
        <div className="cards-container flex flex-wrap gap-4">
          {}
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
