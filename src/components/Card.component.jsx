import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Functional Component
export default function Card({
  size = "md",
  icon,
  image,
  svg,
  alt,
  label,
  labelSm,
  description,
  classes,
  onClick,
}) {
  return (
    <div
      className={`h-[18em] ${
        size === "md" ? "w-[18em]" : "w-[25em]"
      } rounded-lg bg-[#222] cursor-pointer hover:opacity-70 p-5 flex flex-col justify-center items-center gap-5`}
      onClick={onClick}
    >
      {(icon || image) && (
        <div className="w-[10em] h-[10em] flex justify-center items-center">
          {icon && <FontAwesomeIcon icon={icon} color="#fff" size="6x" />}
          {image && <img src={image} className={classes} alt={alt} />}
        </div>
      )}

      {label && (
        <span className="text-white text-2xl text-center">{label}</span>
      )}
      {labelSm && (
        <span className="text-white text-xl text-center">{labelSm}</span>
      )}

      {description && (
        <span className="text-white text-md text-center">{description}</span>
      )}
    </div>
  );
}
