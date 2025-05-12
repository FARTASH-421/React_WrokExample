import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <header className="w-full h-24 bg-red-200">
        <nav className="flex flex-row justify-around items-center p-3">
          <div className="text-center font-bold font-serif cursor-pointer">
            <Link to={"/"} className="no-underline">
              <h1 className="text-5xl  text-green-500 hover:font-bold">Logo</h1>
            </Link>
          </div>
          <div className="flex cursor-pointer text-center font-sans text-[20px] gap-x-8">
            <Link
              to={"/home"}
              className="text-black no-underline hover:font-bold"
            >
              {" "}
              Home
            </Link>
            <Link
              to={"/about"}
              className="no-underline text-black hover:font-bold"
            >
              {" "}
              About
            </Link>
            <Link
              to={"/product"}
              className="no-underline text-black hover:font-bold"
            >
              {" "}
              Products
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
