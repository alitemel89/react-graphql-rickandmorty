import React from "react";
import heroImage from '../images/error.jpg';

const Hero = () => {
  return (
    <div className="bg-slate-800 min-h-screen p-10">
      <div className="space-y-10 md:grid md:grid-cols-2 gap-4">
        <div className="md:flex md:justify-center md:flex-col">
          <h2 className="text-pink-200 text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Rick and Morty GraphQL 
          </h2>

          <p className="text-lg text-gray-100">
          This website is rendering characters of 
          <strong> Rick and Morty</strong> series and
          built for educational purposes.
          ReactJS, TailwindCSS and GraphQL is used in this project.
          </p>
        </div>

        <div>
          <img src={heroImage} alt="heroimage" className="rounded-2xl shadow-2xl shadow-pink-500/30" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
