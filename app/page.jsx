"use client";
import SquareBox, { ManySquares } from "@/components/Squares";
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
        <div className="heading mt-8">
          <h1 className="text-lighterGrey text-2xl font-semibold">
            Tiny-Titan
          </h1>
          <p className="text-grey2 text-md">
            Empowers you to achieve big things with small steps.
          </p>
        </div>
        <div className="bg-cards-container w-full h-full relative overflow-hidden flex justify-center items-center">
          <ManySquares />
          <div className="texts w-full h-full absolute top-0 left-0 z-50 flex flex-col text-center justify-center items-center">
            <h1 className="text-4xl text-lighterGrey">Ultimate Productivity Companion</h1>
            <p className="px-12 mt-4 text-lightGrey">
              Tiny Titan is a powerful web application designed to streamline
              your workflow and boost productivity. Whether you're managing
              tasks, organizing projects, or collaborating with team members,
              Tiny Titan has got you covered. Say goodbye to cluttered to-do
              lists and hello to seamless productivity.
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
