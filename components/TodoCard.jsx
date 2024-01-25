import Link from "next/link";

export default function TodoCard({
  title,
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
        href={{ pathname: "/addTodo", query: { boardIndex: boardIndex, boardName: boardName } }}
      >
        +
      </Link>
    );
  }
  return (
    <div className="todocard flex items-center flex-col h-44 w-44 bg-grey rounded-xl cursor-pointer border-4 p-2">
      <h1 className="font-semibold text-2xl mb-2">{title}</h1>
      <p className="text-lightGrey text-lg">{description}</p>
    </div>
  );
}
