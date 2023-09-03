import Image from "next/image";
import React from "react";
import Accordian from "./Accordian";
import VillaInformationTable from "./VillaInformationTable";

/*
    IMAGE Container
*/

const FeaturedImageSection = ({ imageURL, iconURL }) => {
  return (
    <>
      <div>
        <div className="w-auto">
          <Image
            className="w-96 h-auto"
            width={400}
            height={40}
            src={imageURL}
          />
        </div>
        <span className="w-16 h-16 -translate-x-[50%] -translate-y-[50%] absolute bg-secondary-orange rounded-full flex justify-center items-center pl-2 pt-2">
          <Image width={40} height={40} src={iconURL} />
        </span>
      </div>
    </>
  );
};

const FeaturedSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center  justify-center  my-10">
      <div className="max-w-[1200px] flex flex-1 space-x-10">
        <FeaturedImageSection
          imageURL={"/images/featured.jpg"}
          iconURL={"/images/featured-icon.png"}
        />
        <div className=" flex-1 flex flex-col items-start space-y-3">
          <div className="flex flex-col space-y-5 items-start ">
            <h6 className="px-2 text-[15px] font-bold text-secondary-orange border-l-4 border-l-secondary-orange leading-4">
              FEATURED
            </h6>
            <h1 className="text-section-heading font-bold">
              Best Appartment & Sea View
            </h1>
          </div>
          <Accordian />
        </div>
        <VillaInformationTable />
      </div>
    </div>
  );
};

export default FeaturedSection;
