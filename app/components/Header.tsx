"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";

// todo: categories from back
const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Teens", href: "/teens" },
];

const Header: FC = () => {
  const pathname = usePathname();

  const baseClasses = "text-lg font-semibold";
  const notActiveClasses = "text-gray-600 transition duration-100 hover:text-primary";
  const activeClasses = "text-primary";

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Next<span className="text-primary">Shop</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              <Link
                className={`${baseClasses} ${pathname === link.href ? activeClasses : notActiveClasses}`}
                href={link.href}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
