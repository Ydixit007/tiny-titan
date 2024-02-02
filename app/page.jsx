"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ delay: 0.1 }}
      className="w-full h-screen flex justify-start items-start ml-4 max-md:ml-0 max-md:p-2"
    >
      <div className="heading mt-8">
        <h1 className="text-lighterGrey text-2xl font-semibold">Tiny-Titan</h1>
        <p className="text-grey2 text-md">
          Empowers you to achieve big things with small steps.
        </p>
      </div>
      <div className="cards-container"></div>
    </motion.main>
  );
}
