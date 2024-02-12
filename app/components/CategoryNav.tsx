import { FC } from "react";
import Link from "next/link";

const CategoryNav: FC = () => {
  const linkRender = (path: string) => (
    <Link
      href={`/${path.toLowerCase()}`}
      className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
    >
      {path}
    </Link>
  );

  return (
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        {/* todo: categories from back! */}
        {linkRender("Men")}
        {linkRender("Women")}
        {linkRender("Teens")}
      </div>
    </div>
  );
};

export default CategoryNav;
