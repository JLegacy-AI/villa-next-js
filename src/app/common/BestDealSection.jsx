"use client";
import React, { useState } from "react";

/*
    Best Deal Button
*/

const BestDealButton = ({ text, handler, selected }) => {
  return (
    <>
      <button
        className={`${
          selected ? "bg-secondary-orange " : "bg-black "
        } px-7  text-normal-text text-primary-whitesmoke py-3 mr-5 rounded-md`}
      >
        {text}
      </button>
    </>
  );
};
/*
    Best Deals Button
*/

const bestDealsButtons = [
  {
    text: "Appartment",
    handler: () => console.log("Handler"),
  },
  {
    text: "Appartment",
    handler: () => console.log("Handler"),
  },
  {
    text: "Appartment",
    handler: () => console.log("Handler"),
  },
];

/*
    Best Deals Main Component
*/
const BestDealSection = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <div className="w-full min-h-screen py-10 bg-gray-50 flex justify-center">
      <div className="max-w-[1200px] flex-1">
        <div className="flex">
          <div className="flex flex-col space-y-5 items-start ">
            <h6 className="px-2 text-[15px] font-bold text-secondary-orange border-l-4 border-l-secondary-orange leading-4">
              BEST DEAL
            </h6>
            <h1 className="text-section-heading font-bold">
              Find Your Best <br /> Deal Right Now!
            </h1>
          </div>
          <div className="flex items-end flex-1 justify-end">
            {bestDealsButtons.map((e, i) => {
              return (
                <>
                  <BestDealButton
                    key={i}
                    {...e}
                    selected={i === selectedButton}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDealSection;
