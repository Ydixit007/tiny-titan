"use client";
import { appServices } from "@/actions/actions";
import { ArrowSquareLeft } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditTodoModal() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const goBack = () => {
    router.back();
  };

  const saveTodo = () => {
    if (title !== "") {
      const query = `boardIndex=${searchParams.get("boardIndex")}`;
      const boardIndex = searchParams.get("boardIndex");
      const index = searchParams.get("index");
      appServices().editTodo(boardIndex, index, title, Description);
      router.push(`/${searchParams.get("boardName")}?${query}`)
    }
  };

  useEffect(() => {
    setTitle(searchParams.get("toDoTitle") || "");
    setDescription(searchParams.get("toDoDescription") || "");
  }, []);

  return (
    <div className="card flex flex-col w-[30%] gap-4 px-8 py-4 rounded-xl text-lightGrey bg-primary border-2 border-grey2">
      <div className="heading flex justify-between">
        <h1 className="text-lg">Edit to-do</h1>
        <ArrowSquareLeft
          className="cursor-pointer"
          onClick={goBack}
          size="24"
          color="#636366"
        />
      </div>
      <input
        placeholder="To-do title"
        className="bg-grey text-lighterGrey outline-none text-md px-4 py-2 rounded-md"
        value={title}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        placeholder="To-do Description"
        className="bg-grey text-lighterGrey outline-none text-md px-4 py-2 rounded-md"
        value={Description}
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        className="bg-lightGrey rounded-md text-primaryDark font-semibold py-1 flex-grow-0"
        onClick={saveTodo}
      >
        Add
      </button>
    </div>
  );
}
