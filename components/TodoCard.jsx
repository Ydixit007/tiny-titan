import { appServices } from "@/actions/actions";
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

  const markTodo = () =>{
    appServices().markTodo(boardIndex, index, !isCompleted, updateState);
  }
  return (
    <div
    onClick={markTodo}
      className={`todocard flex items-center flex-col h-44 w-44 bg-grey rounded-xl cursor-pointer ${
        isCompleted ? "border-0" : "border-4"
      } p-2 overflow-hidden`}
    >
      <p className="text-sm text-lightGrey">{isCompleted? "✅" : ""}</p>
      <h1 className="font-semibold text-2xl mb-2 text-center">{title}</h1>
      <p className="text-lightGrey text-lg text-center">{description}</p>
    </div>
  );
}
