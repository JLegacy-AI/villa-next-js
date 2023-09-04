"use client";
import React, { useState } from "react";
import Image from "next/image";
import VisitScheduleButton from "./VisitScheduleButton";

/*
    Best Deal Villa Information Table Cell
*/

const BestDealTableCell = ({ value, description }) => {
  return (
    <div className="space-x-10">
      <span className="text-tertiary-light-gray">{description}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
};

/*
    Best Deal Villa Information Container
*/

const BestDealSubContainer = ({ data, description, title, imageURL }) => {
  return (
    <>
      <div className="py-16 w-full flex justify-between space-x-10">
        <div className="flex-1 shadow-lg flex flex-col justify-evenly items-center">
          {data.map((e, i) => {
            return (
              <>
                <BestDealTableCell {...e} />
              </>
            );
          })}
        </div>
        <Image
          className="flex-[2] shadow-lg"
          src={imageURL}
          width={500}
          height={500}
        />
        <div className="flex-1 flex flex-col space-y-10">
          <h5 className="text-normal-text font-bold">{title}</h5>
          <div className="flex-1 flex flex-col justify-between">
            {description.map((e, i) => {
              return (
                <p className="text-secondary-text-color" key={i}>
                  {e}
                </p>
              );
            })}
          </div>
          <VisitScheduleButton />
        </div>
      </div>
    </>
  );
};

/*
    Best Deal Button
*/

const BestDealButton = ({ text, handler, selected, index }) => {
  return (
    <>
      <button
        className={`${
          selected ? "bg-secondary-orange " : "bg-black "
        } px-7  text-normal-text text-primary-whitesmoke py-3 mr-5 rounded-md`}
        onClick={() => handler(index)}
      >
        {text}
      </button>
    </>
  );
};

/*
    Best Deals Information
*/

const bestDealHouseInformationArray = [
  {
    data: [
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
    ],
    imageURL: "/images/deal-01.jpg",
    title: "Extra Info About Property",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      "When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
    ],
  },
  {
    data: [
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
    ],
    imageURL: "/images/deal-02.jpg",
    title: "Extra Info About Property",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      "When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
    ],
  },
  {
    data: [
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
      {
        value: "185 m2",
        description: "Total Flat Space",
      },
    ],
    imageURL: "/images/deal-03.jpg",
    title: "Extra Info About Property",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      "When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
    ],
  },
];

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
                    index={i}
                    handler={setSelectedButton}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between">
          <BestDealSubContainer
            {...bestDealHouseInformationArray[selectedButton]}
          />
        </div>
      </div>
    </div>
  );
};

export default BestDealSection;
