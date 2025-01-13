import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary">
      {/* <h1>Header</h1>
        <nav className='flex justify-between al'>
            <Link href="/">Home</Link>
            <Link href="/products">products</Link>
            <Link href="/chris">chris</Link>
        </nav> */}

      <div className="navbar bg-primary gap-12">
        <div className="width-[20%]">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="hover:bg-secondary hover:text-white">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:bg-secondary hover:text-white">
                <Link href={"/products"}>Products</Link>
              </li>
              <li className="hover:bg-secondary hover:text-white">
                <Link href={"/users"}>Users</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center width-[80%] justify-start">
          <Link href={"/"} className="btn btn-ghost text-xl text-white">
            Next Typescript Tailwind Daisyui App
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
