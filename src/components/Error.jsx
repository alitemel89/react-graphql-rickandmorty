import React from "react";
import errorImage from "../images/error.jpg";

const Error = ({ msg }) => {

  return (
    <div className="flex flex-col justify-center space-y-2 mt-4">
      <img src={errorImage} alt="error" className="m-auto w-100 rounded-xl grayscale hover:grayscale-0"/>
      <h1 className="text-white text-2xl m-auto">
        An error has occured: <span className="text-pink-500">{msg}</span>
      </h1>
    </div>
  );
};

export default Error;
