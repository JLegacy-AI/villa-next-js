"use client";
import React, { useState } from "react";

/*
    Accordian Items
*/

const AccordianItem = ({
  title,
  description,
  handleSetVisibleNumber,
  visible,
  index,
}) => {
  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <button
          className={`${
            visible ? "text-secondary-orange " : " text-black "
          } px-3 flex min-h-[50px] justify-start items-center transition-all duration-300  font-medium text-lg`}
          onClick={() => handleSetVisibleNumber(index)}
        >
          {title}
        </button>
        {visible ? (
          <>
            <hr />
          </>
        ) : (
          ""
        )}
        <p
          className={`${
            visible ? "flex" : "hidden"
          } px-3 none bg-white py-3 text-justify shadow-md`}
        >
          {description}
        </p>
      </div>
    </>
  );
};

/* 
    Accordian Object
*/

const accordianObject = [
  {
    title: "Best useful links?",
    description:
      "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
  },
  {
    title: "Best useful links?",
    description:
      "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
  },
  {
    title: "Best useful links?",
    description:
      "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
  },
];

/* 
    Accordian 
*/

const Accordian = () => {
  const [visibleNumber, setVisibleNumber] = useState(-1);

  const handleSetVisibleNumber = (accordianItemNumber) => {
    if (accordianItemNumber == visibleNumber) {
      setVisibleNumber(-1);
    } else {
      setVisibleNumber(accordianItemNumber);
    }
  };

  return (
    <div className="w-full bg-slate-100 rounded-md ">
      {accordianObject.map((e, i) => {
        return (
          <>
            <AccordianItem
              key={i}
              {...e}
              handleSetVisibleNumber={handleSetVisibleNumber}
              visible={visibleNumber == i}
              index={i}
            />
            {i !== accordianObject.length - 1 ? <hr /> : ""}
          </>
        );
      })}
    </div>
  );
};

export default Accordian;
