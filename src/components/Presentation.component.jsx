import React from "react";

// STYLE
import "../App.css";

// ICONS
import {
  faArrowDown,
  faCar,
  faEnvelope,
  faFlag,
  faIdCard,
  faLocationDot,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image from "../assets/images/man-transparent.png";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Functional Component
export default function Presentation(props) {
  const basicIinformations = [
    { id: 0, label: "Birth: 10/11/1999", icon: faIdCard },
    { id: 1, label: "Nationality: italian", icon: faFlag },
    { id: 2, label: "Currently in Italy: Asti - Turin", icon: faLocationDot },
    { id: 3, label: "Driver Licence: B - with car", icon: faCar },
    // { id: 4, label: "Mail: alessandro.mancuso99@gmail.com", icon: faEnvelope },
  ];

  const infoLegenda = ({ icon, label }) => (
    <div className="flex gap-3 items-center">
      <FontAwesomeIcon icon={icon} color="#fff" size="lg" />
      <span className="text-white text-lg">{label}</span>
    </div>
  );

  const headerInfo = (
    <div className="hidden sm:flex absolute top-10 right-[5em] gap-3 ">
    <div className="flex gap-2 items-center mx-2">
        <FontAwesomeIcon icon={faEnvelope} color="#fff" size="lg" />
        <span className="text-lg text-white">alessandro.mancuso99@gmail.com</span>
      </div>
      <div className="flex gap-2 items-center mx-2">
        <FontAwesomeIcon icon={faPhone} color="#fff" size="lg" />
        <span className="text-lg text-white">+39 3485875329</span>
      </div>
      <FontAwesomeIcon icon={faLinkedin} color="#fff" size="xl" />
      <FontAwesomeIcon icon={faInstagram} color="#fff" size="xl" />
    </div>
  );

  return (
    <div className="w-full h-full pl-[2em] sm:pl-[10em] presentationBackground">
      {headerInfo}
      <div className="absolute top-[40em] sm:top-[15em] sm:right-[5em] flex flex-col gap-3">
        {basicIinformations.map((info) => infoLegenda(info))}
      </div>

      <div className="absolute bottom-0 sm:right-[20em] flex items-center gap-[5em] ">
        <div className="flex flex-col gap-3 mt-[-80em] sm:mt-[-10em]">
          <span className="text-white text-4xl">
            Hi, I'm <span className="text-[#8C52FF]">Alessandro Mancuso</span>
          </span>
          <span className="text-white text-2xl opacity-70">
            ICT & Software Developer
          </span>
          <button className="w-[13em] h-[3em] p-2 bg-[#8C52FF] hover:opacity-70 rounded-xl flex items-center justify-center gap-3 mt-2">
            <span className="text-white text-lg font-semibold">
              Download my CV
            </span>
            <FontAwesomeIcon icon={faArrowDown} color="#fff" size="lg" />
          </button>
        </div>

        <img
          src={image}
          alt="Alessandro Mancuso"
          className="hidden sm:block w-[30em] h-[45em]"
        />
      </div>
    </div>
  );
}
