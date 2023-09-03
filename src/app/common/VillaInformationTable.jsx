import Image from "next/image";
import React from "react";

/*
    Villa Information Table Item
*/

const VillaInformationTableItem = ({ imageURL, value, information }) => {
  return (
    <>
      <div className="flex space-x-5 justify-start items-center">
        <Image
          className="w-[52px] h-[52px]"
          src={imageURL}
          width="52"
          height="52"
        />
        <h4 className="font-bold text-2xl">
          {value}
          <br />
          <span className="text-normal-text font-normal ">{information}</span>
        </h4>
      </div>
    </>
  );
};

/*
    Villa Information Array Object
*/

const villaInformationObject = [
  {
    imageURL: "/images/info-icon-01.png",
    information: "Total Flat Surface",
    value: "250 m2",
  },
  {
    imageURL: "/images/info-icon-01.png",
    information: "Total Flat Surface",
    value: "250 m2",
  },
  {
    imageURL: "/images/info-icon-01.png",
    information: "Total Flat Surface",
    value: "250 m2",
  },
  {
    imageURL: "/images/info-icon-01.png",
    information: "Total Flat Surface",
    value: "250 m2",
  },
];

/*
    Villa Information Table
*/

const VillaInformationTable = () => {
  return (
    <div className="px-8 flex-1 flex flex-col justify-evenly min-w-fit shadow-lg drop-shadow-lg">
      {villaInformationObject.map((e, i) => {
        return (
          <>
            <VillaInformationTableItem key={i} {...e} />
            {i !== villaInformationObject.length - 1 ? <hr /> : ""}
          </>
        );
      })}
    </div>
  );
};

export default VillaInformationTable;
