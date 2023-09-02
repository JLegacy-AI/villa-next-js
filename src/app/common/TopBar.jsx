import React from "react";
import {
  FaMap,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

/*
    Information Display Component
*/
const InfoComponent = ({ Icon, info }) => {
  return (
    <>
      <div className="flex justify-center items-center space-x-2">
        <Icon className=" text-secondary-orange text-xl" />
        <span className="text-secondary-text-color">{info}</span>
      </div>
    </>
  );
};

/*
    Icon Wrapper 
*/
const IconWrapper = ({ Icon }) => {
  return (
    <>
      <div className="flex justify-center items-center h-7 w-7 rounded-full bg-tertiary-light-gray hover:bg-secondary-orange cursor-pointer transition-colors duration-500">
        <Icon className="text-white" />
      </div>
    </>
  );
};

/*
    Array of Information Object
*/

const information = [
  { Icon: FaEnvelope, info: "info@company.com" },
  { Icon: FaMap, info: "Sunny Isles Beach, FL 33160" },
];

/*
    Array of Social Media
*/

const socialMedia = [FaFacebook, FaInstagram, FaLinkedin, FaTwitter];

/*
    Top bar Main Compnent
*/

const TopBar = () => {
  return (
    <div className="w-full px-4 py-5 bg-primary border-b-[1px] border-b-border-color flex justify-center">
      <div className="max-w-[1200px] flex-1 flex justify-between">
        <div className="flex space-x-10">
          {information.map((info, index) => {
            return <InfoComponent key={index} {...info} />;
          })}
        </div>
        <div className="flex space-x-2">
          {socialMedia.map((e, index) => {
            return <IconWrapper key={index} Icon={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
