"use client";
import { appServices } from "@/actions/actions";
import { ArrowSquareLeft } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditBoardModal() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const goBack = () => {
    router.back();
  };

  const saveBoard = () => {
    if (title !== "") {
      const index = searchParams.get("boardIndex") || 0;
      appServices().editBoard(index , title.replaceAll(" ", "-"));
      const query = `boardIndex=${index}`;
      router.push(`/${title.replaceAll(" ", "-")}?${query}`);
    }
  };

  useEffect(() => {
    setTitle(searchParams.get("boardName") || "");
  }, []);

  return (
    <div className="card flex flex-col w-[30%] gap-4 px-8 py-4 rounded-xl text-lightGrey bg-primary border-2 border-grey2">
      <div className="heading flex justify-between">
        <h1 className="text-lg">Edit Board</h1>
        <ArrowSquareLeft
          className="cursor-pointer"
          onClick={goBack}
          size="24"
          color="#636366"
        />
      </div>
      <input
        placeholder="Board name"
        className="bg-grey text-lighterGrey outline-none text-md px-4 py-2 rounded-md"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        className="bg-lightGrey rounded-md text-primaryDark font-semibold py-1 flex-grow-0"
        onClick={saveBoard}
      >
        Add
      </button>
    </div>
  );
}
