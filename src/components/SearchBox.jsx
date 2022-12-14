import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ query, handleSearch}) => {
  return (
    <form className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
      <AiOutlineSearch size={25} />
      <input
        className="bg-transparent p-2 w-full focus:outline-none"
        type="text"
        placeholder="Search characters"
        value={query}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBox;
