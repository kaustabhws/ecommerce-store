"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HamburgerProps {
  data: Category[];
}

const Hamburger: React.FC<HamburgerProps> = ({ data }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <div>
        {isMenuOpen ? (
          <X
            className="cursor-pointer h-9 w-9 hamburger transition-opacity duration-300 ease-in-out hover:opacity-70"
            onClick={toggleMenu}
          />
        ) : (
          <Menu
            className="cursor-pointer h-9 w-9 hamburger transition-opacity duration-300 ease-in-out hover:opacity-70"
            onClick={toggleMenu}
          />
        )}
      </div>
      {isMenuOpen && (
        <div className="fixed top-16 left-0 h-[100vh] w-[70vw] lg:w-[50vw] z-40 bg-white translate-x-0 min-h-screen flex flex-col gap-y-5 p-10 ham-menu">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-black",
                route.active ? "text-black" : "text-neutral-600"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Hamburger;
