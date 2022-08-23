import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

const Card = ({ character }) => {
  return (
    <div className="bg-white text-gray-700 w-80 min-h-[5rem] rounded-md shadow-lg overflow-hidden">
      <img src={character.image} alt="product" className="w-full" />
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            {character.species}
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            {character.gender}
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap"
          title="Best Headphone Ever"
        >
          {character.name}
        </h2>

        <div className="flex justify-between items-center mt-1 gap-2">
          <span className={`${character.status === "Alive" ? "bg-green-400" : "bg-red-400"}
          px-2 py-0.5 rounded-md text-xs text-white`} >
            {character.status}
          </span>

          <span className="flex justify-between items-center px-2 py-0.5 rounded-md text-sm">
            <BiCurrentLocation size={20} className="mr-2" />
            {character.location.name} 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
