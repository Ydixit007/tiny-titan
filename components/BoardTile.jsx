"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BoardTile({ title, className, to }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/" + to);
  
  return (
    <Link
      href={to}
      className={`w-full h-[38px] flex-shrink-0 rounded-lg bg-grey text-center border-2 border-grey flex justify-center items-center text-md font-semibold text-lightGrey cursor-pointer ${className} duration-200  hover:bg-greyDarK ${
        isActive ? "border-lighterGrey" : "border-grey"
      }`}
    >
      {title}
    </Link>
  );
}
