import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Functional Component
export default function Card({ icon, image, svg, alt, label, classes, onClick }) {
  return (
    <div className="w-[18em] h-[18em] rounded-lg bg-[#222] cursor-pointer hover:opacity-70 p-5 flex flex-col justify-center items-center gap-5" onClick={onClick}>
      <div className="w-[10em] h-[10em] flex justify-center items-center">
        {icon && <FontAwesomeIcon icon={icon} color="#fff" size="6x" />}
        {image && <img src={image} className={classes} alt={alt} />}
      </div>

      <span className="text-white text-2xl text-center">{label}</span>
    </div>
  );
}
