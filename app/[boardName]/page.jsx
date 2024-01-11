"use client";
import AddBoard from "@/components/AddBoard";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function page({ params }) {
  const path = usePathname();

  if (path.startsWith("/add")) {
    return (
      <main>
        <AnimatePresence key={path}>
          <AddBoard />
        </AnimatePresence>
      </main>
    );
  }
  return (
    <main>
      Hi , From {params.boardName}
      <button onClick={() => {}}> Go back</button>
    </main>
  );
}
