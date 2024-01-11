"use client";
import { appServices } from "@/actions/actions";
import { ArrowSquareLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddBoardModal() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  const saveBoard = () => {
    if (title !== "") {
      appServices().addBoard(title);
      router.push("/" + title);
    }
  };

  return (
    <div className="card flex flex-col w-[30%] gap-4 px-8 py-4 rounded-3xl text-lightGrey bg-primary border-2 border-grey2">
      <div className="heading flex justify-between">
        <h1 className="text-lg">Add Board</h1>
        <ArrowSquareLeft
          className="cursor-pointer"
          onClick={goBack}
          size="24"
          color="#AEAEB2"
        />
      </div>
      <input
        placeholder="Board name"
        className="bg-grey text-lighterGrey outline-none text-md px-4 py-2 rounded-lg"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        className="bg-lightGrey rounded-lg text-primaryDark font-semibold py-1 flex-grow-0"
        onClick={saveBoard}
      >
        Add
      </button>
    </div>
  );
}
