import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-slate-600">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={handleNav} className="cursor-pointer">
          <FiMenu size={30} color="#ccc" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl px-2 text-white ml-2">
          Rick and Morty
        </h2>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search characters"
        />
      </div>
      {/* Link button */}
      <Link to="/" className="bg-pink-500 text-white hidden md:flex items-center py-2 rounded-full px-4">
        GraphQL API
      </Link>

      {/* Mobile Menu */}
      {/* Overlay */}
      {open ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          open
            ? "fixed top-0 left-0 w-[300px] h-screen bg-slate-700 z-10 duration-300 text-pink-200"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-slate-700 z-10 duration-300 text-pink-200"
        }
      >
        <AiOutlineClose
          onClick={handleNav}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-xl p-4">
          Rick and Morty
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <Link to="/aliens" className="ml-2 text-lg py-4 flex items-center text-white hover:bg-pink-50/50 
            hover:rounded-lg hover:px-5 transition-all duration-400" onClick={() => setOpen(false)}>
              <MdFavorite size={20} className="mr-4" /> Aliens
            </Link>
            <Link to="humans" className="ml-2 text-lg py-4 flex items-center text-white hover:bg-pink-50/50 
            hover:rounded-lg hover:px-5 transition-all duration-400" onClick={() => setOpen(false)}>
              <FaUserFriends size={20} className="mr-4" /> Humans
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
