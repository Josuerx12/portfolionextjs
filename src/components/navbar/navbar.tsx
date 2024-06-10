"use client";
import React from "react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { handleScrollTo } from "@/hooks/useScroll";

const GV = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const list = ["home", "about", "portfolio", "experience", "contact"];
  return (
    <>
      <nav className="fixed w-full h-20 bg-neutral-950 text-white flex justify-between px-4 items-center z-20 drop-shadow-lg">
        <h1
          className={GV.className + " " + "text-2xl md:text-4xl cursor-pointer"}
          title="Portfolio: Go to Homepage"
        >
          JosueCarvalho
        </h1>

        <ul className="hidden md:flex gap-3">
          {list.map((value, i) => (
            <li
              className="tracking-wider capitalize cursor-pointer text-lg text-gray-400 hover:scale-110 hover:text-white duration-200 ease-linear before:duration-200 hover:before:w-full before:w-0 before:absolute relative before:h-[2px] before:bg-white before:bottom-0"
              key={i}
              onClick={() => {
                setMobileOpen(false);
                handleScrollTo(value);
              }}
            >
              {value}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </nav>

      <ul
        className={`fixed h-screen bg-neutral-900 w-full flex duration-200 ease-linear flex-col justify-center items-center z-10 ${
          mobileOpen ? "top-0" : "-top-full"
        }`}
      >
        {list.map((value, i) => (
          <li
            className="tracking-wider capitalize cursor-pointer text-lg text-gray-400 hover:scale-110 hover:text-white duration-200 ease-linear"
            key={i}
            onClick={() => {
              setMobileOpen(false);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
