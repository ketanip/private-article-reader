import React from "react";
import Link from "next/link";
import { FiCompass, FiGithub } from "react-icons/fi";

const nav_items = [
  {
    id: 1,
    label: "How it works ?",
    link: "/",
    icon: <FiCompass />,
  },
  {
    id: 2,
    label: "Source Code",
    link: "https://github.com/ketanip/private-article-reader",
    icon: <FiGithub />,
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-4 border-b-2 lg:flex-row">
      <Link className="flex-1" href="/">
        <h2 className="text-lg font-bold ">Private Article Reader</h2>
      </Link>
      <div className="flex gap-8 ">
        {nav_items.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="flex items-center gap-2"
          >
            {item.icon}{" "}
            <span className="cursor-pointer hover:underline">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
