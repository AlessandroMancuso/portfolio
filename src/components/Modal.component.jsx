import React from "react";

// ICONS
import {
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Functional Component
export default function Modal({ children, onClose }) {
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[RGBA(0,0,0,0.90)] z-999">
      <div className="bg-[#222] w-[50%] h-auto max-h-[80%] overflow-y-auto rounded-lg p-5">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faClose}
            color="#fff"
            size="2xl"
            onClick={onClose}
            className="cursor-pointer hover:opacity-70"
          />
        </div>

        {children}
      </div>
    </div>
  );
}
