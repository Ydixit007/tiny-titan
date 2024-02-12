"use client";
import Homepage from "@/components/Homepage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ delay: 0.1 }}
      className="w-full h-[92.5%] flex flex-col justify-start items-start ml-1 px-8 max-md:ml-0 max-md:p-2"
    >
      <div className="cards-container w-full h-full overflow-hidden flex flex-col justify-start items-start">
        <div className="heading flex flex-col gap-2">
          <h1 className="text-lighterGrey text-2xl font-semibold">
            Tiny-Titan
          </h1>
          <p className="text-grey2 text-md">
            Empowers you to achieve big things with small steps.
          </p>
        </div>
        <Homepage />
      </div>
    </motion.main>
  );
}
