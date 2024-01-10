"use client"

import { appServices } from "@/services/services";
import { useEffect, useState } from "react";

export default function page({ params }) {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const data = appServices().readDataFromLocal();
    if (data) {
      setBoards(data);
    }
  }, []);

  return (
    <div>
      This is {params.boardName}
      <button onClick={() => {
        appServices().addBoard(boards, "Xyz");
      }}>asdasd</button>
    </div>
  );
}
