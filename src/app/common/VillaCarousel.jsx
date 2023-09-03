"use client";
import React from "react";
import { Carousel } from "antd";

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
        <h2 className="text-hero-section-heading text-white max-w-[340px] font-bold">
          {mainHeading}
        </h2>
      </div>
    </>
  );
};

/*
   Carousel Item
*/

const CarouselWrapper = ({ carouselObject }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${carouselObject.imageURL}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="flex-1  h-screen flex justify-between  items-center px-10 bg-secondary-orange"
      >
        <CarouselContent {...carouselObject} />
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
    imageURL: "./images/banner-01.jpg",
  },
  {
    subHeading: { city: "Miami", country: "South Florida" },
    mainHeading: "ACT NOW! GET THE HIGHEST LEVEL PENTHOUSE",
    imageURL: "./images/banner-02.jpg",
  },
  {
    subHeading: { city: "Melbourne", country: "Australia" },
    mainHeading: "BE QUICK! GET THE BEST VILLA IN TOWN",
    imageURL: "./images/banner-3.jpg",
  },
];

/*
    Carousel Main Component
*/
const VillaCarousel = () => {
  return (
    <div className="h-screen w-full  flex justify-center items-center overflow-hidden ">
      <Carousel dotPosition="left">
        {carouselContents.map((e, i) => {
          return <CarouselWrapper key={i} carouselObject={e} />;
        })}
      </Carousel>
    </div>
  );
};

export default VillaCarousel;
