import Image from "next/image";
import React from "react";

/* 
    Property Cards information Badge
*/

const PropertyCardInformationBadge = ({ description, value }) => {
  return (
    <>
      <div className=" text-sm flex justify-between px-2 py-1 rounded-md text-center text-secondary-text-color">
        <span className="font-medium">{description}:</span>
        <span className="font-bold pl-1">{value}</span>
      </div>
    </>
  );
};

/* 
    Property Cards Badge
*/

const PropertyCardBadge = ({ text }) => {
  return (
    <>
      <button className="px-3 text-sm font-medium  bg-secondary-orange bg-opacity-20 py-2 rounded-md">
        {text}
      </button>
    </>
  );
};

/* 
    Property Cards
*/

const PropertyCards = ({ imageURL, type, price, title, info }) => {
  return (
    <>
      <div className="p-4 shadow-lg rounded-md bg-gray-100">
        <Image className="rounded-md" src={imageURL} width={400} height={300} />
        <div className="w-full flex justify-between items-center py-3">
          <PropertyCardBadge text={type} />
          <p className="text-2xl text-secondary-orange font-bold">{price}</p>
        </div>
        <h1 className="text-xl font-bold mb-3">{title}</h1>
        <hr />
        <div className="flex flex-wrap gap-1 py-5">
          {info.map((e, i) => {
            return <PropertyCardInformationBadge {...e} />;
          })}
        </div>
        <hr />
        <div className="py-5">
          <button
            className="text-sm flex justify-between px-2 py-2 hover:bg-black hover:text-secondary-orange bg-secondary-orange rounded-md text-center text-white transition-colors duration-300"
            type="button"
          >
            Schedule a visit
          </button>
        </div>
      </div>
    </>
  );
};

/* 
    Properties Array Object
*/

const properties = [
  {
    imageURL: "/images/property-01.jpg",
    type: "Luxury Villa",
    title: "18 New Street Miami, OR 97219",
    price: "$2.264.000",
    info: [
      { description: "Bedrooms", value: "8" },
      { description: "Bathrooms", value: "8" },
      { description: "Floor", value: "3" },
      { description: "Area", value: "545m2" },
      { description: "Parking", value: "6 spots" },
    ],
  },
  {
    imageURL: "/images/property-02.jpg",
    type: "Luxury Villa",
    title: "18 New Street Miami, OR 97219",
    price: "$2.264.000",
    info: [
      { description: "Bedrooms", value: "8" },
      { description: "Bathrooms", value: "8" },
      { description: "Floor", value: "3" },
      { description: "Area", value: "545m2" },
      { description: "Parking", value: "6 spots" },
    ],
  },
  {
    imageURL: "/images/property-03.jpg",
    type: "Luxury Villa",
    title: "18 New Street Miami, OR 97219",
    price: "$2.264.000",
    info: [
      { description: "Bedrooms", value: "8" },
      { description: "Bathrooms", value: "8" },
      { description: "Floor", value: "3" },
      { description: "Area", value: "545m2" },
      { description: "Parking", value: "6 spots" },
    ],
  },
  {
    imageURL: "/images/property-04.jpg",
    type: "Luxury Villa",
    title: "18 New Street Miami, OR 97219",
    price: "$2.264.000",
    info: [
      { description: "Bedrooms", value: "8" },
      { description: "Bathrooms", value: "8" },
      { description: "Floor", value: "3" },
      { description: "Area", value: "545m2" },
      { description: "Parking", value: "6 spots" },
    ],
  },
  {
    imageURL: "/images/property-05.jpg",
    type: "Luxury Villa",
    title: "18 New Street Miami, OR 97219",
    price: "$2.264.000",
    info: [
      { description: "Bedrooms", value: "8" },
      { description: "Bathrooms", value: "8" },
      { description: "Floor", value: "3" },
      { description: "Area", value: "545m2" },
      { description: "Parking", value: "6 spots" },
    ],
  },
  {
    imageURL: "/images/property-06.jpg",
    type: "Luxury Villa",
    title: "18 New Street Miami, OR 97219",
    price: "$2.264.000",
    info: [
      { description: "Bedrooms", value: "8" },
      { description: "Bathrooms", value: "8" },
      { description: "Floor", value: "3" },
      { description: "Area", value: "545m2" },
      { description: "Parking", value: "6 spots" },
    ],
  },
];

/* 
    Property Section Main Component
*/

const PropertiesSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1200px]">
        <div className="w-full flex flex-col justify-center items-center space-y-5 my-28">
          <h6 className="px-2 text-[15px] font-bold text-secondary-orange border-l-4 border-l-secondary-orange leading-4">
            PROPERTIES
          </h6>
          <h1 className="text-section-heading font-bold  text-center ">
            We Provide The <br /> Best Property <br />
            You Like
          </h1>
        </div>
        <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {properties.map((e, i) => {
            return (
              <>
                <PropertyCards key={i} {...e} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertiesSection;
