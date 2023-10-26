import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Functional Component
export default function MenuIcon({id, icon, label, active, handleClick}) {

  return (
    <div className="flex flex-col justify-center items-center cursor-pointer hover:opacity-70 gap-2" onClick={() => handleClick(id)}>
      <FontAwesomeIcon icon={icon} color={active ? '#8C52FF' : '#fff' } size="3x" />
      <span className={active ? 'text-[#8C52FF]' : 'text-[#fff]' }>{ label }</span>
    </div>
  );
}
