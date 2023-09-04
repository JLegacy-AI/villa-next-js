import React from "react";
import { FaCalendar } from "react-icons/fa";

const VisitScheduleButton = () => {
  return (
    <div className="h-10 flex justify-between max-w-[200px] items-center space-x-3 bg-tertiary-dark text-white pr-3 rounded-full group cursor-pointer">
      <span className="h-10 w-10 bg-secondary-orange flex justify-center items-center rounded-full -translate-x-1">
        <FaCalendar className="text-xl" />
      </span>
      <span className="flex-1 text-center text-sm group-hover:text-secondary-orange transition-colors duration-500  ">
        Schedule a visit
      </span>
    </div>
  );
};

export default VisitScheduleButton;
