import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <header className="w-full h-24 bg-red-200">
        <nav className="flex flex-row justify-around items-center p-3">
          <div className="text-center font-bold font-serif cursor-pointer">
            <Link to={"/"}>
              <h1 className="text-5xl">Logo</h1>
            </Link>
          </div>
          <div className="flex cursor-pointer text-center font-sans text-[20px] gap-x-6">
            <Link to={"/home"}> Home</Link>
            <Link to={"/about"}> About</Link>
            <Link to={"/product"}> Products</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
