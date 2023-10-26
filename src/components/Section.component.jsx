import React from "react";

// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CONSTANTS
import { sectionClass } from "../assets/constants/cssConstants";

export default function Section({title, icon, description, children}) {
  return (
    <div className={sectionClass}>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={icon} color="#8C52FF" size="xl" />
        <span className="text-[#8C52FF] text-2xl">{ title }</span>
      </div>
      <hr className="border-[1px] border-[#8C52FF]" />

      <span className="text-white text-lg">
        { description }
      </span>

      {children}
    </div>
  );
}
