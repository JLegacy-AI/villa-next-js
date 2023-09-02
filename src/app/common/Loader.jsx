import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 right-0 z-50 bg-black flex justify-center items-center space-x-1">
      <span
        style={{
          animationDelay: "100ms",
        }}
        className="w-5 h-5 bg-orange-600  rounded-full animate-bounce"
      ></span>
      <span
        style={{
          animationDelay: "200ms",
        }}
        className="w-5 h-5 bg-orange-600  rounded-full animate-bounce"
      ></span>
      <span
        style={{
          animationDelay: "300ms",
        }}
        className="w-5 h-5 bg-orange-600  rounded-full animate-bounce "
      ></span>
      <span
        style={{
          animationDelay: "400ms",
        }}
        className="w-5 h-5 bg-orange-600  rounded-full animate-bounce "
      ></span>
    </div>
  );
};

export default Loader;
