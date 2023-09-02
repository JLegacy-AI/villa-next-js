import React from "react";
import TopBar from "./TopBar";
import VisitScheduleButton from "./VisitScheduleButton";

const NavItem = ({ link, text }) => {
  return (
    <>
      <li>
        <a
          className="text-tertiary-dark hover:text-secondary-orange duration-300 text-[15px] font-medium"
          href={link}
        >
          {text}
        </a>
      </li>
    </>
  );
};

const items = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/",
    text: "Properties",
  },
  {
    link: "/",
    text: "Property Details",
  },
  {
    link: "/",
    text: "Contact Us",
  },
];

const Navbar = () => {
  return (
    <div className="w-full bg-primary-whitesmoke">
      <TopBar />
      <div className="w-full flex justify-center items-center px-4 py-5">
        <div className="max-w-[1200px] flex-1 flex justify-between items-center">
          <h1 className="text-[28px] font-bold">VILLA</h1>
          <div className="flex justify-center items-center space-x-10">
            <ul className="flex justify-end space-x-10">
              {items.map((e, i) => {
                return <NavItem key={i} {...e} />;
              })}
            </ul>
            <VisitScheduleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
