"use client";
import React from "react";
import GoogleMapReact from "google-map-react";
import imageURL from "../../../public/images/contact-bg.jpg";
import Image from "next/image";

/*
    Contact Card
*/

const ContactCard = ({ imageURL, title, value }) => {
  return (
    <>
      <div className="flex space-x-4 p-3 bg-white shadow-lg max-w-fit items-center rounded-md border">
        <Image className="w-10 h-10" src={imageURL} height={100} width={100} />
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium">{value}</h1>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

/*
  Contact Array Object
*/

const contacts = [
  {
    imageURL: "/images/phone-icon.png",
    title: "Phone Number",
    value: "010-020-0340",
  },
  {
    imageURL: "/images/phone-icon.png",
    title: "Phone Number",
    value: "010-020-0340",
  },
];

/*
    Contact Section Main Component
*/

const ContactSection = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="w-full  py-10 flex flex-col items-center">
      <Image
        className="absolute w-screen h-auto -z-50"
        src={imageURL}
        height={500}
        width={1000}
      />
      <div className="w-full flex flex-col justify-center items-center space-y-5  py-20">
        <h6 className="px-2 text-[15px] font-bold text-secondary-orange border-l-4 border-l-secondary-orange leading-4">
          VIDEO VIEW
        </h6>
        <h1 className="text-section-heading font-bold text-white text-center ">
          Get Closer View <br /> & Different <br />
          Feeling
        </h1>
      </div>
      <div className="max-w-[1200px] w-full flex ">
        <div className="max-w-[700px] w-full flex flex-col">
          <div className="left-20 max-w-[700px] w-full h-[500px] bg-orange-800 text-white flex justify-center items-center ">
            Google Map Will be Here Soon
          </div>
          <div className="flex justify-between py-10">
            {contacts.map((e, i) => {
              return (
                <>
                  <ContactCard key={i} {...e} />
                </>
              );
            })}
          </div>
        </div>
        <div className="flex-1 flex justify-start mx-10 px-10 bg-white shadow-lg">
          <form className="max-w-[500px] w-full space-y-4 justify-between flex flex-col my-10">
            <div className="flex flex-col w-full">
              <label className="" htmlFor="FullName">
                Full Name
              </label>
              <input
                className="h-12 w-full border  px-5"
                type="text"
                name="fullName"
                id=""
                placeholder="Full Name..."
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="" htmlFor="FullName">
                Email Address
              </label>
              <input
                className="h-12 w-full border  px-5"
                type="text"
                name="fullName"
                id=""
                placeholder="Email Address..."
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="" htmlFor="FullName">
                Subject
              </label>
              <input
                className="h-12 w-full border  px-5"
                type="text"
                name="fullName"
                id=""
                placeholder="Subject..."
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="" htmlFor="FullName">
                Enter Message
              </label>
              <textarea
                className="border "
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              className="text-sm flex justify-center px-2 py-3  hover:bg-black hover:text-secondary-orange bg-secondary-orange rounded-md text-center text-white transition-colors duration-300"
              type="button"
            >
              Schedule a visit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
