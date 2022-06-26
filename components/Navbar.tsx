import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {

  /**
   * Item in left side of navbar.
   */
  const navItems = [
    {
      name: "How it works?",
      link: "/",
    },
    {
      name: "Source Code",
      link: "https://github.com/ketanip/private-article-reader",
    },
  ];

  return (
    <nav className="bg-blue-600 py-3 text-white mb-10">
      
      {/* Flex cover */}
      <div className="max-w-7xl flex lg:items-center md:items-center sm:items-start lg:flex-row md:flex-row flex-col gap-5 mx-auto px-5">

        {/* Navbar Logo */}
        <span className="flex-1 text-4xl font-bold">
          Private article Reader
        </span>

        {/* Navbar left-side links */}
        <div className="flex gap-6 text-2xl">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <span className="hover:underline hover:cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
};
