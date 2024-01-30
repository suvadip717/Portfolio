import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="h-20 w-full bg-slate-900 flex text-white items-center fixed px-4 justify-between">
      <div className="text-5xl font-signature pl-2">Suvadip</div>
      <ul className="hidden md:flex">
        {link.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <MdClose size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {link.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white"
            >
              {link}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Navbar;