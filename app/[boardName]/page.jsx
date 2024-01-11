"use client";
import AddBoard from "@/components/AddBoard";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function page({ params }) {
  const path = usePathname();

  if (path.startsWith("/add")) {
    return (
      <main>
        <AddBoard />
      </main>
    );
  }
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{delay: 0.1}}
      >
        Hi , From {params.boardName}
      </motion.main>
    </AnimatePresence>
  );
}
