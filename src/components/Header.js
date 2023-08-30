"use client";
import { setCookie } from "@/lib/setCookie";
import Link from "next/link";
import React from "react";

const Header = () => {
  const setCookieHandler = () => {
    setCookie();
  };
  return (
    <div>
      <header className="p-4 bg-gray-800 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link href="/" className="flex items-center p-2">
            CookieApp
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                href="/"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <button
                onClick={setCookieHandler}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Set Cookie
              </button>
            </li>
            <li className="flex">
              <Link
                href="/displaycookie"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Show Cookie
              </Link>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
