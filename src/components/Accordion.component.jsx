import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { useSpring, animated } from 'react-spring';

// Functional Component
export default function Accordion({
  icon,
  preTitle,
  title,
  subTitle,
  children,
  isAccordionOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(isAccordionOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const contentSpring = useSpring({
    height: isOpen ? 'auto' : 0,
    opacity: isOpen ? 1 : 0
  });

  return (
    <div className="flex flex-col">
      <div className="flex items-center" onClick={toggleAccordion}>
        <div className="flex flex-col flex-1">
          <span className="text-white opacity-70 text-xs">{preTitle}</span>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={icon} color="#fff" size="sm" />
            <span className="text-white text-lg"> {title} </span>
          </div>
          <span className="text-white opacity-70 text-sm">{subTitle}</span>
        </div>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          color="#fff"
          size="lg"
        />
      </div>

      <hr className="my-2 " />

      {isOpen && (
        <animated.div style={contentSpring}>
            {children}
        </animated.div>
      )}
    </div>
  );
}
