import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

/*
    Video Section Card Component 
*/

const VideoSectionCard = ({ value, description }) => {
  return (
    <>
      <div className="bg-secondary-orange bg-opacity-10 flex justify-center px-8 py-4 space-x-6 rounded-xl">
        <h1 className="text-section-heading font-bold text-secondary-orange">
          {value}
        </h1>
        <p className="max-w-[130px] flex items-center font-medium">
          {description}
        </p>
        <span className="absolute w-12 h-12 rounded-full bg-secondary-orange translate-x-32 -translate-y-10"></span>
      </div>
    </>
  );
};

/*
    Video Section Card Object
*/

const videoSectionCards = [
  {
    value: "34",
    description: "Buildings Finished Now",
  },
  {
    value: "34",
    description: "Buildings Finished Now",
  },
  {
    value: "34",
    description: "Buildings Finished Now",
  },
];

/*
    Video Section Main Component
*/

const VideoViewSection = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden py-10">
      <Image
        className="absolute h-[90vh] z-[-1000]"
        src="/images/video-bg.jpg"
        height={766}
        width={1366}
      />
      <div className="w-full flex flex-col justify-center items-center space-y-5 my-20">
        <h6 className="px-2 text-[15px] font-bold text-secondary-orange border-l-4 border-l-secondary-orange leading-4">
          VIDEO VIEW
        </h6>
        <h1 className="text-section-heading font-bold text-white text-center ">
          Get Closer View <br /> & Different <br />
          Feeling
        </h1>
      </div>
      <div className="w-full flex justify-center items-center h-[50vh] mb-10">
        <Image
          className="absolute rounded-lg w-[67%] shadow-md"
          src="/images/video-frame.jpg"
          height={766}
          width={500}
        />
        <span className="absolute h-16 w-16 bg-secondary-orange bg-opacity-20 rounded-full"></span>
        <a
          className="z-[1000]  text-sm text-secondary-orange bg-white h-10 w-10  flex justify-center items-center rounded-full"
          href="/"
        >
          <FaPlay />
        </a>
      </div>
      <div className="w-full min-h-[50vh] flex justify-evenly items-center">
        {videoSectionCards.map((e, i) => {
          return (
            <>
              <VideoSectionCard key={i} {...e} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default VideoViewSection;
