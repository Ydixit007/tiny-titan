"use client";
import { Edit, Trash } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BoardTile({
  title,
  className,
  to,
  BoardId,
  deleteBoard,
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${to}`);

  if (title == "+") {
    return (
      <Link
        href={{ pathname: `/${to}`, query: { boardIndex: BoardId } }}
        className={`boardTile relative w-full h-[38px] flex-shrink-0 rounded-lg bg-grey text-center border-2 border-grey flex justify-center items-center text-md font-semibold text-lightGrey cursor-pointer ${className} duration-200  hover:bg-greyDarK ${
          isActive ? "border-lighterGrey" : "border-grey"
        }`}
      >
        {title}{" "}
      </Link>
    );
  }

  return (
    <Link
      href={{ pathname: `/${to}`, query: { boardIndex: BoardId } }}
      className={`boardTile relative w-full h-[38px] flex-shrink-0 rounded-lg bg-grey text-center border-2 border-grey flex justify-center items-center text-md font-semibold text-lightGrey cursor-pointer ${className} duration-200  hover:bg-greyDarK ${
        isActive ? "border-lighterGrey" : "border-grey"
      }`}
    >
      {title}
      <span className="deleteBoard text-lightGrey absolute right-8 hidden">
        <Link
          href={{
            pathname: `/editBoard`,
            query: { boardIndex: BoardId, boardName: title },
          }}
        >
          <Edit size="18" />
        </Link>
      </span>
      <span
        onClick={() => {
          deleteBoard(BoardId);
        }}
        className="deleteBoard text-lightGrey absolute right-2 hidden"
      >
        <Trash size="18" />
      </span>
    </Link>
  );
}
