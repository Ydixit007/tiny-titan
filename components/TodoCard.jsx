import { appServices } from "@/actions/actions";
import { MinusSquare, TickSquare, Trash } from "iconsax-react";
import Link from "next/link";

export default function TodoCard({
  title,
  index,
  description,
  isCompleted,
  updateState,
  isAdd,
  boardIndex,
  boardName,
}) {
  if (isAdd) {
    return (
      <Link
        className="todocard flex justify-center items-center flex-col h-44 w-44 bg-grey rounded-xl cursor-pointer border-4 text-5xl font-semibold"
        href={{
          pathname: "/addTodo",
          query: { boardIndex: boardIndex, boardName: boardName },
        }}
      >
        +
      </Link>
    );
  }

  const markTodo = () => {
    appServices().markTodo(boardIndex, index, !isCompleted, updateState);
  };
  return (
    <div
      className={`todocard relative flex items-center flex-col h-44 w-44 bg-grey rounded-xl cursor-pointer ${
        isCompleted ? "border-0" : "border-4"
      } p-2 overflow-hidden pb-10`}
    >
      <p className="text-sm text-lightGrey">{isCompleted ? "✅" : ""}</p>
      <h1 className="font-semibold text-xl mb-2 text-center">{title}</h1>
      <p className="text-lightGrey text-sm text-center">{description}</p>
      {isCompleted ? (
        <MinusSquare
          onClick={markTodo}
          size="20"
          className="text-lightGrey absolute right-9 bottom-2 opacity-100"
        />
      ) : (
        <TickSquare
          onClick={markTodo}
          size="20"
          className="text-lightGrey absolute right-9 bottom-2 opacity-100"
        />
      )}
      <Trash
        onClick={() => {
          console.log("del");
        }}
        size={20}
        className="text-lightGrey absolute right-2 bottom-2 opacity-100  hover:opacity-100"
      />
    </div>
  );
}
