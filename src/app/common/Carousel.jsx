"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
// import IMAGE from "@/app/assets/images/banner-01.jpg";
import IMAGE from "../assets/images/banner-01.jpg";

/*
    Carousel Content Component
*/

const CarouselContent = ({ subHeading, mainHeading }) => {
  return (
    <>
      <div className="h-full flex flex-col justify-center items-start px-24 leading-tight">
        <div className="bg-primary-whitesmoke text-tertiary-dark font-medium w-fit px-4 py-2">
          <span>{subHeading["city"]}</span>,{" "}
          <span className="text-secondary-orange">{subHeading["country"]}</span>
        </div>
        <h2 className="text-hero-section-heading max-w-[340px] font-bold">
          {mainHeading}
        </h2>
      </div>
    </>
  );
};

/*
   Array Carousel Content
*/

const carouselContents = [
  {
    subHeading: { city: "Toronto", country: "Canada" },
    mainHeading: "HURRY! GET THE BEST VILLA FOR YOU",
  },
  {
    subHeading: { city: "Toronto", country: "Canada" },
    mainHeading: "HURRY! GET THE BEST VILLA FOR YOU",
  },
  {
    subHeading: { city: "Toronto", country: "Canada" },
    mainHeading: "HURRY! GET THE BEST VILLA FOR YOU",
  },
];

/*
    Carousel Main Component
*/
const Carousel = () => {
  const [itemNumber, setItemNumber] = useState(0);
  return (
    <div className="h-screen w-full text-white flex justify-center items-center overflow-hidden">
      <Image className="absolute -z-[1000]" src={IMAGE} />
      <button
        className="h-10 w-10  bg-white bg-opacity-25 hover:bg-opacity-60 transition-colors duration-300 rounded-full flex justify-center items-center outline-none"
        onClick={() =>
          setItemNumber(
            itemNumber > 0 ? itemNumber - 1 : carouselContents.length - 1
          )
        }
      >
        <FaAngleLeft />
      </button>
      <div className="flex-1 max-w-[1200px] h-screen flex justify-between  items-center px-10">
        <CarouselContent {...carouselContents[itemNumber]} />
      </div>
      <button
        className="h-10 w-10 bg-white bg-opacity-25 hover:bg-opacity-60 transition-colors duration-300  rounded-full flex justify-center items-center outline-none"
        onClick={() => setItemNumber(itemNumber < 2 ? itemNumber + 1 : 0)}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Carousel;
